import React, { useState } from 'react';
import {
  Button,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Dropdown,
  DropdownAccount,
  Notification,
  Icon,
} from '../../src/components';

export default {
  title: 'Pages/Cosmos Pro ERP',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Página de exemplo do ERP Cosmos Pro demonstrando o uso dos componentes do Design System Interstellar.',
      },
    },
  },
};

export const Dashboard = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, show: true },
    { id: 2, show: true },
  ]);

  const [selectedStatus, setSelectedStatus] = useState('todos');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    categoria: '',
    prioridade: 'media',
    descricao: '',
    receberNotificacoes: true,
    termos: false,
  });

  const statusOptions = [
    { value: 'todos', label: 'Todos os Status' },
    { value: 'ativo', label: 'Ativo' },
    { value: 'pendente', label: 'Pendente' },
    { value: 'concluido', label: 'Concluído' },
  ];

  const categoryOptions = [
    { value: 'vendas', label: 'Vendas', icon: 'ShoppingCart' },
    { value: 'financeiro', label: 'Financeiro', icon: 'DollarSign' },
    { value: 'rh', label: 'Recursos Humanos', icon: 'Users' },
    { value: 'estoque', label: 'Estoque', icon: 'Package' },
    { value: 'producao', label: 'Produção', icon: 'Factory' },
  ];

  const priorityOptions = [
    { value: 'baixa', label: 'Baixa Prioridade', dot: 'offline' },
    { value: 'media', label: 'Média Prioridade', dot: 'online' },
    { value: 'alta', label: 'Alta Prioridade', dot: 'busy' },
    { value: 'urgente', label: 'Urgente', dot: 'error' },
  ];

  const menuItems = [
    { value: 'perfil', label: 'Meu Perfil', icon: 'User' },
    { value: 'configuracoes', label: 'Configurações', icon: 'Settings' },
    { value: 'ajuda', label: 'Ajuda', icon: 'HelpCircle', shortcut: 'Ctrl+H' },
    { value: 'divider', divider: true },
    { value: 'logout', label: 'Sair', icon: 'LogOut' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="min-h-screen bg-gray-5">
      {/* Header */}
      <header className="bg-gray-0 border-b border-gray-20 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-60 rounded-md flex items-center justify-center">
              <Icon name="Rocket" size="md" color="gray-0" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-gray-90">Cosmos Pro</h1>
              <p className="text-xs font-medium text-gray-50">Sistema ERP Empresarial</p>
            </div>
          </div>

          {/* Navegação */}
          <nav className="flex items-center gap-4">
            <Button hierarchy="link" size="md" leftIcon="Home">
              Dashboard
            </Button>
            <Button hierarchy="link" size="md" leftIcon="FileText">
              Relatórios
            </Button>
            <Button hierarchy="link" size="md" leftIcon="Settings">
              Configurações
            </Button>
          </nav>

          {/* Account Dropdown */}
          <div className="flex items-center gap-4">
            <Button hierarchy="outlined" size="sm" leftIcon="Bell">
              <span className="relative">
                Notificações
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive-60 rounded-full"></span>
              </span>
            </Button>
            <DropdownAccount
              triggerType="avatar"
              user={{
                name: 'Carlos Silva',
                email: 'carlos.silva@cosmospro.com',
                status: 'online',
              }}
              menuItems={menuItems}
              onItemClick={(item) => console.log('Menu clicked:', item)}
              onLogout={() => console.log('Logout')}
            />
          </div>
        </div>
      </header>

      {/* Notificações */}
      <div className="px-6 py-4 space-y-3">
        {notifications[0]?.show && (
          <Notification
            color="brand"
            hierarchy="secondary"
            title="Bem-vindo ao Cosmos Pro!"
            supportingText="Seu sistema está atualizado e funcionando perfeitamente. Você tem 5 tarefas pendentes hoje."
            icon="Info"
            actionButtonLabel="Ver Tarefas"
            showClose={true}
            onClose={() =>
              setNotifications((prev) => prev.map((n) => (n.id === 1 ? { ...n, show: false } : n)))
            }
            onActionClick={() => console.log('Ver tarefas')}
          />
        )}
        {notifications[1]?.show && (
          <Notification
            color="warning"
            hierarchy="secondary"
            title="Atenção: Relatório em Atraso"
            supportingText="O relatório mensal de vendas deveria ter sido enviado há 2 dias."
            icon="AlertTriangle"
            actionButtonLabel="Enviar Agora"
            showClose={true}
            onClose={() =>
              setNotifications((prev) => prev.map((n) => (n.id === 2 ? { ...n, show: false } : n)))
            }
            onActionClick={() => console.log('Enviar relatório')}
          />
        )}
      </div>

      {/* Conteúdo Principal */}
      <div className="px-6 py-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Principal - Formulário */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card de Novo Ticket */}
            <div className="bg-gray-0 border border-gray-20 rounded-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-extrabold text-gray-90">Criar Novo Ticket</h2>
                <Icon name="FileText" size="md" color="gray-60" />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Nome do Cliente"
                    placeholder="Digite o nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    name="nome"
                    leftIcon="User"
                    state="default"
                  />

                  <Input
                    label="E-mail"
                    type="link"
                    placeholder="cliente@exemplo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    leftIcon="Mail"
                    state="default"
                  />
                </div>

                <Input
                  label="Telefone"
                  type="phone"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  name="telefone"
                  leftIcon="Phone"
                  state="default"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Dropdown
                    label="Categoria"
                    placeholder="Selecione uma categoria"
                    options={categoryOptions}
                    value={formData.categoria}
                    onChange={(value) => setFormData({ ...formData, categoria: value })}
                    itemType="text-icon"
                    searchable={true}
                    searchPlaceholder="Buscar categoria..."
                  />

                  <Dropdown
                    label="Prioridade"
                    placeholder="Selecione a prioridade"
                    options={priorityOptions}
                    value={formData.prioridade}
                    onChange={(value) => setFormData({ ...formData, prioridade: value })}
                    itemType="dot"
                    searchable={false}
                  />
                </div>

                <Textarea
                  label="Descrição do Problema"
                  placeholder="Descreva detalhadamente o problema ou solicitação..."
                  value={formData.descricao}
                  onChange={handleInputChange}
                  name="descricao"
                  rows={6}
                  showCounter={true}
                  maxLength={500}
                  state="default"
                />

                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.receberNotificacoes}
                      onChange={handleCheckboxChange}
                      name="receberNotificacoes"
                      size="md"
                    />
                    <label className="text-sm font-medium text-gray-80">
                      Receber notificações sobre atualizações deste ticket
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.termos}
                      onChange={handleCheckboxChange}
                      name="termos"
                      size="md"
                    />
                    <label className="text-sm font-medium text-gray-80">
                      Aceito os termos de uso e política de privacidade
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-20">
                  <Button
                    size="lg"
                    color="brand"
                    hierarchy="primary"
                    leftIcon="Save"
                    onClick={() => console.log('Salvar ticket', formData)}
                  >
                    Salvar Ticket
                  </Button>
                  <Button
                    size="lg"
                    color="gray"
                    hierarchy="outlined"
                    onClick={() =>
                      setFormData({
                        nome: '',
                        email: '',
                        telefone: '',
                        categoria: '',
                        prioridade: 'media',
                        descricao: '',
                        receberNotificacoes: true,
                        termos: false,
                      })
                    }
                  >
                    Limpar Formulário
                  </Button>
                </div>
              </div>
            </div>

            {/* Card de Filtros */}
            <div className="bg-gray-0 border border-gray-20 rounded-md p-6">
              <h3 className="text-base font-extrabold text-gray-90 mb-4">Filtros de Busca</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Dropdown
                  label="Status"
                  placeholder="Selecione o status"
                  options={statusOptions}
                  value={selectedStatus}
                  onChange={setSelectedStatus}
                  itemType="text"
                  searchable={false}
                />

                <Dropdown
                  label="Categoria"
                  placeholder="Todas as categorias"
                  options={categoryOptions}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  itemType="text-icon"
                  multiple={true}
                  searchable={true}
                />
              </div>

              <div className="pt-4 border-t border-gray-20">
                <label className="text-sm font-bold text-gray-80 mb-3 block">
                  Tipo de Ordenação
                </label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Radio name="ordenacao" value="data" checked={false} size="sm" />
                    <label className="text-sm font-medium text-gray-80">Por Data</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio name="ordenacao" value="prioridade" checked={true} size="sm" />
                    <label className="text-sm font-medium text-gray-80">Por Prioridade</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio name="ordenacao" value="nome" checked={false} size="sm" />
                    <label className="text-sm font-medium text-gray-80">Por Nome</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Card de Estatísticas Rápidas */}
            <div className="bg-gray-0 border border-gray-20 rounded-md p-6">
              <h3 className="text-base font-extrabold text-gray-90 mb-4">Estatísticas</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-brand-5 rounded-md">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size="sm" color="brand-60" />
                    <span className="text-sm font-semibold text-gray-80">Concluídos</span>
                  </div>
                  <span className="text-lg font-extrabold text-brand-60">24</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-warning-5 rounded-md">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size="sm" color="warning-60" />
                    <span className="text-sm font-semibold text-gray-80">Pendentes</span>
                  </div>
                  <span className="text-lg font-extrabold text-warning-60">12</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-destructive-5 rounded-md">
                  <div className="flex items-center gap-3">
                    <Icon name="AlertCircle" size="sm" color="destructive-60" />
                    <span className="text-sm font-semibold text-gray-80">Urgentes</span>
                  </div>
                  <span className="text-lg font-extrabold text-destructive-60">3</span>
                </div>
              </div>
            </div>

            {/* Card de Ações Rápidas */}
            <div className="bg-gray-0 border border-gray-20 rounded-md p-6">
              <h3 className="text-base font-extrabold text-gray-90 mb-4">Ações Rápidas</h3>

              <div className="space-y-2">
                <Button
                  size="md"
                  color="brand"
                  hierarchy="secondary"
                  leftIcon="Plus"
                  className="w-full justify-start"
                >
                  Novo Projeto
                </Button>
                <Button
                  size="md"
                  color="gray"
                  hierarchy="secondary"
                  leftIcon="FileText"
                  className="w-full justify-start"
                >
                  Gerar Relatório
                </Button>
                <Button
                  size="md"
                  color="gray"
                  hierarchy="secondary"
                  leftIcon="Download"
                  className="w-full justify-start"
                >
                  Exportar Dados
                </Button>
                <Button
                  size="md"
                  color="gray"
                  hierarchy="secondary"
                  leftIcon="Upload"
                  className="w-full justify-start"
                >
                  Importar Dados
                </Button>
              </div>
            </div>

            {/* Card de Suporte */}
            <div className="bg-gray-0 border border-gray-20 rounded-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="HelpCircle" size="md" color="brand-60" />
                <h3 className="text-base font-extrabold text-gray-90">Precisa de Ajuda?</h3>
              </div>

              <p className="text-sm font-medium text-gray-60 mb-4">
                Nossa equipe de suporte está disponível 24/7 para ajudar você.
              </p>

              <div className="space-y-2">
                <Button
                  size="sm"
                  color="brand"
                  hierarchy="outlined"
                  leftIcon="MessageCircle"
                  className="w-full justify-start"
                >
                  Chat ao Vivo
                </Button>
                <Button
                  size="sm"
                  color="gray"
                  hierarchy="outlined"
                  leftIcon="BookOpen"
                  className="w-full justify-start"
                >
                  Documentação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-0 border-t border-gray-20 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <p className="text-sm font-medium text-gray-50">
            © 2024 Cosmos Pro. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button hierarchy="link" size="sm" color="gray">
              Termos de Uso
            </Button>
            <Button hierarchy="link" size="sm" color="gray">
              Privacidade
            </Button>
            <Button hierarchy="link" size="sm" color="gray">
              Contato
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

Dashboard.parameters = {
  layout: 'fullscreen',
};
