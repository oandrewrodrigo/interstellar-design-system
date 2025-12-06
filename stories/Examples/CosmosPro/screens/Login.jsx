import React, { useState } from 'react';
import { Button, Input, Icon } from '../../../../src/components/index.js';

/**
 * Tela de Login do Cosmos Pro
 * Design pixel perfect baseado no Figma
 */
const Login = () => {
  const [email, setEmail] = useState('andrew.felix@procfit.com.br');
  const [password, setPassword] = useState('*****************');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <div
        className="flex-1 relative flex items-center justify-center p-2xl"
        style={{ background: 'linear-gradient(180deg, #4F46E5 0%, #FFFFFF 100%)' }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-[600px]">
          {/* Logo */}
          <div className="flex items-center gap-xs pt-xl">
            <div className="text-white">
              <div className="flex items-baseline gap-xs">
                <h1 className="text-4xl font-extrabold text-white font-primary tracking-tight">
                  COSMOS
                </h1>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-extrabold text-white font-primary tracking-tight">
                  PRO
                </span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="pb-2xl">
            <h2 className="text-[60px] font-extrabold leading-[68px] tracking-[-1.08px] text-gray-80 font-primary">
              Um universo de possibilidades.
            </h2>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 bg-gray-0 flex items-center justify-center p-2xl">
        <div className="w-full max-w-[480px]">
          {/* Form Container */}
          <div className="flex flex-col gap-xl">
            {/* Title */}
            <div className="flex flex-col gap-2xs items-center">
              <h3 className="text-2xl font-extrabold leading-[32px] tracking-[-0.288px] text-gray-90 font-primary text-center">
                Entre com a sua conta
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-xl">
              {/* Email Input */}
              <div className="flex flex-col gap-2xs">
                <label className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-90 font-primary">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon="Mail"
                  size="md"
                  state="filled"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2xs">
                <label className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-90 font-primary">
                  Senha
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    leftIcon="Lock"
                    size="md"
                    state="filled"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity z-10 p-2xs"
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    <Icon name={showPassword ? 'EyeOff' : 'Eye'} size="sm" color="gray-30" />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                color="brand"
                hierarchy="primary"
                rightIcon="ArrowRight"
                className="w-full"
              >
                Entrar
              </Button>

              {/* Links */}
              <div className="flex flex-col gap-2xs items-center">
                <div className="flex items-center gap-4xs justify-center">
                  <span className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-90 font-primary">
                    Não tem uma conta?
                  </span>
                  <button
                    type="button"
                    className="text-sm font-bold leading-5 tracking-[-0.084px] text-brand-60 font-primary hover:text-brand-70 transition-colors"
                  >
                    Criar sua conta
                  </button>
                </div>
                <button
                  type="button"
                  className="text-sm font-bold leading-5 tracking-[-0.084px] text-brand-60 font-primary hover:text-brand-70 transition-colors"
                >
                  Esqueci minha senha
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
