import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import yfm from '@doc-tools/transform';

import BackgroundCard from '../BackgroundCard';
import {BackgroundCardProps} from '../../../models';
import {CARDS, COMPONENTS} from '../../../demo/constants';

export default {
    component: BackgroundCard,
    title: `${COMPONENTS}/${CARDS}/BackgroundCard`,
    argTypes: {
        backgroundColor: {
            control: {type: 'color'},
        },
    },
} as Meta;

const DefaultTemplate: Story<BackgroundCardProps> = (args) => (
    <div style={{maxWidth: '400px'}}>
        <BackgroundCard {...args} />
    </div>
);
const PaddingsTemplate: Story<BackgroundCardProps> = (args) => (
    <div style={{display: 'flex'}}>
        <div style={{display: 'inline-table', maxWidth: '400px', padding: '0 8px'}}>
            <BackgroundCard {...args} title="paddingBottom = s" paddingBottom="s" />
        </div>
        <div style={{display: 'inline-table', maxWidth: '400px', padding: '0 8px'}}>
            <BackgroundCard {...args} title="paddingBottom = m" paddingBottom="m" />
        </div>
        <div style={{display: 'inline-table', maxWidth: '400px', padding: '0 8px'}}>
            <BackgroundCard {...args} title="paddingBottom = l" paddingBottom="l" />
        </div>
        <div style={{display: 'inline-table', maxWidth: '400px', padding: '0 8px'}}>
            <BackgroundCard {...args} title="paddingBottom = xl" paddingBottom="xl" />
        </div>
    </div>
);
const ThemesTemplate: Story<BackgroundCardProps> = (args) => (
    <div style={{display: 'flex'}}>
        <div style={{maxWidth: '400px', padding: '0 8px'}}>
            <BackgroundCard {...args} title="Тема по умолчанию = s" theme="default" />
        </div>
        <div style={{maxWidth: '400px', padding: '0 8px'}}>
            <BackgroundCard {...args} title="Темная тема = m" theme="dark" />
        </div>
        <div style={{maxWidth: '400px', padding: '0 8px'}}>
            <BackgroundCard {...args} title="Светлая тема = l" theme="light" />
        </div>
    </div>
);

export const Default = DefaultTemplate.bind({});
export const Paddings = PaddingsTemplate.bind({});
export const Themes = ThemesTemplate.bind({});
export const BorderLine = DefaultTemplate.bind({});
export const BackgroundColor = DefaultTemplate.bind({});

Default.args = {
    url: '#',
    title: 'Концепция безопасности',
    text: yfm(
        '**Yandex.Cloud — публичная облачная платформа**, которая [предоставляет](https://ya.com) корпорациям, среднему бизнесу и частным разработчикам масштабируемую инфраструктуру, сервисы хранения данных, инструменты машинного обучения и средства разработки. С этими технологиями, проверенными временем и опытом Яндекса, каждый может создавать и непрерывно совершенствовать собственные ультрасовременные цифровые сервисы и приложения.',
    ).result.html,
    background: {
        src: 'https://storage.cloud-preprod.yandex.net/berdysheva-test/bg_card_0001.png',
        alt: 'Концепция безопасности',
        disableCompress: true,
    },
    paddingBottom: 's',
};

Paddings.args = {
    url: '#',
    text: yfm(
        '**Yandex.Cloud — публичная облачная платформа**, которая [предоставляет](https://ya.com) корпорациям, среднему бизнесу и частным разработчикам масштабируемую инфраструктуру, сервисы хранения данных, инструменты машинного обучения и средства разработки.',
    ).result.html,
    background: {
        src: 'https://storage.cloud-preprod.yandex.net/berdysheva-test/bg_card_0001.png',
        alt: 'Концепция безопасности',
        disableCompress: true,
    },
};

Themes.args = {
    url: '#',
    text: yfm(
        '**Yandex.Cloud — публичная облачная платформа**, которая [предоставляет](https://ya.com) корпорациям, среднему бизнесу и частным разработчикам масштабируемую инфраструктуру, сервисы хранения данных, инструменты машинного обучения и средства разработки.',
    ).result.html,
    background: {
        src: 'https://storage.cloud-preprod.yandex.net/berdysheva-test/bg_card_0002.png',
        alt: 'Концепция безопасности',
        disableCompress: true,
    },
    paddingBottom: 's',
};

BorderLine.args = {
    url: '#',
    title: 'Концепция безопасности',
    text: yfm(
        '**Yandex.Cloud — публичная облачная платформа**, которая [предоставляет](https://ya.com) корпорациям, среднему бизнесу и частным разработчикам масштабируемую инфраструктуру, сервисы хранения данных, инструменты машинного обучения и средства разработки. С этими технологиями, проверенными временем и опытом Яндекса, каждый может создавать и непрерывно совершенствовать собственные ультрасовременные цифровые сервисы и приложения.',
    ).result.html,
    background: {
        src: 'https://storage.cloud-preprod.yandex.net/berdysheva-test/bg_card_0001.png',
        alt: 'Концепция безопасности',
        disableCompress: true,
    },
    paddingBottom: 's',
    border: 'line',
};

BackgroundColor.args = {
    url: '#',
    title: 'Концепция безопасности',
    text: yfm(
        '**Yandex.Cloud — публичная облачная платформа**, которая [предоставляет](https://ya.com) корпорациям, среднему бизнесу и частным разработчикам масштабируемую инфраструктуру, сервисы хранения данных, инструменты машинного обучения и средства разработки. С этими технологиями, проверенными временем и опытом Яндекса, каждый может создавать и непрерывно совершенствовать собственные ультрасовременные цифровые сервисы и приложения.',
    ).result.html,
    background: {
        src: 'https://storage.cloud-preprod.yandex.net/berdysheva-test/bg_card_0001.png',
        alt: 'Концепция безопасности',
        disableCompress: true,
    },
    paddingBottom: 's',
    backgroundColor: '#7ccea0',
};