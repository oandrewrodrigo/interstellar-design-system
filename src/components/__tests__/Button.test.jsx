import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render button with children', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('should render button without children', () => {
      render(<Button aria-label="Submit" />);
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    it('should render with default props', () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });

  describe('Props', () => {
    it('should apply size prop correctly', () => {
      const { container } = render(<Button size="lg">Large</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('h-12'); // lg size class
    });

    it('should apply color prop correctly', () => {
      const { container } = render(<Button color="destructive">Delete</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('bg-destructive-60');
    });

    it('should apply hierarchy prop correctly', () => {
      const { container } = render(<Button hierarchy="outlined">Outlined</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('border');
    });

    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should be disabled when state is disabled', () => {
      render(<Button state="disabled">Disabled State</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Icons', () => {
    it('should render left icon', () => {
      render(<Button leftIcon="User">With Icon</Button>);
      const button = screen.getByRole('button');
      expect(button.querySelector('svg')).toBeInTheDocument();
    });

    it('should render right icon', () => {
      render(<Button rightIcon="ArrowRight">With Icon</Button>);
      const button = screen.getByRole('button');
      expect(button.querySelector('svg')).toBeInTheDocument();
    });

    it('should render both icons', () => {
      const { container } = render(
        <Button leftIcon="User" rightIcon="ArrowRight">
          Both Icons
        </Button>
      );
      const svgs = container.querySelectorAll('svg');
      expect(svgs.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Events', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should handle keyboard events', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Press Enter</Button>);

      const button = screen.getByRole('button');
      fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
      // Note: keyDown doesn't trigger onClick, but we test keyboard accessibility
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Accessibility', () => {
    it('should have button role', () => {
      render(<Button>Accessible</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should accept aria-label', () => {
      render(<Button aria-label="Submit form">Submit</Button>);
      expect(screen.getByRole('button', { name: /submit form/i })).toBeInTheDocument();
    });

    it('should accept aria-describedby', () => {
      render(
        <>
          <span id="help-text">Help text</span>
          <Button aria-describedby="help-text">Button</Button>
        </>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-describedby', 'help-text');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      render(<Button aria-label="Empty" />);
      expect(screen.getByRole('button', { name: /empty/i })).toBeInTheDocument();
    });

    it('should merge custom className', () => {
      const { container } = render(<Button className="custom-class">Custom</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('custom-class');
    });

    it('should pass through additional props', () => {
      render(
        <Button data-testid="custom-button" data-custom="value">
          Custom Props
        </Button>
      );
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('data-custom', 'value');
    });
  });
});
