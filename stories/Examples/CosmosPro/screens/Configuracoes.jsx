import React, { useState } from 'react';
import {
  Button,
  Input,
  Toggle,
  Slider,
  Radio,
  Checkbox,
  Dropdown,
  TabGroup,
  Tab,
  Icon,
  Badge,
  ProgressBar,
  Loader,
  Notification,
} from '../../../../src/components/index.js';

/**
 * Tela de Configurações do ERP Cosmos Pro
 */
const Configuracoes = () => {
  const [activeTab, setActiveTab] = useState('geral');
  const [settings, setSettings] = useState({
    notifications: true,
    emailNotifications: true,
    darkMode: false,
    language: 'pt-BR',
    volume: 75,
    autoSave: true,
    theme: 'light',
  });

  const tabs = [
    { id: 'geral', label: 'Geral', icon: 'Settings' },
    { id: 'notificacoes', label: 'Notificações', icon: 'Bell' },
    { id: 'aparencia', label: 'Aparência', icon: 'Palette' },
    { id: 'seguranca', label: 'Segurança', icon: 'Shield' },
  ];

  return (
    <div className="p-2xl max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-xl">
        <h1 className="text-3xl font-bold text-gray-90 font-primary mb-xs">Configurações</h1>
        <p className="text-md text-gray-60 font-primary">
          Personalize sua experiência no Cosmos Pro
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-md">
        <TabGroup
          tabs={tabs.map((tab) => ({
            label: tab.label,
            icon: tab.icon,
            onClick: () => setActiveTab(tab.id),
          }))}
          activeIndex={tabs.findIndex((t) => t.id === activeTab)}
          onTabChange={(index) => setActiveTab(tabs[index].id)}
          orientation="horizontal"
          size="md"
          style="default"
        />
      </div>

      {/* Tab Content */}
      <div className="bg-gray-0 rounded-lg p-xl border border-gray-20">
        {activeTab === 'geral' && (
          <div className="flex flex-col gap-lg">
            <div>
              <h2 className="text-lg font-semibold text-gray-90 font-primary mb-md">
                Configurações Gerais
              </h2>

              <div className="flex flex-col gap-md">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                      Salvar Automaticamente
                    </label>
                    <p className="text-xs text-gray-50 font-primary">
                      Salva alterações automaticamente a cada 5 minutos
                    </p>
                  </div>
                  <Toggle
                    checked={settings.autoSave}
                    onChange={(checked) => setSettings({ ...settings, autoSave: checked })}
                    size="md"
                    color="brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                    Idioma
                  </label>
                  <Dropdown
                    options={[
                      { label: 'Português (Brasil)', value: 'pt-BR' },
                      { label: 'English', value: 'en-US' },
                      { label: 'Español', value: 'es-ES' },
                    ]}
                    value={settings.language}
                    onChange={(value) => setSettings({ ...settings, language: value })}
                    size="md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notificacoes' && (
          <div className="flex flex-col gap-lg">
            <div>
              <h2 className="text-lg font-semibold text-gray-90 font-primary mb-md">
                Notificações
              </h2>

              <div className="flex flex-col gap-md">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                      Ativar Notificações
                    </label>
                    <p className="text-xs text-gray-50 font-primary">
                      Receba notificações no sistema
                    </p>
                  </div>
                  <Toggle
                    checked={settings.notifications}
                    onChange={(checked) => setSettings({ ...settings, notifications: checked })}
                    size="md"
                    color="brand"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                      Notificações por Email
                    </label>
                    <p className="text-xs text-gray-50 font-primary">
                      Receba notificações por email
                    </p>
                  </div>
                  <Toggle
                    checked={settings.emailNotifications}
                    onChange={(checked) =>
                      setSettings({ ...settings, emailNotifications: checked })
                    }
                    size="md"
                    color="brand"
                    disabled={!settings.notifications}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                    Volume de Notificações: {settings.volume}%
                  </label>
                  <Slider
                    value={settings.volume}
                    onChange={(value) => setSettings({ ...settings, volume: value })}
                    size="md"
                    color="brand"
                    isLabel={false}
                    disabled={!settings.notifications}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'aparencia' && (
          <div className="flex flex-col gap-lg">
            <div>
              <h2 className="text-lg font-semibold text-gray-90 font-primary mb-md">Aparência</h2>

              <div className="flex flex-col gap-md">
                <div>
                  <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                    Tema
                  </label>
                  <div className="flex gap-md">
                    <label className="flex items-center gap-xs cursor-pointer">
                      <Radio
                        name="theme"
                        value="light"
                        checked={settings.theme === 'light'}
                        onChange={() => setSettings({ ...settings, theme: 'light' })}
                      />
                      <span className="text-sm text-gray-60 font-primary">Claro</span>
                    </label>
                    <label className="flex items-center gap-xs cursor-pointer">
                      <Radio
                        name="theme"
                        value="dark"
                        checked={settings.theme === 'dark'}
                        onChange={() => setSettings({ ...settings, theme: 'dark' })}
                      />
                      <span className="text-sm text-gray-60 font-primary">Escuro</span>
                    </label>
                    <label className="flex items-center gap-xs cursor-pointer">
                      <Radio
                        name="theme"
                        value="auto"
                        checked={settings.theme === 'auto'}
                        onChange={() => setSettings({ ...settings, theme: 'auto' })}
                      />
                      <span className="text-sm text-gray-60 font-primary">Automático</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                      Modo Escuro
                    </label>
                    <p className="text-xs text-gray-50 font-primary">Ative o tema escuro</p>
                  </div>
                  <Toggle
                    checked={settings.darkMode}
                    onChange={(checked) => setSettings({ ...settings, darkMode: checked })}
                    size="md"
                    color="brand"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seguranca' && (
          <div className="flex flex-col gap-lg">
            <div>
              <h2 className="text-lg font-semibold text-gray-90 font-primary mb-md">Segurança</h2>

              <div className="flex flex-col gap-md">
                <div>
                  <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                    Nova Senha
                  </label>
                  <Input type="password" placeholder="Digite sua nova senha" leftIcon="Lock" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                    Confirmar Senha
                  </label>
                  <Input type="password" placeholder="Confirme sua senha" leftIcon="Lock" />
                </div>

                <div className="flex items-center gap-xs">
                  <Checkbox checked={true} onChange={() => {}} />
                  <span className="text-sm text-gray-60 font-primary">
                    Ativar autenticação de dois fatores
                  </span>
                </div>

                <div className="pt-md">
                  <Button size="md" color="brand" hierarchy="primary" leftIcon="Save">
                    Salvar Alterações
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Loader Example */}
      <div className="mt-md bg-gray-0 rounded-lg p-lg border border-gray-20">
        <h3 className="text-lg font-semibold text-gray-90 font-primary mb-md">Status do Sistema</h3>
        <div className="flex items-center gap-md">
          <Loader type="Circle Single" size="sm" color="brand" isLabel={false} />
          <span className="text-sm text-gray-60 font-primary">Sincronizando dados...</span>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
