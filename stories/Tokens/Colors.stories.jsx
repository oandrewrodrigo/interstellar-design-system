import React from 'react';
import tokensData from '../../tokens/index.js';

export default {
  title: 'Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Paleta de cores do Design System Interstellar',
      },
    },
  },
};

const ColorSwatch = ({ name, value, shade }) => (
  <div className="mb-4">
    <div
      className="w-[100px] h-[100px] rounded-lg border border-gray-20 mb-2"
      style={{ backgroundColor: value }}
    />
    <div className="text-xs font-semibold">{name}</div>
    <div className="text-[11px] text-gray-50">{value}</div>
    {shade && <div className="text-[11px] text-gray-50">Shade: {shade}</div>}
  </div>
);

const ColorPalette = ({ paletteName, colors }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">{paletteName}</h3>
    <div className="flex flex-wrap gap-4">
      {Object.entries(colors).map(([shade, token]) => (
        <ColorSwatch
          key={shade}
          name={`${paletteName} ${shade}`}
          value={token.$value}
          shade={shade}
        />
      ))}
    </div>
  </div>
);

export const AllColors = () => {
  const colors = tokensData.colors;

  return (
    <div className="p-6 max-w-[1200px]">
      <h1 className="text-[32px] font-bold mb-8">
        Paleta de Cores
      </h1>
      {Object.entries(colors).map(([paletteName, paletteColors]) => (
        <ColorPalette key={paletteName} paletteName={paletteName} colors={paletteColors} />
      ))}
    </div>
  );
};

export const Gray = () => {
  return (
    <div className="p-6">
      <ColorPalette paletteName="Gray" colors={tokensData.colors.Gray} />
    </div>
  );
};

export const Brand = () => {
  return (
    <div className="p-6">
      <ColorPalette paletteName="Brand" colors={tokensData.colors.Brand} />
    </div>
  );
};

export const Destructive = () => {
  return (
    <div className="p-6">
      <ColorPalette paletteName="Destructive" colors={tokensData.colors.Destructive} />
    </div>
  );
};

export const Warning = () => {
  return (
    <div className="p-6">
      <ColorPalette paletteName="Warning" colors={tokensData.colors.Warning} />
    </div>
  );
};

export const Success = () => {
  return (
    <div className="p-6">
      <ColorPalette paletteName="Success" colors={tokensData.colors.Success} />
    </div>
  );
};

