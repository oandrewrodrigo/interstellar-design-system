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
    // Garantir que PostCSS está configurado
    config.css = config.css || {};

    // Configurações do servidor
    config.server = {
      ...config.server,
      fs: {
        ...config.server?.fs,
        strict: false,
        allow: ['..'],
      },
      hmr: {
        overlay: true,
      },
    };

    // Otimização de dependências
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['react', 'react-dom', 'lucide-react'],
      exclude: [],
    };

    // Configurações de build
    config.build = {
      ...config.build,
      commonjsOptions: {
        include: [/node_modules/],
      },
      rollupOptions: {
        ...config.build?.rollupOptions,
        output: {
          ...config.build?.rollupOptions?.output,
          format: 'es',
        },
      },
    };

    // Resolver duplicatas de dependências e extensões
    config.resolve = {
      ...config.resolve,
      dedupe: ['react', 'react-dom'],
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
        ...config.resolve?.alias,
      },
    };

    // Configuração para melhorar o carregamento de módulos dinâmicos
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    };

    return config;
  },
};

export default config;
