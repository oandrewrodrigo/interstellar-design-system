import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button, Input, Checkbox, Radio, Textarea, Dropdown, Notification } from '../index';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  describe('Button', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Button>Click me</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations with aria-label', async () => {
      const { container } = render(<Button aria-label="Submit form">Submit</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations when disabled', async () => {
      const { container } = render(<Button disabled>Disabled</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Input', () => {
    it('should have no accessibility violations with label', async () => {
      const { container } = render(<Input label="Email" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations with helper text', async () => {
      const { container } = render(<Input label="Email" helperText="Enter your email address" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations with error state', async () => {
      const { container } = render(
        <Input label="Email" state="error" errorMessage="Invalid email" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations when disabled', async () => {
      const { container } = render(<Input label="Email" disabled />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Checkbox', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Checkbox aria-label="Accept terms" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations when checked', async () => {
      const { container } = render(<Checkbox checked aria-label="Selected" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations when disabled', async () => {
      const { container } = render(<Checkbox disabled aria-label="Disabled" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Radio', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<Radio name="option" value="1" aria-label="Option 1" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations when checked', async () => {
      const { container } = render(<Radio name="option" value="1" checked aria-label="Selected" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Textarea', () => {
    it('should have no accessibility violations with label', async () => {
      const { container } = render(<Textarea label="Message" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations with helper text', async () => {
      const { container } = render(<Textarea label="Message" helperText="Enter your message" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations when disabled', async () => {
      const { container } = render(<Textarea label="Message" disabled />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Dropdown', () => {
    it('should have no accessibility violations', async () => {
      const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ];
      const { container } = render(<Dropdown label="Select" options={options} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations with helper text', async () => {
      const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ];
      const { container } = render(
        <Dropdown label="Select" options={options} helperText="Choose an option" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Notification', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <Notification title="Success" supportingText="Operation completed" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no violations with close button', async () => {
      const { container } = render(
        <Notification title="Info" supportingText="Information message" onClose={() => {}} />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
