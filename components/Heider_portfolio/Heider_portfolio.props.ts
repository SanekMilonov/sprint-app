import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Heider_portfolioProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	key: number,
	alt: string,
	img: string,
	title: string,
	content: string,
	cena: number,
}