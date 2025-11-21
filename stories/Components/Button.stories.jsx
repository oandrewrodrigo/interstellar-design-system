import React from 'react';
import { Button } from '../../src/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button do Design System Interstellar. Suporta múltiplas variações de tamanho, cor, hierarquia e estado.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do botão',
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'destructive', 'gray'],
      description: 'Cor do botão',
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined', 'link'],
      description: 'Hierarquia visual do botão',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'Estado do botão',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o botão está desabilitado',
    },
  },
};

// Template básico
const Template = (args) => <Button {...args}>Botão</Button>;

// Story padrão
export const Default = Template.bind({});
Default.args = {
  size: 'md',
  color: 'brand',
  hierarchy: 'primary',
  state: 'default',
};

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Button size="xs" color="brand" hierarchy="primary">Extra Small</Button>
      <Button size="sm" color="brand" hierarchy="primary">Small</Button>
      <Button size="md" color="brand" hierarchy="primary">Medium</Button>
      <Button size="lg" color="brand" hierarchy="primary">Large</Button>
      <Button size="xl" color="brand" hierarchy="primary">Extra Large</Button>
    </div>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho do botão: xs (24px), sm (32px), md (40px), lg (48px), xl (56px)',
    },
  },
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Button size="md" color="brand" hierarchy="primary">Brand</Button>
      <Button size="md" color="destructive" hierarchy="primary">Destructive</Button>
      <Button size="md" color="gray" hierarchy="primary">Gray</Button>
    </div>
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Variações de cor do botão: Brand (azul), Destructive (vermelho), Gray (cinza)',
    },
  },
};

// Hierarquias
export const Hierarchies = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Button size="md" color="brand" hierarchy="primary">Primary</Button>
      <Button size="md" color="brand" hierarchy="secondary">Secondary</Button>
      <Button size="md" color="brand" hierarchy="outlined">Outlined</Button>
      <Button size="md" color="brand" hierarchy="link">Link</Button>
    </div>
  </div>
);
Hierarchies.parameters = {
  docs: {
    description: {
      story: 'Variações de hierarquia: Primary (fundo sólido), Secondary (fundo claro), Outlined (borda), Link (apenas texto)',
    },
  },
};

// Estados
export const States = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Button size="md" color="brand" hierarchy="primary" state="default">Default</Button>
      <Button size="md" color="brand" hierarchy="primary" state="hover">Hover</Button>
      <Button size="md" color="brand" hierarchy="primary" state="focused">Focused</Button>
      <Button size="md" color="brand" hierarchy="primary" state="disabled">Disabled</Button>
    </div>
  </div>
);
States.parameters = {
  docs: {
    description: {
      story: 'Estados do botão: Default, Hover, Focused e Disabled',
    },
  },
};

// Todas as combinações Primary
export const PrimaryVariations = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Brand</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="brand" hierarchy="primary">XS</Button>
        <Button size="sm" color="brand" hierarchy="primary">SM</Button>
        <Button size="md" color="brand" hierarchy="primary">MD</Button>
        <Button size="lg" color="brand" hierarchy="primary">LG</Button>
        <Button size="xl" color="brand" hierarchy="primary">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Destructive</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="destructive" hierarchy="primary">XS</Button>
        <Button size="sm" color="destructive" hierarchy="primary">SM</Button>
        <Button size="md" color="destructive" hierarchy="primary">MD</Button>
        <Button size="lg" color="destructive" hierarchy="primary">LG</Button>
        <Button size="xl" color="destructive" hierarchy="primary">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Gray</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="gray" hierarchy="primary">XS</Button>
        <Button size="sm" color="gray" hierarchy="primary">SM</Button>
        <Button size="md" color="gray" hierarchy="primary">MD</Button>
        <Button size="lg" color="gray" hierarchy="primary">LG</Button>
        <Button size="xl" color="gray" hierarchy="primary">XL</Button>
      </div>
    </div>
  </div>
);

