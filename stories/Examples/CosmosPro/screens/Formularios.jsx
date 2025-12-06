import React, { useState } from 'react';
import {
  Button,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Toggle,
  Slider,
  Dropdown,
  Icon,
  Badge,
  ProgressBar,
  Accordion,
} from '../../../../src/components/index.js';

/**
 * Tela de Formulários do ERP Cosmos Pro
 * Demonstra todos os componentes de formulário
 */
const Formularios = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    category: '',
    priority: 'medium',
    notifications: true,
    budget: 50,
    terms: false,
    plan: 'basic',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-2xl max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-xl">
        <h1 className="text-3xl font-bold text-gray-90 font-primary mb-xs">
          Formulários
        </h1>
        <p className="text-md text-gray-60 font-primary">
          Exemplos de formulários usando os componentes do design system
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {/* Formulário Principal */}
        <div className="bg-gray-0 rounded-lg p-xl border border-gray-20">
          <h2 className="text-xl font-semibold text-gray-90 font-primary mb-md">
            Novo Projeto
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-md">
            {/* Inputs */}
            <div>
              <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                Nome do Projeto
              </label>
              <Input
                placeholder="Digite o nome do projeto"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                leftIcon="Folder"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                Email
              </label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                leftIcon="Mail"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                Telefone
              </label>
              <Input
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                leftIcon="Phone"
              />
            </div>

            {/* Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                Descrição
              </label>
              <Textarea
                placeholder="Descreva o projeto..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
              />
            </div>

            {/* Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                Categoria
              </label>
              <Dropdown
                options={[
                  { label: 'Desenvolvimento', value: 'dev' },
                  { label: 'Design', value: 'design' },
                  { label: 'Marketing', value: 'marketing' },
                  { label: 'Vendas', value: 'sales' },
                ]}
                value={formData.category}
                onChange={(value) => setFormData({ ...formData, category: value })}
                size="md"
              />
            </div>

            {/* Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                Prioridade
              </label>
              <div className="flex gap-md">
                <label className="flex items-center gap-xs cursor-pointer">
                  <Radio
                    name="priority"
                    value="low"
                    checked={formData.priority === 'low'}
                    onChange={() => setFormData({ ...formData, priority: 'low' })}
                  />
                  <span className="text-sm text-gray-60 font-primary">Baixa</span>
                </label>
                <label className="flex items-center gap-xs cursor-pointer">
                  <Radio
                    name="priority"
                    value="medium"
                    checked={formData.priority === 'medium'}
                    onChange={() => setFormData({ ...formData, priority: 'medium' })}
                  />
                  <span className="text-sm text-gray-60 font-primary">Média</span>
                </label>
                <label className="flex items-center gap-xs cursor-pointer">
                  <Radio
                    name="priority"
                    value="high"
                    checked={formData.priority === 'high'}
                    onChange={() => setFormData({ ...formData, priority: 'high' })}
                  />
                  <span className="text-sm text-gray-60 font-primary">Alta</span>
                </label>
              </div>
            </div>

            {/* Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                  Receber Notificações
                </label>
                <p className="text-xs text-gray-50 font-primary">
                  Receba atualizações por email
                </p>
              </div>
              <Toggle
                checked={formData.notifications}
                onChange={(checked) => setFormData({ ...formData, notifications: checked })}
                size="md"
                color="brand"
              />
            </div>

            {/* Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-60 font-primary mb-xs">
                Orçamento: R$ {formData.budget * 1000}
              </label>
              <Slider
                value={formData.budget}
                onChange={(value) => setFormData({ ...formData, budget: value })}
                size="md"
                color="brand"
                isLabel={false}
              />
            </div>

            {/* Checkbox */}
            <div>
              <label className="flex items-center gap-xs cursor-pointer">
                <Checkbox
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                />
                <span className="text-sm text-gray-60 font-primary">
                  Aceito os termos e condições
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-sm pt-md mt-xs">
              <Button
                type="submit"
                size="md"
                color="brand"
                hierarchy="primary"
              >
                Salvar Projeto
              </Button>
              <Button
                type="button"
                size="md"
                color="gray"
                hierarchy="outlined"
                onClick={() => setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  description: '',
                  category: '',
                  priority: 'medium',
                  notifications: true,
                  budget: 50,
                  terms: false,
                  plan: 'basic',
                })}
              >
                Limpar
              </Button>
            </div>
          </form>
        </div>

        {/* Accordions e Outros Componentes */}
        <div className="flex flex-col gap-md">
          {/* Accordions */}
          <div className="bg-gray-0 rounded-lg border border-gray-20 overflow-hidden">
            <Accordion
              title="Informações do Projeto"
              contentText="Detalhes adicionais sobre o projeto podem ser inseridos aqui."
              isOpened={false}
              isBadge={true}
              badgeText="Novo"
              isCtaButton={true}
              ctaButtonText="Ver Detalhes"
            />
            <Accordion
              title="Configurações Avançadas"
              contentText="Configure opções avançadas do projeto."
              isOpened={false}
              isBadge={false}
              isCtaButton={false}
            />
            <Accordion
              title="Histórico de Alterações"
              contentText="Visualize todas as alterações realizadas no projeto."
              isOpened={false}
              isBadge={true}
              badgeText="12"
              isCtaButton={true}
              ctaButtonText="Ver Tudo"
            />
          </div>

          {/* Progress Bar Example */}
          <div className="bg-gray-0 rounded-lg p-lg border border-gray-20">
            <h3 className="text-lg font-semibold text-gray-90 font-primary mb-md">
              Progresso do Formulário
            </h3>
            <ProgressBar
              progression={65}
              size="lg"
              color="brand"
              label="Bottom"
            />
          </div>

          {/* Badges Example */}
          <div className="bg-gray-0 rounded-lg p-lg border border-gray-20">
            <h3 className="text-lg font-semibold text-gray-90 font-primary mb-md">
              Status do Projeto
            </h3>
            <div className="flex flex-wrap gap-sm">
              <Badge size="md" color="success" hierarchy="primary">
                Aprovado
              </Badge>
              <Badge size="md" color="warning" hierarchy="secondary">
                Em Revisão
              </Badge>
              <Badge size="md" color="brand" hierarchy="outlined">
                Rascunho
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formularios;

