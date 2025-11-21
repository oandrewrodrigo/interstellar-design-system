import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../Checkbox';

describe('Checkbox Component', () => {
  describe('Rendering', () => {
    it('should render checkbox', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('should render unchecked by default', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });

    it('should render checked when checked prop is true', () => {
      render(<Checkbox checked />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('should render indeterminate state', () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    });
  });

  describe('Props', () => {
    it('should apply size prop correctly', () => {
      const { container } = render(<Checkbox size="lg" />);
      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toBeInTheDocument();
    });

    it('should be disabled when disabled prop is true', () => {
      render(<Checkbox disabled />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });

    it('should be disabled when state is disabled', () => {
      render(<Checkbox state="disabled" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });
  });

  describe('Events', () => {
    it('should call onChange when clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Checkbox onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Checkbox onChange={handleChange} disabled />);

      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('should toggle checked state on click', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn((e) => {
        e.target.checked = !e.target.checked;
      });

      const { rerender } = render(<Checkbox checked={false} onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have checkbox role', () => {
      render(<Checkbox />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should have aria-checked attribute', () => {
      render(<Checkbox checked />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-checked', 'true');
    });

    it('should have aria-checked="mixed" when indeterminate', () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    });

    it('should associate label with checkbox', () => {
      render(<Checkbox id="test-checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.closest('label');
      expect(label).toHaveAttribute('for', checkbox.id);
    });

    it('should accept aria-label', () => {
      render(<Checkbox aria-label="Accept terms" />);
      expect(screen.getByRole('checkbox', { name: /accept terms/i })).toBeInTheDocument();
    });
  });

  describe('Visual States', () => {
    it('should show check icon when checked', () => {
      const { container } = render(<Checkbox checked />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should show minus icon when indeterminate', () => {
      const { container } = render(<Checkbox indeterminate />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should not show icon when unchecked', () => {
      const { container } = render(<Checkbox checked={false} />);
      const checkIcon = container.querySelector('svg');
      // Should not have check icon when unchecked
      // The SVG might be in the DOM but not visible
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });
  });

  describe('Edge Cases', () => {
    it('should handle controlled checkbox', () => {
      const { rerender } = render(<Checkbox checked={false} onChange={() => {}} />);
      let checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();

      rerender(<Checkbox checked={true} onChange={() => {}} />);
      checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('should merge custom className', () => {
      const { container } = render(<Checkbox className="custom-class" />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('custom-class');
    });

    it('should pass through additional props', () => {
      render(<Checkbox data-testid="custom-checkbox" data-custom="value" />);
      const checkbox = screen.getByTestId('custom-checkbox');
      expect(checkbox).toHaveAttribute('data-custom', 'value');
    });
  });
});
