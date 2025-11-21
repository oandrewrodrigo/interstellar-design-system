/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Garantir que PostCSS está configurado corretamente
    if (!config.css) {
      config.css = {};
    }

    // Configurações do servidor para evitar problemas
    config.server = {
      ...config.server,
      fs: {
        ...config.server?.fs,
        strict: false,
        allow: ['..'],
      },
    };

    return config;
  },
};

export default config;
