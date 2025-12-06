import React from 'react';
import { Breadcrumb } from '../../src/components/Breadcrumb';

export default {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Componente Breadcrumb do Design System Interstellar. Navegação de migalhas de pão para indicar a localização atual na hierarquia.',
      },
    },
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['Default', 'Fill', 'Outlined'],
      description: 'Estilo dos itens do breadcrumb',
    },
    isBoxed: {
      control: { type: 'boolean' },
      description: 'Se o breadcrumb deve estar dentro de um container com borda',
    },
    divider: {
      control: { type: 'select' },
      options: ['Icon', 'Slash', 'Colon'],
      description: 'Tipo de separador entre os itens',
    },
    showHomeIcon: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o ícone de home inicial',
    },
  },
};

// Template básico
const Template = (args) => (
  <div className="p-8">
    <Breadcrumb {...args} />
  </div>
);

// Story padrão
export const Default = Template.bind({});
Default.args = {
  items: ['Link Item', 'Link Item', 'Link Item'],
  style: 'Default',
  isBoxed: false,
  divider: 'Icon',
  showHomeIcon: true,
};

// Variações de estilo
export const Styles = () => (
  <div className="p-8 space-y-8">
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Default Style</h3>
      <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Default" divider="Icon" />
    </div>
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Fill Style</h3>
      <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Fill" divider="Icon" />
    </div>
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Outlined Style</h3>
      <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Outlined" divider="Icon" />
    </div>
  </div>
);
Styles.parameters = {
  docs: {
    description: {
      story:
        'Variações de estilo dos itens: Default (texto simples), Fill (com fundo), Outlined (com borda)',
    },
  },
};

// Variações de separador
export const Dividers = () => (
  <div className="p-8 space-y-8">
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Icon Divider (ChevronRight)</h3>
      <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Default" divider="Icon" />
    </div>
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Slash Divider</h3>
      <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Default" divider="Slash" />
    </div>
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Colon Divider</h3>
      <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Default" divider="Colon" />
    </div>
  </div>
);
Dividers.parameters = {
  docs: {
    description: {
      story: 'Variações de separador entre os itens: Icon (chevron), Slash (/), Colon (:)',
    },
  },
};

// Com container (Boxed)
export const Boxed = () => (
  <div className="p-8 space-y-8">
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Boxed - Default Style</h3>
      <Breadcrumb
        items={['Link Item', 'Link Item', 'Link Item']}
        style="Default"
        divider="Icon"
        isBoxed={true}
      />
    </div>
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Boxed - Fill Style</h3>
      <Breadcrumb
        items={['Link Item', 'Link Item', 'Link Item']}
        style="Fill"
        divider="Icon"
        isBoxed={true}
      />
    </div>
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-90">Boxed - Outlined Style</h3>
      <Breadcrumb
        items={['Link Item', 'Link Item', 'Link Item']}
        style="Outlined"
        divider="Icon"
        isBoxed={true}
      />
    </div>
  </div>
);
Boxed.parameters = {
  docs: {
    description: {
      story: 'Breadcrumb dentro de um container com borda (isBoxed=true)',
    },
  },
};

// Todas as combinações (como no Figma)
export const AllVariations = () => (
  <div className="p-8 space-y-12">
    {/* Row 1: Default, não boxed */}
    <div className="space-y-4">
      <h3 className="text-base font-bold text-gray-90">Default Style - Não Boxed</h3>
      <div className="flex flex-col gap-4">
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Default"
          divider="Icon"
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Default"
          divider="Slash"
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Default"
          divider="Colon"
        />
      </div>
    </div>

    {/* Row 2: Fill, não boxed */}
    <div className="space-y-4">
      <h3 className="text-base font-bold text-gray-90">Fill Style - Não Boxed</h3>
      <div className="flex flex-col gap-4">
        <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Fill" divider="Icon" />
        <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Fill" divider="Slash" />
        <Breadcrumb items={['Link Item', 'Link Item', 'Link Item']} style="Fill" divider="Colon" />
      </div>
    </div>

    {/* Row 3: Outlined, não boxed */}
    <div className="space-y-4">
      <h3 className="text-base font-bold text-gray-90">Outlined Style - Não Boxed</h3>
      <div className="flex flex-col gap-4">
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Outlined"
          divider="Icon"
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Outlined"
          divider="Slash"
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Outlined"
          divider="Colon"
        />
      </div>
    </div>

    {/* Row 4: Default, boxed */}
    <div className="space-y-4">
      <h3 className="text-base font-bold text-gray-90">Default Style - Boxed</h3>
      <div className="flex flex-col gap-4">
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Default"
          divider="Icon"
          isBoxed={true}
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Default"
          divider="Slash"
          isBoxed={true}
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Default"
          divider="Colon"
          isBoxed={true}
        />
      </div>
    </div>

    {/* Row 5: Fill, boxed */}
    <div className="space-y-4">
      <h3 className="text-base font-bold text-gray-90">Fill Style - Boxed</h3>
      <div className="flex flex-col gap-4">
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Fill"
          divider="Icon"
          isBoxed={true}
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Fill"
          divider="Slash"
          isBoxed={true}
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Fill"
          divider="Colon"
          isBoxed={true}
        />
      </div>
    </div>

    {/* Row 6: Outlined, boxed */}
    <div className="space-y-4">
      <h3 className="text-base font-bold text-gray-90">Outlined Style - Boxed</h3>
      <div className="flex flex-col gap-4">
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Outlined"
          divider="Icon"
          isBoxed={true}
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Outlined"
          divider="Slash"
          isBoxed={true}
        />
        <Breadcrumb
          items={['Link Item', 'Link Item', 'Link Item']}
          style="Outlined"
          divider="Colon"
          isBoxed={true}
        />
      </div>
    </div>
  </div>
);
AllVariations.parameters = {
  docs: {
    description: {
      story: 'Todas as combinações de estilo, separador e container conforme o design do Figma',
    },
  },
};

// Com links funcionais
export const WithLinks = () => (
  <div className="p-8 space-y-4">
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Produtos', href: '/produtos' },
        { label: 'Detalhes do Produto' },
      ]}
      style="Default"
      divider="Icon"
    />
  </div>
);
WithLinks.parameters = {
  docs: {
    description: {
      story: 'Breadcrumb com links funcionais. O último item não tem link pois é o item atual.',
    },
  },
};

// Sem ícone home
export const WithoutHomeIcon = Template.bind({});
WithoutHomeIcon.args = {
  items: ['Link Item', 'Link Item', 'Link Item'],
  style: 'Default',
  divider: 'Icon',
  showHomeIcon: false,
};
WithoutHomeIcon.parameters = {
  docs: {
    description: {
      story: 'Breadcrumb sem o ícone de home inicial',
    },
  },
};
