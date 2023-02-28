import cn from 'classnames';
import Image from 'next/image';
import { CardPortfolioProps } from './CardPortfolio.props';
import styles from './CardPortfolio.module.scss';
import Link from 'next/link';

export const CardPortfolio = ({ img, title, url, content, color }: CardPortfolioProps): JSX.Element => {
	const cvet = color;
	const titl = 'title_' + color;
	const bar = 'postcard_bar_' + color;

	return (
		<>
			<article className={cn(styles.postcard, cvet)} >
				<Link className={cn(styles.postcard_img_link)} href={url} >
					<Image
						src={img}
						width={500}
						height={250}
						alt={title}
					/>
				</Link>
				<Link className={cn(styles.postcard_link, titl)} href={url} >
					<div className={cn(styles.postcard_text)} >
						<h2 className={cn(styles.postcard_title)} >
							{title}
						</h2>
						<div className={cn(styles.postcard_bar, bar)} ></div>
						<div className={cn(styles.postcard_preview_txt)} >{content}</div>
					</div>
				</Link>
			</article >
		</>
	);
};