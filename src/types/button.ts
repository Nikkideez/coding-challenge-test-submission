import { ButtonHTMLAttributes } from 'react';

// export type ButtonType = any;
export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>['type'];
export type ButtonVariant = 'primary' | 'secondary';
