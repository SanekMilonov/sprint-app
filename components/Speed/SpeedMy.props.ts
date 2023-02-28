import { ReactNode } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SpeedMyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	num: number;
	color: 'red' | 'green';
}