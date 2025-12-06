import React, { useState } from 'react';
import {
  Button,
  Input,
  Icon,
  Table,
  Badge,
  BadgeIcon,
  Avatar,
  Toggle,
  Slider,
  ProgressBar,
  Rating,
  Checkbox,
} from '../../../../src/components/index.js';

/**
 * Tela de Produtos do ERP Cosmos Pro
 */
const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showOnlyActive, setShowOnlyActive] = useState(true);

  const produtosData = [
    {
      id: 1,
      name: 'Notebook Pro 15"',
      sku: 'NB-PRO-15-001',
      category: 'Eletrônicos',
      price: 'R$ 3.499,00',
      stock: 45,
      stockMax: 100,
      progress: 45, // Porcentagem para ProgressBar
      status: { text: 'Disponível', color: 'success', hierarchy: 'secondary' },
      rating: 4.7,
      image: 'https://picsum.photos/100/100?random=1',
      active: true,
      badge: { text: 'Novo', color: 'brand', hierarchy: 'secondary' },
      badgeIcon: { icon: 'Star', color: 'warning', hierarchy: 'primary' },
    },
    {
      id: 2,
      name: 'Mouse Wireless',
      sku: 'MS-WL-002',
      category: 'Periféricos',
      price: 'R$ 89,90',
      stock: 120,
      stockMax: 150,
      progress: 80,
      status: { text: 'Disponível', color: 'success', hierarchy: 'secondary' },
      rating: 4.5,
      image: 'https://picsum.photos/100/100?random=2',
      active: true,
      badge: { text: 'Promoção', color: 'warning', hierarchy: 'secondary' },
      badgeIcon: { icon: 'Tag', color: 'warning', hierarchy: 'primary' },
    },
    {
      id: 3,
      name: 'Teclado Mecânico',
      sku: 'KB-MEC-003',
      category: 'Periféricos',
      price: 'R$ 349,00',
      stock: 8,
      stockMax: 50,
      progress: 16,
      status: { text: 'Estoque Baixo', color: 'warning', hierarchy: 'secondary' },
      rating: 4.8,
      image: 'https://picsum.photos/100/100?random=3',
      active: true,
      badge: { text: 'Premium', color: 'brand', hierarchy: 'secondary' },
      badgeIcon: { icon: 'Crown', color: 'warning', hierarchy: 'primary' },
    },
    {
      id: 4,
      name: 'Monitor 27" 4K',
      sku: 'MN-27-4K-004',
      category: 'Monitores',
      price: 'R$ 1.899,00',
      stock: 0,
      stockMax: 30,
      progress: 0,
      status: { text: 'Indisponível', color: 'destructive', hierarchy: 'secondary' },
      rating: 4.6,
      image: 'https://picsum.photos/100/100?random=4',
      active: false,
      badge: { text: 'Esgotado', color: 'destructive', hierarchy: 'secondary' },
      badgeIcon: { icon: 'X', color: 'destructive', hierarchy: 'primary' },
    },
  ];

  const columns = [
    {
      key: 'name',
      label: 'Produto',
      type: 'text',
      primaryLabel: 'name',
      secondaryLabel: 'sku',
    },
    {
      key: 'image',
      label: 'Imagem',
      type: 'image',
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
    },
    {
      key: 'progress',
      label: 'Estoque',
      type: 'progress',
      progressSize: 'md',
      progressLabel: 'Right',
    },
    {
      key: 'rating',
      label: 'Avaliação',
      type: 'rating',
    },
    {
      key: 'price',
      label: 'Preço',
      type: 'payment',
    },
    {
      key: 'badge',
      label: 'Badge',
      type: 'badge',
    },
    {
      key: 'badgeIcon',
      label: '',
      type: 'badgeIcon',
    },
    {
      key: 'active',
      label: 'Ativo',
      type: 'text',
    },
  ];

  return (
    <div className="p-2xl max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-xl flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-90 font-primary mb-xs">
            Produtos
          </h1>
          <p className="text-md text-gray-60 font-primary">
            Gerencie seu catálogo de produtos
          </p>
        </div>
        <div className="flex items-center gap-sm">
          <Button
            size="md"
            color="gray"
            hierarchy="outlined"
            leftIcon="Download"
          >
            Exportar
          </Button>
          <Button
            size="md"
            color="brand"
            hierarchy="primary"
            leftIcon="Plus"
          >
            Novo Produto
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-0 rounded-lg p-lg border border-gray-20 mb-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div>
            <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
              Buscar
            </label>
            <Input
              placeholder="Buscar produtos..."
              leftIcon="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
              Faixa de Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
            </label>
            <Slider
              type="range"
              rangeValue={priceRange}
              onChange={setPriceRange}
              size="md"
              color="brand"
              isLabel={false}
            />
          </div>
          <div className="flex items-end">
            <div className="flex items-center gap-xs">
              <Toggle
                checked={showOnlyActive}
                onChange={setShowOnlyActive}
                size="md"
                color="brand"
              />
              <span className="text-sm text-gray-60 font-primary">
                Apenas produtos ativos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-0 rounded-lg border border-gray-20 overflow-hidden shadow-sm">
        <Table
          columns={columns}
          data={produtosData}
          formControl="checkbox"
        />
      </div>
    </div>
  );
};

export default Produtos;

