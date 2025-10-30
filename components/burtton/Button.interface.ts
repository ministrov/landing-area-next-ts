import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  varient?: 'default' | 'medium' | 'large';
}
