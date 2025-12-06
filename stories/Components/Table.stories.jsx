import React, { useState } from 'react';
import { Table } from '../../src/components/Table';

export default {
  title: 'Components/DataDisplay/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Componente Table do Design System Interstellar. Suporta múltiplos tipos de células e form controls (checkbox, radio, toggle).',
      },
    },
  },
};

// Dados de exemplo
const sampleData = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    role: 'Desenvolvedor',
    status: { text: 'Ativo', color: 'success', hierarchy: 'secondary' },
    progress: 75,
    rating: 4.5,
    trend: { text: 'Vendas', percentage: 48 },
    payment: 'R$ 1.250,00',
    avatar: 'https://i.pravatar.cc/150?img=1',
    avatars: [
      'https://i.pravatar.cc/150?img=1',
      'https://i.pravatar.cc/150?img=2',
      'https://i.pravatar.cc/150?img=3',
      'https://i.pravatar.cc/150?img=4',
      'https://i.pravatar.cc/150?img=5',
      'https://i.pravatar.cc/150?img=6',
      'https://i.pravatar.cc/150?img=7',
    ],
    image: 'https://picsum.photos/100/100?random=1',
    flag: 'Brasil',
    badge: { text: 'Premium', color: 'brand', hierarchy: 'secondary' },
    badgeIcon: { icon: 'Star', color: 'warning', hierarchy: 'primary' },
    icon: 'Info',
    active: true,
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    role: 'Designer',
    status: { text: 'Pendente', color: 'warning', hierarchy: 'secondary' },
    progress: 45,
    rating: 4.8,
    trend: { text: 'Crescimento', percentage: -12, color: 'destructive' },
    payment: 'R$ 980,00',
    avatar: 'https://i.pravatar.cc/150?img=2',
    avatars: [
      'https://i.pravatar.cc/150?img=8',
      'https://i.pravatar.cc/150?img=9',
      'https://i.pravatar.cc/150?img=10',
    ],
    image: 'https://picsum.photos/100/100?random=2',
    flag: 'EUA',
    badge: { text: 'Básico', color: 'gray', hierarchy: 'secondary' },
    badgeIcon: { icon: 'Heart', color: 'destructive', hierarchy: 'primary' },
    icon: 'AlertCircle',
    active: false,
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro@example.com',
    role: 'Gerente',
    status: { text: 'Inativo', color: 'destructive', hierarchy: 'secondary' },
    progress: 90,
    rating: 3.2,
    trend: { text: 'Receita', percentage: 25, color: 'success' },
    payment: 'R$ 2.100,00',
    avatar: 'https://i.pravatar.cc/150?img=3',
    avatars: [
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=12',
    ],
    image: 'https://picsum.photos/100/100?random=3',
    flag: 'Portugal',
    badge: { text: 'VIP', color: 'warning', hierarchy: 'secondary' },
    badgeIcon: { icon: 'Crown', color: 'warning', hierarchy: 'primary' },
    icon: 'CheckCircle',
    active: true,
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana@example.com',
    role: 'Analista',
    status: { text: 'Ativo', color: 'success', hierarchy: 'secondary' },
    progress: 60,
    rating: 4.0,
    trend: { text: 'Usuários', percentage: 15, color: 'success' },
    payment: 'R$ 1.500,00',
    avatar: 'https://i.pravatar.cc/150?img=4',
    avatars: [
      'https://i.pravatar.cc/150?img=13',
      'https://i.pravatar.cc/150?img=14',
      'https://i.pravatar.cc/150?img=15',
      'https://i.pravatar.cc/150?img=16',
    ],
    image: 'https://picsum.photos/100/100?random=4',
    flag: 'Espanha',
    badge: { text: 'Pro', color: 'brand', hierarchy: 'secondary' },
    badgeIcon: { icon: 'Award', color: 'brand', hierarchy: 'primary' },
    icon: 'User',
    active: false,
  },
];

// Template básico
const Template = (args) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (rowIndex, isSelected) => {
    if (args.formControl === 'checkbox') {
      if (isSelected) {
        setSelectedRows([...selectedRows, rowIndex]);
      } else {
        setSelectedRows(selectedRows.filter((idx) => idx !== rowIndex));
      }
    } else {
      // Radio ou Toggle - apenas uma seleção
      setSelectedRows(isSelected ? [rowIndex] : []);
    }
  };

  return (
    <div className="p-8">
      <Table
        {...args}
        selectedRows={selectedRows}
        onRowSelect={handleRowSelect}
      />
      {args.formControl !== 'none' && (
        <div className="mt-4 text-sm text-gray-60">
          Linhas selecionadas: {selectedRows.join(', ') || 'Nenhuma'}
        </div>
      )}
    </div>
  );
};

