import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],

  // Configuração para build de biblioteca
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.js'),
      name: 'InterstellarDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    rollupOptions: {
      // Externalizar dependências que não devem ser empacotadas
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'lucide-react': 'LucideReact',
        },
        // Preservar estrutura de diretórios para assets
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'styles.css';
          }
          return assetInfo.name;
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    minify: true,
  },
});
