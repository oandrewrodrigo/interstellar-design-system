/** @type { import('@storybook/react').Preview } */
import '../src/styles/tailwind.css';

// Carregar fonte Inter de forma segura
if (typeof window !== 'undefined') {
  const existingLink = document.getElementById('inter-font');
  if (!existingLink) {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.id = 'inter-font';
    link3.rel = 'stylesheet';
    link3.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(link3);
  }
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
  },
};

export default preview;