// Story padrão - Tabela com diferentes tipos de células
export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      key: 'name',
      label: 'Nome',
      type: 'text',
      primaryLabel: 'name',
      secondaryLabel: 'email',
    },
    {
      key: 'role',
      label: 'Cargo',
      type: 'text',
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
    },
    {
      key: 'progress',
      label: 'Progresso',
      type: 'progress',
      progressSize: 'lg',
      progressLabel: 'Right',
    },
    {
      key: 'rating',
      label: 'Avaliação',
      type: 'rating',
    },
  ],
  data: sampleData,
  formControl: 'none',
};

// Story com Checkbox
export const WithCheckbox = Template.bind({});
WithCheckbox.args = {
  columns: [
    {
      key: 'name',
      label: 'Nome',
      type: 'text',
      primaryLabel: 'name',
      secondaryLabel: 'email',
    },
    {
      key: 'avatar',
      label: 'Avatar',
      type: 'avatar',
    },
    {
      key: 'role',
      label: 'Cargo',
      type: 'text',
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
    },
    {
      key: 'progress',
      label: 'Progresso',
      type: 'progress',
    },
  ],
  data: sampleData,
  formControl: 'checkbox',
};

// Story com Radio
export const WithRadio = Template.bind({});
WithRadio.args = {
  columns: [
    {
      key: 'name',
      label: 'Nome',
      type: 'text',
      primaryLabel: 'name',
      secondaryLabel: 'email',
    },
    {
      key: 'role',
      label: 'Cargo',
      type: 'text',
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
    },
  ],
  data: sampleData,
  formControl: 'radio',
};

// Story com Toggle
export const WithToggle = Template.bind({});
WithToggle.args = {
  columns: [
    {
      key: 'name',
      label: 'Nome',
      type: 'text',
      primaryLabel: 'name',
      secondaryLabel: 'email',
    },
    {
      key: 'role',
      label: 'Cargo',
      type: 'text',
    },
    {
      key: 'active',
      label: 'Ativo',
      type: 'text',
    },
  ],
  data: sampleData,
  formControl: 'toggle',
};

// Story completa com todos os tipos de células
export const CompleteExample = Template.bind({});
CompleteExample.args = {
  columns: [
    {
      key: 'name',
      label: 'Nome',
      type: 'text',
      primaryLabel: 'name',
      secondaryLabel: 'email',
    },
    {
      key: 'avatar',
      label: 'Avatar',
      type: 'avatar',
    },
    {
      key: 'avatars',
      label: 'Grupo',
      type: 'avatarGroup',
      maxVisible: 5,
    },
    {
      key: 'icon',
      label: 'Ícone',
      type: 'icon',
      iconName: 'Info',
      iconColor: 'gray-30',
      value: 'Info', // Valor padrão para a célula
    },
    {
      key: 'image',
      label: 'Imagem',
      type: 'image',
    },
    {
      key: 'payment',
      label: 'Pagamento',
      type: 'payment',
    },
    {
      key: 'flag',
      label: 'País',
      type: 'flag',
    },
    {
      key: 'progress',
      label: 'Progresso',
      type: 'progress',
      progressSize: 'lg',
      progressLabel: 'Right',
    },
    {
      key: 'rating',
      label: 'Avaliação',
      type: 'rating',
    },
    {
      key: 'trend',
      label: 'Tendência',
      type: 'trend',
    },
    {
      key: 'badge',
      label: 'Badge',
      type: 'badge',
    },
    {
      key: 'badgeIcon',
      label: 'Badge Icon',
      type: 'badgeIcon',
    },
    {
      key: 'button',
      label: 'Ações',
      type: 'button',
      buttonLabel: 'Editar',
      buttonSize: 'sm',
      buttonColor: 'brand',
      buttonHierarchy: 'link',
      value: 'Editar',
      onButtonClick: (row, index) => {
        console.log('Editar:', row, index);
      },
    },
    {
      key: 'buttonIcon',
      label: '',
      type: 'buttonIcon',
      iconName: 'MoreVertical',
      buttonSize: 'sm',
    },
  ],
  data: sampleData,
  formControl: 'checkbox',
};

// Story com Input Field
export const WithInputField = Template.bind({});
WithInputField.args = {
  columns: [
    {
      key: 'name',
      label: 'Nome',
      type: 'text',
      primaryLabel: 'name',
      secondaryLabel: 'email',
    },
    {
      key: 'role',
      label: 'Cargo',
      type: 'input',
      placeholder: 'Digite o cargo...',
      onInputChange: (e, row, index) => {
        console.log('Input mudou:', e.target.value, row, index);
      },
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
    },
  ],
  data: sampleData,
  formControl: 'checkbox',
};

