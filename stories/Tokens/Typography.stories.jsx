import React from 'react';
import tokensData from '../../tokens/index.js';

export default {
  title: 'Tokens/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Sistema de tipografia do Design System Interstellar usando a fonte Inter',
      },
    },
  },
};

const TypographyExample = ({ tokenName, token }) => {
  const style = {
    fontFamily: token.$value.fontFamily,
    fontSize: `${token.$value.fontSize}px`,
    fontWeight: token.$value.fontWeight,
    lineHeight: `${token.$value.lineHeight}px`,
    letterSpacing: `${token.$value.letterSpacing}px`,
  };

  return (
    <div className="mb-8 border-b border-gray-20 pb-6">
      <div className="mb-3">
        <h3 className="text-base font-semibold mb-2">{tokenName}</h3>
        <div className="text-xs text-gray-50 font-mono">
          font-size: {token.$value.fontSize}px | 
          font-weight: {token.$value.fontWeight} | 
          line-height: {token.$value.lineHeight}px | 
          letter-spacing: {token.$value.letterSpacing}px
        </div>
      </div>
      <div style={style} className="mb-6">
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
};

const TypographyCategory = ({ category, tokens }) => {
  const categoryTokens = Object.entries(tokens.typography).filter(([name]) =>
    name.startsWith(category)
  );

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category}
      </h2>
      {categoryTokens.map(([tokenName, token]) => (
        <TypographyExample key={tokenName} tokenName={tokenName} token={token} />
      ))}
    </div>
  );
};

export const AllTypography = () => {
  return (
    <div className="p-6 max-w-[1200px]">
      <h1 className="text-[32px] font-bold mb-8">
        Sistema de Tipografia
      </h1>
      <TypographyCategory category="display" tokens={tokensData} />
      <TypographyCategory category="heading" tokens={tokensData} />
      <TypographyCategory category="text" tokens={tokensData} />
      <TypographyCategory category="paragraph" tokens={tokensData} />
      <TypographyCategory category="label" tokens={tokensData} />
    </div>
  );
};

export const Display = () => {
  return (
    <div className="p-6">
      <TypographyCategory category="display" tokens={tokensData} />
    </div>
  );
};

export const Heading = () => {
  return (
    <div className="p-6">
      <TypographyCategory category="heading" tokens={tokensData} />
    </div>
  );
};

export const Text = () => {
  return (
    <div className="p-6">
      <TypographyCategory category="text" tokens={tokensData} />
    </div>
  );
};

export const Paragraph = () => {
  return (
    <div className="p-6">
      <TypographyCategory category="paragraph" tokens={tokensData} />
    </div>
  );
};

export const Label = () => {
  return (
    <div className="p-6">
      <TypographyCategory category="label" tokens={tokensData} />
    </div>
  );
};

