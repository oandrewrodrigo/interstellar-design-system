# Tokens do Design System

Esta pasta contém todos os tokens base do Design System organizados por categoria.

## Estrutura

```
tokens/
├── index.json              # Arquivo principal com todos os tokens consolidados
├── border-radius.json      # Tokens de raio de borda
├── spacing.json            # Tokens de espaçamento
├── size.json               # Tokens de tamanho
├── size-icon.json          # Tokens de tamanho de ícones
├── typography/             # Tokens de tipografia
│   ├── index.json          # Todos os tokens de tipografia consolidados
│   ├── font-family.json    # Token da fonte primária (Inter)
│   ├── display.json        # Tokens Display (lg, md, sm)
│   ├── heading.json        # Tokens Heading (2xl, xl, lg, md, sm, xs)
│   ├── text.json           # Tokens Text (2xl, xl, lg, md, sm, xs, 2xs)
│   ├── paragraph.json      # Tokens Paragraph (2xl, xl, lg, md, sm, xs)
│   └── label.json          # Tokens Label (2xl, xl, lg, md, sm, xs)
└── colors/                 # Paletas de cores
    ├── gray.json
    ├── brand.json
    ├── destructive.json
    ├── warning.json
    ├── success.json
    ├── blue.json
    ├── cyan.json
    ├── teal.json
    ├── lime.json
    ├── purple.json
    ├── pink.json
    ├── orange.json
    └── transparent.json
```

## Categorias de Tokens

### Border Radius
Define os valores de raio de borda disponíveis, de `radius-none` (0px) até `radius-full` (9999px).

### Spacing
Define os valores de espaçamento do sistema, compatíveis com a escala padrão do Tailwind CSS. Os tokens cobrem de `spacing-none` (0px) até `spacing-15xl` (384px).

#### Nomenclatura e Valores

**Valores Base:**
- `spacing-none` → 0px (Tailwind 0)
- `spacing-4xs` → 2px (Tailwind 0.5)
- `spacing-3xs` → 4px (Tailwind 1)
- `spacing-2xs` → 6px (Tailwind 1.5)
- `spacing-xs` → 8px (Tailwind 2)
- `spacing-2.5` → 10px (Tailwind 2.5)
- `spacing-sm` → 12px (Tailwind 3)
- `spacing-3.5` → 14px (Tailwind 3.5)
- `spacing-md` → 16px (Tailwind 4)
- `spacing-lg` → 20px (Tailwind 5)
- `spacing-xl` → 24px (Tailwind 6)

**Valores Intermediários:**
- `spacing-7` → 28px (Tailwind 7)
- `spacing-2xl` → 32px (Tailwind 8)
- `spacing-9` → 36px (Tailwind 9)
- `spacing-3xl` → 40px (Tailwind 10)
- `spacing-11` → 44px (Tailwind 11)
- `spacing-4xl` → 48px (Tailwind 12)
- `spacing-14` → 56px (Tailwind 14)
- `spacing-5xl` → 64px (Tailwind 16)
- `spacing-6xl` → 80px (Tailwind 20)
- `spacing-7xl` → 96px (Tailwind 24)

**Valores Grandes:**
- `spacing-8xl` → 128px (Tailwind 32)
- `spacing-9xl` → 160px (Tailwind 40)
- `spacing-10xl` → 192px (Tailwind 48)
- `spacing-11xl` → 224px (Tailwind 56)
- `spacing-12xl` → 256px (Tailwind 64)
- `spacing-13xl` → 288px (Tailwind 72)
- `spacing-14xl` → 320px (Tailwind 80)
- `spacing-15xl` → 384px (Tailwind 96)

#### Uso no Tailwind

Todos os tokens são automaticamente convertidos para classes Tailwind. O prefixo `spacing-` é removido, então você pode usar:

- `p-none`, `m-none`, `gap-none` → 0px
- `p-4xs`, `m-4xs`, `gap-4xs` → 2px
- `p-2.5`, `m-2.5`, `gap-2.5` → 10px
- `p-7`, `m-7`, `gap-7` → 28px
- `p-7xl`, `m-7xl`, `gap-7xl` → 96px
- etc.

**Exemplo:**
```jsx
<div className="p-md gap-sm">  {/* 16px padding, 12px gap */}
<div className="m-2xl gap-7">   {/* 32px margin, 28px gap */}
<div className="px-7xl py-lg"> {/* 96px horizontal, 20px vertical */}
```

### Size
Define os tamanhos padrão de elementos, compatíveis com a escala padrão do Tailwind CSS. Os tokens cobrem de `size-none` (0px) até `size-9xl` (384px).

#### Nomenclatura e Valores

**Valores Muito Pequenos:**
- `size-none` → 0px (Sem tamanho)
- `size-3xs` → 4px (Tailwind 1)
- `size-2.5xs` → 6px (Tailwind 1.5)
- `size-2xs` → 8px (Tailwind 2)
- `size-1.5xs` → 10px (Tailwind 2.5)
- `size-xs` → 12px (Tailwind 3)
- `size-2xs-old` → 16px (Tailwind 4 - compatibilidade)
- `size-sm` → 20px (Tailwind 5)
- `size-xs-old` → 24px (Tailwind 6 - compatibilidade)

