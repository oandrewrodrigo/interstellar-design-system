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
Define os valores de espaçamento do sistema, de `spacing-4xs` (2px) até `spacing-6xl` (80px).

### Size
Define os tamanhos padrão de elementos, de `size-2xs` (16px) até `size-xl` (64px).

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

