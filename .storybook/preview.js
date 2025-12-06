/** @type { import('@storybook/react').Preview } */
import '../src/styles/tailwind.css';

// Carregar fonte Inter de forma segura
if (typeof window !== 'undefined' && !document.getElementById('inter-font')) {
  // Preconnect para melhor performance
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect2);

  // Carregar fonte Inter
  const fontLink = document.createElement('link');
  fontLink.id = 'inter-font';
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap';
  document.head.appendChild(fontLink);
}

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    options: {
      storySort: {
        order: ['Tokens', 'Components', 'Examples'],
      },
    },
  },
};

export default preview;