**Valores Intermediários:**
- `size-7` → 28px (Tailwind 7)
- `size-sm-old` → 32px (Tailwind 8 - compatibilidade)
- `size-9` → 36px (Tailwind 9)
- `size-md` → 40px (Tailwind 10)
- `size-11` → 44px (Tailwind 11)
- `size-lg` → 48px (Tailwind 12)
- `size-13` → 52px (Custom - Toggle lg)
- `size-14` → 56px (Tailwind 14)
- `size-xl` → 64px (Tailwind 16)

**Valores Grandes:**
- `size-2xl` → 80px (Tailwind 20)
- `size-3xl` → 96px (Tailwind 24)
- `size-4xl` → 128px (Tailwind 32)
- `size-5xl` → 160px (Tailwind 40)
- `size-6xl` → 192px (Tailwind 48)
- `size-7xl` → 256px (Tailwind 64)
- `size-8xl` → 320px (Tailwind 80)
- `size-9xl` → 384px (Tailwind 96)

#### Uso no Tailwind

Todos os tokens são automaticamente convertidos para classes Tailwind. O prefixo `size-` é removido, então você pode usar:

- `w-none`, `h-none` → 0px
- `w-3xs`, `h-3xs` → 4px
- `w-sm`, `h-sm` → 20px
- `w-md`, `h-md` → 40px
- `w-2xl`, `h-2xl` → 80px
- etc.

**Exemplo:**
```jsx
<div className="w-sm h-sm">  {/* 20px × 20px */}
<div className="w-md h-7">   {/* 40px × 28px */}
<div className="w-2xl h-xl"> {/* 80px × 64px */}
```

**Nota sobre Compatibilidade:**
Os tokens `size-2xs-old`, `size-xs-old` e `size-sm-old` foram mantidos para compatibilidade com código existente. Recomenda-se usar os novos tokens (`size-2xs`, `size-xs`, `size-sm`) em novos desenvolvimentos.

### Size Icon
Define os tamanhos específicos para ícones, de `size-icon-2xs` (12px) até `size-icon-lg` (32px).

### Typography
Define os estilos de tipografia do sistema usando a fonte **Inter**:

- **Font Family**: Fonte primária do sistema (Inter)
- **Display** (lg, md, sm): Estilos para textos de destaque muito grandes
  - Pesos: ExtraBold (800), Bold (700), SemiBold (600)
  - Tamanhos: 180px, 128px, 96px
- **Heading** (2xl, xl, lg, md, sm, xs): Estilos para títulos e cabeçalhos
  - Pesos: ExtraBold (800), Bold (700), SemiBold (600), Medium (500)
  - Tamanhos: 72px, 60px, 48px, 36px, 30px, 24px
- **Text** (2xl, xl, lg, md, sm, xs, 2xs): Estilos para textos gerais
  - Pesos: ExtraBold (800), Bold (700), SemiBold (600), Medium (500)
  - Tamanhos: 24px, 20px, 18px, 16px, 14px, 12px, 10px
- **Paragraph** (2xl, xl, lg, md, sm, xs): Estilos para parágrafos
  - Peso: Regular (400)
  - Line-height: 160% (1.6)
  - Tamanhos: 24px, 20px, 18px, 16px, 14px, 12px
- **Label** (2xl, xl, lg, md, sm, xs): Estilos para rótulos e etiquetas
  - Peso: ExtraBold (800)
  - Letter-spacing: positivo (tracking aumentado)
  - Tamanhos: 20px, 18px, 16px, 14px, 12px, 10px

Cada token de tipografia inclui:
- `fontFamily`: "Inter"
- `fontSize`: valor em pixels
- `fontWeight`: 400, 500, 600, 700, ou 800
- `lineHeight`: valor em pixels ou ratio
- `letterSpacing`: valor em pixels (tracking)

### Colors
Contém todas as paletas de cores do sistema:
- **Gray**: Escala de cinza de 0 (branco) a 100 (preto)
- **Brand**: Cores da marca (indigo)
- **Destructive**: Cores para ações destrutivas (vermelho)
- **Warning**: Cores para avisos (amarelo)
- **Success**: Cores para sucesso (verde)
- **Blue, Cyan, Teal, Lime, Purple, Pink, Orange**: Paletas adicionais
- **Transparent**: Cores transparentes (White e Black com diferentes opacidades)

## Formato dos Tokens

Todos os tokens seguem o formato W3C Design Tokens:

### Tokens Simples (number, color, string)

```json
{
  "token-name": {
    "$type": "number" | "color" | "string",
    "$value": <valor>
  }
}
```

### Tokens de Tipografia

```json
{
  "typography": {
    "display-lg-extrabold": {
      "$type": "typography",
      "$value": {
        "fontFamily": "Inter",
        "fontSize": 180,
        "fontWeight": 800,
        "lineHeight": 188,
        "letterSpacing": -9
      }
    }
  }
}
```

## Uso

Para usar todos os tokens de uma vez, importe o arquivo `index.json`. Para usar tokens específicos, importe os arquivos individuais conforme necessário.

