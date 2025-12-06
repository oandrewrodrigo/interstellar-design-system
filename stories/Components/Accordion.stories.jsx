import React, { useState } from 'react';
import { Accordion } from '../../src/components/Accordion';

export default {
  title: 'Components/Layout/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Componente Accordion do Design System Interstellar. Painel expansível/retrátil com header e conteúdo opcional.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'Estado do accordion',
    },
    breakpoint: {
      control: { type: 'select' },
      options: ['desktop', 'mobile'],
      description: 'Breakpoint (desktop ou mobile)',
    },
    isOpened: {
      control: { type: 'boolean' },
      description: 'Se o accordion está aberto',
    },
    isStartIcon: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o ícone inicial',
    },
    isEndIcon: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o ícone final (chevron)',
    },
    isBadge: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o badge',
    },
    isCtaButton: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o botão CTA no conteúdo',
    },
  },
};

// Template básico
const Template = (args) => {
  const [isOpened, setIsOpened] = useState(args.isOpened || false);

  return (
    <div className="p-8 max-w-2xl">
      <Accordion {...args} isOpened={isOpened} onChange={setIsOpened} />
    </div>
  );
};

// Story padrão
export const Default = Template.bind({});
Default.args = {
  title: 'Insira seu título aqui',
  contentText: 'Insira seu conteúdo aqui.',
  state: 'default',
  breakpoint: 'desktop',
  isOpened: false,
  isStartIcon: true,
  isEndIcon: true,
  isBadge: true,
  badgeText: 'Label',
  isCtaButton: true,
  ctaButtonText: 'Botão',
};

// Story com estado Hover
export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  state: 'hover',
};

// Story com estado Focused
export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
  state: 'focused',
};

// Story com estado Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  state: 'disabled',
};

// Story aberto
export const Opened = Template.bind({});
Opened.args = {
  ...Default.args,
  isOpened: true,
};

// Story mobile
export const Mobile = Template.bind({});
Mobile.args = {
  ...Default.args,
  breakpoint: 'mobile',
};

// Story sem ícones
export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  ...Default.args,
  isStartIcon: false,
  isEndIcon: false,
};

// Story sem badge
export const WithoutBadge = Template.bind({});
WithoutBadge.args = {
  ...Default.args,
  isBadge: false,
};

// Story sem botão CTA
export const WithoutCtaButton = Template.bind({});
WithoutCtaButton.args = {
  ...Default.args,
  isCtaButton: false,
};

// Story com conteúdo customizado
export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  ...Default.args,
  isOpened: true,
  children: (
    <div>
      <p className="text-sm text-gray-60 mb-4">
        Este é um conteúdo customizado com múltiplos elementos.
      </p>
      <ul className="list-disc list-inside text-sm text-gray-60 space-y-2">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  ),
};

// Story com múltiplos accordions
export const Multiple = () => {
  const [openedIndex, setOpenedIndex] = useState(null);

  const items = [
    {
      title: 'Primeiro Accordion',
      contentText: 'Conteúdo do primeiro accordion.',
      badgeText: 'Novo',
    },
    {
      title: 'Segundo Accordion',
      contentText: 'Conteúdo do segundo accordion.',
      badgeText: '2',
    },
    {
      title: 'Terceiro Accordion',
      contentText: 'Conteúdo do terceiro accordion.',
      badgeText: 'Label',
    },
  ];

  return (
    <div className="p-8 max-w-2xl space-y-0">
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          contentText={item.contentText}
          badgeText={item.badgeText}
          isOpened={openedIndex === index}
          onChange={(isOpened) => {
            setOpenedIndex(isOpened ? index : null);
          }}
          state={openedIndex === index ? 'focused' : 'default'}
        />
      ))}
    </div>
  );
};
