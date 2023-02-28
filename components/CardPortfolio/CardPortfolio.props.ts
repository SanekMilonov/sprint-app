import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardPortfolioProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	img: string,
	title: string,
	url: string,
	content: string,
}