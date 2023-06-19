import {useMemo, useReducer} from 'react';

import {Block, BlockDecorationProps, HeaderBlockTypes, PageContent} from '../../models';
import {getCustomHeaderTypes, getHeaderBlock} from '../../utils';
import {EditBlockActions, EditBlockControls} from '../components/EditBlock/EditBlock';
import {EditBlockProps, EditorProps, ViewModeItem} from '../types';

import {
    ADD_BLOCK,
    COPY_BLOCK,
    DELETE_BLOCK,
    ORDER_BLOCK,
    SELECT_BLOCK,
    UPDATE_CONTENT,
    UPDATE_VIEW_MODE,
    reducer,
} from './reducer';
import {addEditorProps} from './utils';

export type EditorBlockId = number | string;

export function useEditorState({content: intialContent, custom}: Omit<EditorProps, 'children'>) {
    const [{activeBlockIndex, content, errorBoundaryState, viewMode}, dispatch] = useReducer(
        reducer,
        {
            activeBlockIndex: 0,
            errorBoundaryState: 0,
            content: addEditorProps(intialContent),
            viewMode: ViewModeItem.Edititng,
        },
    );

    return useMemo(() => {
        const headerBlockTypes = [...HeaderBlockTypes, ...getCustomHeaderTypes(custom)];
        const contentHasHeader = Boolean(getHeaderBlock(content.blocks, headerBlockTypes));
        const checkIsHeader = (type: string) => headerBlockTypes.includes(type);

        const onAdd = (block: Block) => {
            const isHeader = checkIsHeader(block.type);

            if (contentHasHeader && isHeader) {
                //TODO: add warning that it should be only one header block
                return;
            }

            // eslint-disable-next-line no-nested-ternary
            const index = isHeader
                ? 0
                : activeBlockIndex === -1
                ? content.blocks.length
                : activeBlockIndex + 1;

            dispatch({type: ADD_BLOCK, payload: {block, index}});
        };
        const onSelect = (index: number) => dispatch({type: SELECT_BLOCK, payload: index});
        const onContentUpdate = (newContent: PageContent) =>
            dispatch({type: UPDATE_CONTENT, payload: newContent});
        const onViewModeUpdate = (newViewMode: ViewModeItem) =>
            dispatch({type: UPDATE_VIEW_MODE, payload: newViewMode});

        const injectEditBlockProps = ({
            type,
            index: relativeIndex = 0,
            children,
        }: BlockDecorationProps) => {
            const orderedBlocksStartIndex = contentHasHeader ? 1 : 0;
            const isHeader = checkIsHeader(type);
            const index = isHeader ? 0 : relativeIndex + orderedBlocksStartIndex;
            const isActive = activeBlockIndex === index;
            const actions: EditBlockActions = {
                [EditBlockControls.Delete]: () => dispatch({type: DELETE_BLOCK, payload: index}),
            };

            if (!isHeader) {
                actions[EditBlockControls.Copy] = () =>
                    dispatch({type: COPY_BLOCK, payload: index});

                if (index > orderedBlocksStartIndex) {
                    actions[EditBlockControls.Up] = () =>
                        dispatch({
                            type: ORDER_BLOCK,
                            payload: {oldIndex: index, newIndex: index - 1},
                        });
                }

                if (index < content.blocks.length - 1) {
                    actions[EditBlockControls.Down] = () =>
                        dispatch({
                            type: ORDER_BLOCK,
                            payload: {oldIndex: index, newIndex: index + 1},
                        });
                }
            }

            return {
                children,
                isHeader,
                isActive,
                actions,
                onSelect: () => onSelect(index),
            } as EditBlockProps;
        };

        return {
            activeBlockIndex,
            content,
            errorBoundaryState,
            viewMode,
            injectEditBlockProps,
            onAdd,
            onSelect,
            onContentUpdate,
            onViewModeUpdate,
        };
    }, [content, activeBlockIndex, errorBoundaryState, custom, viewMode]);
}