// Todas as combinações Secondary
export const SecondaryVariations = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Brand</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="brand" hierarchy="secondary">XS</Button>
        <Button size="sm" color="brand" hierarchy="secondary">SM</Button>
        <Button size="md" color="brand" hierarchy="secondary">MD</Button>
        <Button size="lg" color="brand" hierarchy="secondary">LG</Button>
        <Button size="xl" color="brand" hierarchy="secondary">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Destructive</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="destructive" hierarchy="secondary">XS</Button>
        <Button size="sm" color="destructive" hierarchy="secondary">SM</Button>
        <Button size="md" color="destructive" hierarchy="secondary">MD</Button>
        <Button size="lg" color="destructive" hierarchy="secondary">LG</Button>
        <Button size="xl" color="destructive" hierarchy="secondary">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Gray</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="gray" hierarchy="secondary">XS</Button>
        <Button size="sm" color="gray" hierarchy="secondary">SM</Button>
        <Button size="md" color="gray" hierarchy="secondary">MD</Button>
        <Button size="lg" color="gray" hierarchy="secondary">LG</Button>
        <Button size="xl" color="gray" hierarchy="secondary">XL</Button>
      </div>
    </div>
  </div>
);

// Todas as combinações Outlined
export const OutlinedVariations = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Brand</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="brand" hierarchy="outlined">XS</Button>
        <Button size="sm" color="brand" hierarchy="outlined">SM</Button>
        <Button size="md" color="brand" hierarchy="outlined">MD</Button>
        <Button size="lg" color="brand" hierarchy="outlined">LG</Button>
        <Button size="xl" color="brand" hierarchy="outlined">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Destructive</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="destructive" hierarchy="outlined">XS</Button>
        <Button size="sm" color="destructive" hierarchy="outlined">SM</Button>
        <Button size="md" color="destructive" hierarchy="outlined">MD</Button>
        <Button size="lg" color="destructive" hierarchy="outlined">LG</Button>
        <Button size="xl" color="destructive" hierarchy="outlined">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Gray</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="gray" hierarchy="outlined">XS</Button>
        <Button size="sm" color="gray" hierarchy="outlined">SM</Button>
        <Button size="md" color="gray" hierarchy="outlined">MD</Button>
        <Button size="lg" color="gray" hierarchy="outlined">LG</Button>
        <Button size="xl" color="gray" hierarchy="outlined">XL</Button>
      </div>
    </div>
  </div>
);

// Todas as combinações Link
export const LinkVariations = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Brand</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="brand" hierarchy="link">XS</Button>
        <Button size="sm" color="brand" hierarchy="link">SM</Button>
        <Button size="md" color="brand" hierarchy="link">MD</Button>
        <Button size="lg" color="brand" hierarchy="link">LG</Button>
        <Button size="xl" color="brand" hierarchy="link">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Destructive</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="destructive" hierarchy="link">XS</Button>
        <Button size="sm" color="destructive" hierarchy="link">SM</Button>
        <Button size="md" color="destructive" hierarchy="link">MD</Button>
        <Button size="lg" color="destructive" hierarchy="link">LG</Button>
        <Button size="xl" color="destructive" hierarchy="link">XL</Button>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Gray</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="xs" color="gray" hierarchy="link">XS</Button>
        <Button size="sm" color="gray" hierarchy="link">SM</Button>
        <Button size="md" color="gray" hierarchy="link">MD</Button>
        <Button size="lg" color="gray" hierarchy="link">LG</Button>
        <Button size="xl" color="gray" hierarchy="link">XL</Button>
      </div>
    </div>
  </div>
);

// Com ícones
export const WithIcons = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center flex-wrap">
      <Button size="md" color="brand" hierarchy="primary" leftIcon="User">Com ícone esquerdo</Button>
      <Button size="md" color="brand" hierarchy="primary" rightIcon="ArrowRight">Com ícone direito</Button>
      <Button size="md" color="brand" hierarchy="primary" leftIcon="User" rightIcon="ArrowRight">Ambos</Button>
    </div>
    <div className="flex gap-4 items-center flex-wrap">
      <Button size="sm" color="destructive" hierarchy="primary" leftIcon="Trash2">Deletar</Button>
      <Button size="md" color="brand" hierarchy="outlined" leftIcon="Download">Download</Button>
      <Button size="lg" color="gray" hierarchy="secondary" rightIcon="ChevronRight">Próximo</Button>
    </div>
  </div>
);
WithIcons.parameters = {
  docs: {
    description: {
      story: 'Botões com ícones Lucide à esquerda, direita ou ambos. Os ícones usam automaticamente os tokens de tamanho baseado no tamanho do botão.',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  size: 'md',
  color: 'brand',
  hierarchy: 'primary',
  state: 'default',
  onClick: () => alert('Botão clicado!'),
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Botão interativo com callback onClick',
    },
  },
};

