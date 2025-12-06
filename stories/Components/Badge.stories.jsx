import React from 'react';
import { Badge } from '../../src/components/Badge';

export default {
  title: 'Components/DataDisplay/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Badge do Design System Interstellar. Badge com texto, dot opcional e ícone opcional.\n\n**Diretriz de Uso:** Sempre que o componente Badge for usado em uma tabela, utilize a hierarquia `secondary`.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do badge',
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'destructive', 'warning', 'success', 'gray'],
      description: 'Cor do badge',
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined'],
      description: 'Hierarquia visual do badge',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'disabled'],
      description: 'Estado do badge',
    },
    showDot: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o dot (círculo) à esquerda',
    },
  },
};

// Template básico
const Template = (args) => <Badge {...args}>Label</Badge>;

// Story padrão
export const Default = Template.bind({});
Default.args = {
  size: 'md',
  color: 'brand',
  hierarchy: 'primary',
  state: 'default',
  showDot: true,
  rightIcon: 'Check',
};

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Badge size="sm" color="brand" hierarchy="primary">
        Label
      </Badge>
      <Badge size="md" color="brand" hierarchy="primary">
        Label
      </Badge>
      <Badge size="lg" color="brand" hierarchy="primary">
        Label
      </Badge>
    </div>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho do badge: sm (24px), md (24px), lg (32px)',
    },
  },
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Badge size="md" color="brand" hierarchy="primary">
        Label
      </Badge>
      <Badge size="md" color="destructive" hierarchy="primary">
        Label
      </Badge>
      <Badge size="md" color="warning" hierarchy="primary">
        Label
      </Badge>
      <Badge size="md" color="success" hierarchy="primary">
        Label
      </Badge>
      <Badge size="md" color="gray" hierarchy="primary">
        Label
      </Badge>
    </div>
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Variações de cor do badge: Brand, Destructive, Warning, Success, Gray',
    },
  },
};

// Hierarquias
export const Hierarchies = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Badge size="md" color="brand" hierarchy="primary">
        Label
      </Badge>
      <Badge size="md" color="brand" hierarchy="secondary">
        Label
      </Badge>
      <Badge size="md" color="brand" hierarchy="outlined">
        Label
      </Badge>
    </div>
  </div>
);
Hierarchies.parameters = {
  docs: {
    description: {
      story:
        'Variações de hierarquia: Primary (sólido), Secondary (fundo claro), Outlined (apenas borda)',
    },
  },
};

// Estados
export const States = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Badge size="md" color="brand" hierarchy="primary" state="default">
        Label
      </Badge>
      <Badge size="md" color="brand" hierarchy="primary" state="hover">
        Label
      </Badge>
      <Badge size="md" color="brand" hierarchy="primary" state="disabled">
        Label
      </Badge>
    </div>
  </div>
);
States.parameters = {
  docs: {
    description: {
      story: 'Estados do badge: Default, Hover, Disabled',
    },
  },
};

// Com e sem dot
export const WithWithoutDot = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Badge size="md" color="brand" hierarchy="primary" showDot={true}>
        Label
      </Badge>
      <Badge size="md" color="brand" hierarchy="primary" showDot={false}>
        Label
      </Badge>
    </div>
  </div>
);
WithWithoutDot.parameters = {
  docs: {
    description: {
      story: 'Badge com e sem dot (círculo) à esquerda',
    },
  },
};

// Com ícone
export const WithIcon = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <Badge size="md" color="brand" hierarchy="primary" rightIcon="Check">
        Label
      </Badge>
      <Badge size="md" color="brand" hierarchy="primary" showDot={false} rightIcon="Check">
        Label
      </Badge>
    </div>
  </div>
);
WithIcon.parameters = {
  docs: {
    description: {
      story: 'Badge com ícone à direita',
    },
  },
};

// Todas as variações
export const AllVariations = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Primary</span>
      <div className="flex gap-4 items-center flex-wrap">
        <Badge size="sm" color="brand" hierarchy="primary">
          Label
        </Badge>
        <Badge size="sm" color="destructive" hierarchy="primary">
          Label
        </Badge>
        <Badge size="sm" color="warning" hierarchy="primary">
          Label
        </Badge>
        <Badge size="sm" color="success" hierarchy="primary">
          Label
        </Badge>
        <Badge size="sm" color="gray" hierarchy="primary">
          Label
        </Badge>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Secondary</span>
      <div className="flex gap-4 items-center flex-wrap">
        <Badge size="sm" color="brand" hierarchy="secondary">
          Label
        </Badge>
        <Badge size="sm" color="destructive" hierarchy="secondary">
          Label
        </Badge>
        <Badge size="sm" color="warning" hierarchy="secondary">
          Label
        </Badge>
        <Badge size="sm" color="success" hierarchy="secondary">
          Label
        </Badge>
        <Badge size="sm" color="gray" hierarchy="secondary">
          Label
        </Badge>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Outlined</span>
      <div className="flex gap-4 items-center flex-wrap">
        <Badge size="sm" color="brand" hierarchy="outlined">
          Label
        </Badge>
        <Badge size="sm" color="destructive" hierarchy="outlined">
          Label
        </Badge>
        <Badge size="sm" color="warning" hierarchy="outlined">
          Label
        </Badge>
        <Badge size="sm" color="success" hierarchy="outlined">
          Label
        </Badge>
        <Badge size="sm" color="gray" hierarchy="outlined">
          Label
        </Badge>
      </div>
    </div>
  </div>
);
AllVariations.parameters = {
  layout: 'padded',
};

// Exemplo de uso em tabela
export const InTable = () => (
  <div className="w-full max-w-4xl">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-5">
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-90 border-b border-gray-20">
            Nome
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-90 border-b border-gray-20">
            Status
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-90 border-b border-gray-20">
            Tipo
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-90 border-b border-gray-20">
            Prioridade
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-5">
          <td className="px-4 py-3 text-sm text-gray-90 border-b border-gray-10">Projeto Alpha</td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="success" hierarchy="secondary">
              Ativo
            </Badge>
          </td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="brand" hierarchy="secondary">
              Desenvolvimento
            </Badge>
          </td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="warning" hierarchy="secondary">
              Alta
            </Badge>
          </td>
        </tr>
        <tr className="hover:bg-gray-5">
          <td className="px-4 py-3 text-sm text-gray-90 border-b border-gray-10">Projeto Beta</td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="destructive" hierarchy="secondary">
              Pausado
            </Badge>
          </td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="gray" hierarchy="secondary">
              Design
            </Badge>
          </td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="brand" hierarchy="secondary">
              Média
            </Badge>
          </td>
        </tr>
        <tr className="hover:bg-gray-5">
          <td className="px-4 py-3 text-sm text-gray-90 border-b border-gray-10">Projeto Gamma</td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="success" hierarchy="secondary">
              Concluído
            </Badge>
          </td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="brand" hierarchy="secondary">
              QA
            </Badge>
          </td>
          <td className="px-4 py-3 border-b border-gray-10">
            <Badge size="sm" color="gray" hierarchy="secondary">
              Baixa
            </Badge>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
InTable.parameters = {
  layout: 'padded',
  docs: {
    description: {
      story:
        'Exemplo de uso do Badge em uma tabela. **Importante:** Em tabelas, sempre use a hierarquia `secondary` para manter a consistência visual e melhor legibilidade.',
    },
  },
};
