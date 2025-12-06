/**
 * Componentes do Design System Interstellar
 * Exporta todos os componentes organizados por categoria
 */

// Importar estilos CSS
import '../styles/tailwind.css';

// ============================================
// PRIMITIVES - Componentes base
// ============================================
export { Icon, getAvailableIcons, default as IconDefault } from './Icon';

// ============================================
// ACTIONS - Componentes de ação
// ============================================
export { Button, default as ButtonDefault } from './Button';
export { ButtonGroup, default as ButtonGroupDefault } from './ButtonGroup';

// ============================================
// FORMS - Componentes de formulário
// ============================================
export { Input, default as InputDefault } from './Input';
export { Textarea, default as TextareaDefault } from './Textarea';
export { Checkbox, default as CheckboxDefault } from './Checkbox';
export { Radio, default as RadioDefault } from './Radio';
export { Toggle, default as ToggleDefault } from './Toggle';
export { Slider, default as SliderDefault } from './Slider';

// ============================================
// FEEDBACK - Componentes de feedback
// ============================================
export { Notification, default as NotificationDefault } from './Notification';
export { Loader, default as LoaderDefault } from './Loader';
export { ProgressBar, default as ProgressBarDefault } from './ProgressBar';

// ============================================
// NAVIGATION - Componentes de navegação
// ============================================
export { Breadcrumb, default as BreadcrumbDefault } from './Breadcrumb';
export { Tab, default as TabDefault } from './Tab';
export { TabGroup, default as TabGroupDefault } from './TabGroup';
export { Dropdown, default as DropdownDefault } from './Dropdown';
export { DropdownAccount, default as DropdownAccountDefault } from './DropdownAccount';

// ============================================
// DATA DISPLAY - Componentes de exibição de dados
// ============================================
export { Table, default as TableDefault } from './Table';
export { Badge, default as BadgeDefault } from './Badge';
export { BadgeIcon, default as BadgeIconDefault } from './BadgeIcon';
export { Rating, default as RatingDefault } from './Rating';
export { Trend, default as TrendDefault } from './Trend';

// ============================================
// LAYOUT - Componentes de layout
// ============================================
export { Accordion, default as AccordionDefault } from './Accordion';

// ============================================
// MEDIA - Componentes de mídia
// ============================================
export { Avatar, default as AvatarDefault } from './Avatar';
export { AvatarGroup, default as AvatarGroupDefault } from './AvatarGroup';

// ============================================
// EXPORTS POR CATEGORIA (opcional, para importações organizadas)
// ============================================
export * as Actions from './actions';
export * as Forms from './forms';
export * as Feedback from './feedback';
export * as Navigation from './navigation';
export * as DataDisplay from './data-display';
export * as Layout from './layout';
export * as Media from './media';
export * as Primitives from './primitives';

