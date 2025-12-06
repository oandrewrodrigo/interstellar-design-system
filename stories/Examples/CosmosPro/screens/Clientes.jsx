import React, { useState } from 'react';
import {
  Button,
  Input,
  Icon,
  Table,
  Badge,
  Avatar,
  AvatarGroup,
  Dropdown,
  Checkbox,
  ProgressBar,
  Rating,
  Trend,
} from '../../../../src/components/index.js';

/**
 * Tela de Clientes do ERP Cosmos Pro
 */
const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  const clientesData = [
    {
      id: 1,
      name: 'Tech Solutions Ltda',
      email: 'contato@techsolutions.com',
      phone: '(11) 98765-4321',
      status: { text: 'Ativo', color: 'success', hierarchy: 'secondary' },
      progress: 85,
      rating: 4.8,
      trend: { text: 'Crescimento', percentage: 15, color: 'success' },
      payment: 'R$ 45.200,00',
      avatar: 'https://i.pravatar.cc/150?img=5',
      avatars: [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3',
      ],
      active: true,
    },
    {
      id: 2,
      name: 'Global Corp',
      email: 'vendas@globalcorp.com',
      phone: '(21) 99876-5432',
      status: { text: 'Pendente', color: 'warning', hierarchy: 'secondary' },
      progress: 60,
      rating: 4.2,
      trend: { text: 'Estável', percentage: 0, color: 'gray' },
      payment: 'R$ 28.500,00',
      avatar: 'https://i.pravatar.cc/150?img=6',
      avatars: ['https://i.pravatar.cc/150?img=4', 'https://i.pravatar.cc/150?img=5'],
      active: false,
    },
    {
      id: 3,
      name: 'Inovação Digital',
      email: 'contato@inovacao.com',
      phone: '(31) 98765-4321',
      status: { text: 'Ativo', color: 'success', hierarchy: 'secondary' },
      progress: 95,
      rating: 4.9,
      trend: { text: 'Crescimento', percentage: 25, color: 'success' },
      payment: 'R$ 78.900,00',
      avatar: 'https://i.pravatar.cc/150?img=7',
      avatars: [
        'https://i.pravatar.cc/150?img=8',
        'https://i.pravatar.cc/150?img=9',
        'https://i.pravatar.cc/150?img=10',
        'https://i.pravatar.cc/150?img=11',
      ],
      active: true,
    },
    {
      id: 4,
      name: 'Mega Store',
      email: 'vendas@megastore.com',
      phone: '(41) 97654-3210',
      status: { text: 'Inativo', color: 'destructive', hierarchy: 'secondary' },
      progress: 30,
      rating: 3.5,
      trend: { text: 'Queda', percentage: -12, color: 'destructive' },
      payment: 'R$ 12.300,00',
      avatar: 'https://i.pravatar.cc/150?img=8',
      avatars: [],
      active: false,
    },
  ];

  const columns = [
    {
      key: 'name',
      label: 'Cliente',
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
    {
      key: 'trend',
      label: 'Tendência',
      type: 'trend',
    },
    {
      key: 'payment',
      label: 'Faturamento',
      type: 'payment',
    },
    {
      key: 'button',
      label: 'Ações',
      type: 'button',
      buttonLabel: 'Editar',
      buttonSize: 'sm',
      buttonColor: 'brand',
      buttonHierarchy: 'link',
      onButtonClick: (row, index) => {
        console.log('Editar cliente:', row, index);
      },
    },
  ];

  return (
    <div className="p-2xl max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-xl flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-90 font-primary mb-xs">Clientes</h1>
          <p className="text-md text-gray-60 font-primary">
            Gerencie seus clientes e relacionamentos
          </p>
        </div>
        <div className="flex items-center gap-sm">
          <Button size="md" color="gray" hierarchy="outlined" leftIcon="Download">
            Exportar
          </Button>
          <Button size="md" color="brand" hierarchy="primary" leftIcon="Plus">
            Novo Cliente
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-0 rounded-lg p-lg border border-gray-20 mb-md">
        <div className="flex items-center gap-md flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <Input
              placeholder="Buscar clientes..."
              leftIcon="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Dropdown
            label="Status"
            options={[
              { label: 'Todos', value: 'all' },
              { label: 'Ativo', value: 'active' },
              { label: 'Inativo', value: 'inactive' },
              { label: 'Pendente', value: 'pending' },
            ]}
            size="md"
          />
          <Dropdown
            label="Ordenar por"
            options={[
              { label: 'Nome', value: 'name' },
              { label: 'Data', value: 'date' },
              { label: 'Valor', value: 'value' },
            ]}
            size="md"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-0 rounded-lg border border-gray-20 overflow-hidden shadow-sm">
        <Table
          columns={columns}
          data={clientesData}
          formControl="checkbox"
          selectedRows={selectedRows}
          onRowSelect={(rowIndex, isSelected) => {
            if (isSelected) {
              setSelectedRows([...selectedRows, rowIndex]);
            } else {
              setSelectedRows(selectedRows.filter((idx) => idx !== rowIndex));
            }
          }}
        />
      </div>

      {/* Selected Actions */}
      {selectedRows.length > 0 && (
        <div className="mt-md bg-brand-5 rounded-lg p-md border border-brand-20 flex items-center justify-between">
          <span className="text-sm font-semibold text-brand-60 font-primary">
            {selectedRows.length} cliente(s) selecionado(s)
          </span>
          <div className="flex items-center gap-sm">
            <Button size="sm" color="brand" hierarchy="secondary" leftIcon="Mail">
              Enviar Email
            </Button>
            <Button size="sm" color="destructive" hierarchy="secondary" leftIcon="Trash2">
              Excluir
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clientes;
