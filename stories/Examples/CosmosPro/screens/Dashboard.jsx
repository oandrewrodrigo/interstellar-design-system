import React from 'react';
import {
  Icon,
  Badge,
  BadgeIcon,
  ProgressBar,
  Trend,
  Rating,
  Avatar,
  AvatarGroup,
  Button,
  Loader,
} from '../../../../src/components/index.js';

/**
 * Tela de Dashboard do ERP Cosmos Pro
 */
const Dashboard = () => {
  const stats = [
    {
      title: 'Vendas do Mês',
      value: 'R$ 125.450,00',
      trend: { percentage: 12, color: 'success' },
      icon: 'TrendingUp',
      color: 'brand',
      bgColor: 'bg-brand-5',
    },
    {
      title: 'Clientes Ativos',
      value: '1.234',
      trend: { percentage: 8, color: 'success' },
      icon: 'Users',
      color: 'brand',
      bgColor: 'bg-brand-5',
    },
    {
      title: 'Pedidos Pendentes',
      value: '23',
      trend: { percentage: -5, color: 'destructive' },
      icon: 'ShoppingCart',
      color: 'brand',
      bgColor: 'bg-brand-5',
    },
    {
      title: 'Taxa de Conversão',
      value: '68%',
      trend: { percentage: 3, color: 'success' },
      icon: 'Target',
      color: 'brand',
      bgColor: 'bg-brand-5',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      user: 'Maria Santos',
      action: 'Criou novo pedido',
      time: '2 min atrás',
      avatar: 'https://i.pravatar.cc/150?img=2',
      icon: 'ShoppingCart',
    },
    {
      id: 2,
      user: 'Pedro Oliveira',
      action: 'Atualizou produto',
      time: '15 min atrás',
      avatar: 'https://i.pravatar.cc/150?img=3',
      icon: 'Package',
    },
    {
      id: 3,
      user: 'Ana Costa',
      action: 'Adicionou novo cliente',
      time: '1 hora atrás',
      avatar: 'https://i.pravatar.cc/150?img=4',
      icon: 'UserPlus',
    },
  ];

  return (
    <div className="p-2xl max-w-[1600px] mx-auto">
      {/* Header with Actions */}
      <div className="flex items-center justify-between mb-2xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-90 font-primary mb-xs">
            Dashboard
          </h1>
          <p className="text-md text-gray-60 font-primary">
            Visão geral do seu negócio
          </p>
        </div>
        {/* Quick Actions */}
        <div className="flex items-center gap-sm">
          <Button size="md" color="brand" hierarchy="primary" leftIcon="Plus">
            Novo Cliente
          </Button>
          <Button size="md" color="brand" hierarchy="secondary" leftIcon="ShoppingCart">
            Novo Pedido
          </Button>
          <Button size="md" color="success" hierarchy="secondary" leftIcon="Package">
            Novo Produto
          </Button>
          <Button size="md" color="gray" hierarchy="outlined" leftIcon="FileText">
            Gerar Relatório
          </Button>
          <Button size="md" color="gray" hierarchy="outlined" leftIcon="Download">
            Exportar Dados
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-0 rounded-lg p-lg border border-gray-20 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-md">
              <div className="flex-1">
                <p className="text-xs text-gray-60 font-primary mb-xs uppercase tracking-wide">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-90 font-primary mb-xs">
                  {stat.value}
                </h3>
                <Trend
                  text="vs. mês anterior"
                  percentage={stat.trend.percentage}
                  color={stat.trend.color}
                />
              </div>
              <div className={`p-sm rounded-lg ${stat.bgColor}`}>
                <Icon name={stat.icon} size="lg" color={`${stat.color}-60`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {/* Sales Progress - Takes 2 columns */}
        <div className="lg:col-span-2 bg-gray-0 rounded-lg p-xl border border-gray-20">
          <div className="flex items-center justify-between mb-xl">
            <div>
              <h2 className="text-xl font-semibold text-gray-90 font-primary mb-xs">
                Metas de Vendas
              </h2>
              <p className="text-sm text-gray-60 font-primary">
                Acompanhe o progresso das suas metas
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-xl">
            <div>
              <div className="flex items-center justify-between mb-sm">
                <span className="text-sm font-semibold text-gray-70 font-primary">
                  Meta Mensal
                </span>
                <span className="text-sm font-bold text-brand-60 font-primary">
                  75%
                </span>
              </div>
              <ProgressBar progression={75} size="lg" color="brand" label="Right" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-sm">
                <span className="text-sm font-semibold text-gray-70 font-primary">
                  Meta Trimestral
                </span>
                <span className="text-sm font-bold text-success-60 font-primary">
                  45%
                </span>
              </div>
              <ProgressBar progression={45} size="lg" color="success" label="Right" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-sm">
                <span className="text-sm font-semibold text-gray-70 font-primary">
                  Meta Anual
                </span>
                <span className="text-sm font-bold text-warning-60 font-primary">
                  32%
                </span>
              </div>
              <ProgressBar progression={32} size="lg" color="warning" label="Right" />
            </div>
          </div>
        </div>

        {/* Recent Activities - Takes 1 column */}
        <div className="bg-gray-0 rounded-lg p-xl border border-gray-20">
          <div className="mb-xl">
            <h2 className="text-xl font-semibold text-gray-90 font-primary mb-xs">
              Atividades Recentes
            </h2>
            <p className="text-sm text-gray-60 font-primary">
              Últimas atualizações
            </p>
          </div>
          <div className="flex flex-col gap-lg">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-sm"
              >
                <Avatar src={activity.avatar} size="md" alt={activity.user} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-90 font-primary mb-2xs truncate">
                    {activity.user}
                  </p>
                  <p className="text-xs text-gray-60 font-primary mb-xs">
                    {activity.action}
                  </p>
                  <div className="flex items-center gap-xs text-xs text-gray-50 font-primary">
                    <Icon name={activity.icon} size="xs" color="gray-40" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

