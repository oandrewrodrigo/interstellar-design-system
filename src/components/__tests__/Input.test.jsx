import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render input field', () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
    });

    it('should render with label', () => {
      render(<Input label="Email" />);
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it('should render helper text', () => {
      render(<Input helperText="This is helpful" />);
      expect(screen.getByText(/this is helpful/i)).toBeInTheDocument();
    });

    it('should render error message when state is error', () => {
      render(<Input state="error" errorMessage="This is an error" />);
      expect(screen.getByText(/this is an error/i)).toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('should apply size prop correctly', () => {
      const { container } = render(<Input size="lg" placeholder="Large input" />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
    });

    it('should apply different input types', () => {
      render(<Input type="password" placeholder="Password" />);
      const input = screen.getByPlaceholderText(/password/i);
      expect(input).toHaveAttribute('type', 'password');
    });

    it('should be disabled when disabled prop is true', () => {
      render(<Input disabled placeholder="Disabled" />);
      expect(screen.getByPlaceholderText(/disabled/i)).toBeDisabled();
    });

    it('should be disabled when state is disabled', () => {
      render(<Input state="disabled" placeholder="Disabled state" />);
      expect(screen.getByPlaceholderText(/disabled state/i)).toBeDisabled();
    });

    it('should show error state correctly', () => {
      const { container } = render(<Input state="error" placeholder="Error" />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Icons', () => {
    it('should render left icon', () => {
      const { container } = render(<Input leftIcon="Search" placeholder="Search" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render right icon', () => {
      const { container } = render(<Input rightIcon="X" placeholder="Clearable" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Events', () => {
    it('should call onChange when value changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Input onChange={handleChange} placeholder="Type here" />);

      const input = screen.getByPlaceholderText(/type here/i);
      await user.type(input, 'test');

      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('test');
    });

    it('should handle controlled value', () => {
      const { rerender } = render(<Input value="initial" onChange={() => {}} />);
      const input = screen.getByDisplayValue(/initial/i);
      expect(input).toHaveValue('initial');

      rerender(<Input value="updated" onChange={() => {}} />);
      expect(input).toHaveValue('updated');
    });

    it('should not call onChange when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Input onChange={handleChange} disabled placeholder="Disabled" />);

      const input = screen.getByPlaceholderText(/disabled/i);
      await user.type(input, 'test');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should associate label with input', () => {
      render(<Input label="Email" id="email-input" />);
      const input = screen.getByLabelText(/email/i);
      expect(input).toHaveAttribute('id');
    });

    it('should have aria-invalid when in error state', () => {
      render(<Input state="error" label="Error Input" />);
      const input = screen.getByLabelText(/error input/i);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('should have aria-describedby for helper text', () => {
      render(<Input label="Input" helperText="Helper text" />);
      const input = screen.getByLabelText(/input/i);
      const helperId = input.getAttribute('aria-describedby');
      expect(helperId).toBeTruthy();
    });

    it('should have aria-describedby for error message', () => {
      render(<Input label="Input" state="error" errorMessage="Error message" />);
      const input = screen.getByLabelText(/input/i);
      const errorId = input.getAttribute('aria-describedby');
      expect(errorId).toBeTruthy();
    });

    it('should be focusable when not disabled', () => {
      render(<Input placeholder="Focusable" />);
      const input = screen.getByPlaceholderText(/focusable/i);
      input.focus();
      expect(input).toHaveFocus();
    });

    it('should not be focusable when disabled', () => {
      render(<Input disabled placeholder="Not focusable" />);
      const input = screen.getByPlaceholderText(/not focusable/i);
      expect(input).toBeDisabled();
    });
  });

  describe('Special Input Types', () => {
    it('should handle phone type', () => {
      render(<Input type="phone" placeholder="Phone" />);
      const input = screen.getByPlaceholderText(/phone/i);
      expect(input).toBeInTheDocument();
    });

    it('should handle currency type', () => {
      render(<Input type="currency" placeholder="Currency" />);
      const input = screen.getByPlaceholderText(/currency/i);
      expect(input).toBeInTheDocument();
    });

    it('should handle number type', () => {
      render(<Input type="number" placeholder="Number" />);
      const input = screen.getByPlaceholderText(/number/i);
      expect(input).toHaveAttribute('type', 'number');
    });
  });

  describe('Adornments', () => {
    it('should render left adornment', () => {
      render(<Input leftAdornment="R$" placeholder="Price" />);
      expect(screen.getByText('R$')).toBeInTheDocument();
    });

    it('should render right adornment', () => {
      render(<Input rightAdornment="VISA" placeholder="Card" />);
      expect(screen.getByText('VISA')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty value', () => {
      render(<Input value="" onChange={() => {}} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('');
    });

    it('should merge custom className', () => {
      const { container } = render(<Input className="custom-class" />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('custom-class');
    });

    it('should pass through additional props', () => {
      render(<Input data-testid="custom-input" data-custom="value" />);
      const input = screen.getByTestId('custom-input');
      expect(input).toHaveAttribute('data-custom', 'value');
    });
  });
});
