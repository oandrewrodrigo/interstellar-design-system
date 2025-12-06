import React, { useState } from 'react';
import { Button, Icon, BadgeIcon, DropdownAccount } from '../../../src/components/index.js';

// Importar telas
import Dashboard from './screens/Dashboard';
import Clientes from './screens/Clientes';
import Produtos from './screens/Produtos';
import Formularios from './screens/Formularios';
import Configuracoes from './screens/Configuracoes';

/**
 * Aplicação de exemplo Cosmos Pro
 * Demonstra o uso de todos os componentes do design system
 */
const CosmosProApp = () => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'Nova atualização disponível',
      message: 'Versão 2.0.0 foi lançada',
    },
    { id: 2, type: 'success', title: 'Backup concluído', message: 'Backup realizado com sucesso' },
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'clientes', label: 'Clientes', icon: 'Users' },
    { id: 'produtos', label: 'Produtos', icon: 'Package' },
    { id: 'formularios', label: 'Formulários', icon: 'FileText' },
    { id: 'configuracoes', label: 'Configurações', icon: 'Settings' },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'clientes':
        return <Clientes />;
      case 'produtos':
        return <Produtos />;
      case 'formularios':
        return <Formularios />;
      case 'configuracoes':
        return <Configuracoes />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-5 flex flex-col">
      {/* Header */}
      <header className="bg-gray-0 border-b border-gray-20 px-2xl py-md flex items-center justify-between shadow-sm">
        {/* Left side: Logo */}
        <div className="flex items-center gap-sm">
          <Icon name="Zap" size="lg" color="brand-60" />
          <h1 className="text-2xl font-bold text-gray-90 font-primary">Cosmos Pro</h1>
        </div>

        {/* Right side: Notifications and Account */}
        <div className="flex items-center gap-lg">
          {/* Notificações */}
          <div className="relative">
            <Button size="md" color="gray" hierarchy="secondary" leftIcon="Bell" />
            {notifications.length > 0 && (
              <BadgeIcon
                content={notifications.length}
                size="sm"
                color="destructive"
                hierarchy="primary"
                className="absolute -top-1 -right-1"
              />
            )}
          </div>

          {/* Dropdown Account */}
          <DropdownAccount
            name="João Silva"
            email="joao@cosmospro.com"
            avatar="https://i.pravatar.cc/150?img=1"
            menuItems={[
              { label: 'Perfil', icon: 'User' },
              { label: 'Configurações', icon: 'Settings' },
              { label: 'Sair', icon: 'LogOut' },
            ]}
          />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-0 border-r border-gray-20 px-md py-xl flex flex-col gap-2xl">
          <nav className="flex flex-col gap-2xs">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`
                  flex items-center gap-sm px-md py-sm rounded-lg
                  transition-all duration-200
                  ${
                    currentScreen === item.id
                      ? 'bg-brand-5 text-brand-60 font-semibold'
                      : 'text-gray-60 hover:bg-gray-5 hover:text-gray-90'
                  }
                `}
              >
                <Icon
                  name={item.icon}
                  size="sm"
                  color={currentScreen === item.id ? 'brand-60' : 'gray-60'}
                />
                <span className="text-sm font-medium font-primary">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Seção de ajuda */}
          <div className="mt-auto pt-xl border-t border-gray-20">
            <Button
              size="md"
              color="gray"
              hierarchy="secondary"
              leftIcon="HelpCircle"
              className="w-full"
            >
              Ajuda
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-5">{renderScreen()}</main>
      </div>
    </div>
  );
};

export default CosmosProApp;
