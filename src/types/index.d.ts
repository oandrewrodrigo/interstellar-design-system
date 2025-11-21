// Type definitions for Interstellar Design System

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'brand' | 'destructive' | 'gray';
export type ButtonHierarchy = 'primary' | 'secondary' | 'outlined' | 'link';
export type ButtonState = 'default' | 'hover' | 'focused' | 'disabled';

export type InputSize = 'md' | 'lg';
export type InputType =
  | 'default'
  | 'action'
  | 'currency'
  | 'credit-card'
  | 'date'
  | 'link'
  | 'password'
  | 'phone'
  | 'number';
export type InputState = 'default' | 'hover' | 'filled' | 'focused' | 'disabled' | 'error';

export type ComponentSize = 'sm' | 'md' | 'lg';
export type ComponentState = 'default' | 'hover' | 'focused' | 'disabled';

export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg';

export type ChatMessageType = 'sender' | 'recipient';
export type ChatMessageContentType =
  | 'text'
  | 'reply'
  | 'image'
  | 'video'
  | 'file'
  | 'link'
  | 'recording'
  | 'typing';
export type ChatMessageStatus = 'sent' | 'delivered' | 'read' | 'failed' | 'typing';
