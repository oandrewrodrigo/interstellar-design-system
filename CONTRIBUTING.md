# Contributing to Interstellar Design System

Obrigado por considerar contribuir para o Interstellar Design System! Este documento fornece diretrizes para contribuições.

## Código de Conduta

Este projeto adere a um Código de Conduta. Ao participar, você concorda em manter este código.

## Como Posso Contribuir?

### Reportando Bugs

Antes de criar um bug report:

1. Verifique se o bug já não foi reportado nas [Issues](https://github.com/seu-usuario/interstellar-design-system/issues)
2. Tente reproduzir o bug na versão mais recente
3. Verifique se não é um problema de configuração do seu ambiente

**Como reportar um bug:**

- Use o template de issue para bugs
- Descreva o comportamento esperado vs. o comportamento atual
- Inclua passos para reproduzir
- Adicione screenshots se aplicável
- Inclua informações do ambiente (OS, Node.js, navegador)

### Sugerindo Melhorias

Sugestões de melhorias são sempre bem-vindas!

**Como sugerir uma melhoria:**

- Use o template de issue para feature requests
- Explique o problema que a melhoria resolveria
- Descreva a solução proposta
- Discuta alternativas consideradas

### Pull Requests

**Processo de Pull Request:**

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Faça suas mudanças
4. Certifique-se de que os testes passam (`npm test`)
5. Certifique-se de que o linting passa (`npm run lint`)
6. Adicione testes para novas funcionalidades
7. Atualize a documentação se necessário
8. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
9. Push para a branch (`git push origin feature/amazing-feature`)
10. Abra um Pull Request

**Template de Pull Request:**

```markdown
## Descrição

Breve descrição das mudanças

## Tipo de mudança

- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Como testar

Passos para testar as mudanças

## Checklist

- [ ] Código segue o style guide do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] CHANGELOG.md foi atualizado
- [ ] Todos os testes passam
- [ ] Linting passa sem erros
```

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/interstellar-design-system.git

# Entre no diretório
cd interstellar-design-system

# Instale as dependências
npm install
```

### Scripts Disponíveis

```bash
# Executar Storybook
npm run storybook

# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage

# Executar linting
npm run lint

# Corrigir problemas de linting
npm run lint:fix

# Formatar código
npm run format

# Verificar formatação
npm run format:check

# Build da biblioteca
npm run build
```

## Padrões de Código

### Estilo de Código

- Seguimos o [ESLint config](./.eslintrc.js)
- Usamos [Prettier](./.prettierrc) para formatação
- Execute `npm run lint:fix` antes de commitar

### Convenções de Nomenclatura

- Componentes: PascalCase (`Button.jsx`)
- Arquivos de teste: `.test.jsx` (ex: `Button.test.jsx`)
- Funções: camelCase
- Constantes: UPPER_SNAKE_CASE

### Estrutura de Componentes

```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente [Nome]
 * Descrição do componente
 *
 * @param {type} prop - Descrição
 */
export const Component = ({ prop1, prop2 = 'default', ...props }) => {
  // Lógica do componente
  return <div {...props}>{/* JSX */}</div>;
};

Component.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
};

Component.defaultProps = {
  prop2: 'default',
};

export default Component;
```

## Testes

### Escrevendo Testes

- Escreva testes para todas as novas funcionalidades
- Mantenha cobertura acima de 70%
- Teste comportamento, não implementação
- Use React Testing Library seguindo as [melhores práticas](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### Estrutura de Testes

```jsx
import { render, screen } from '@testing-library/react';
import { Component } from '../Component';

describe('Component', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      render(<Component />);
      // assertions
    });
  });

  describe('Props', () => {
    // test props
  });

  describe('Events', () => {
    // test events
  });

  describe('Accessibility', () => {
    // test a11y
  });
});
```

## Acessibilidade

- Todos os componentes devem ser acessíveis
- Siga as diretrizes WCAG 2.1 AA
- Use atributos ARIA apropriados
- Teste com leitores de tela quando possível
- Execute testes de acessibilidade: `npm run test:a11y`

## Documentação

### Storybook

- Adicione stories para novos componentes
- Documente todas as props e variações
- Inclua exemplos de uso

### README

- Atualize o README se houver mudanças significativas
- Mantenha exemplos atualizados

### CHANGELOG

- Adicione todas as mudanças ao CHANGELOG.md
- Siga o formato [Keep a Changelog](https://keepachangelog.com/)

## Versionamento

Seguimos [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): Novas features (backwards compatible)
- **PATCH** (0.0.1): Bug fixes (backwards compatible)

## Perguntas?

Abra uma issue ou entre em contato com os maintainers.

Obrigado por contribuir! 🎉
