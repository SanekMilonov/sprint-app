import cn from 'classnames';
import Image from 'next/image';
import { Heider_portfolioProps } from './Heider_portfolio.props';
import styles from './Heider_portfolio.module.scss';
import parse from 'html-react-parser';

export const Heider_portfolio = ({ alt, img, title, content, cena }: Heider_portfolioProps): JSX.Element => {
	const contentsS = String(content);
	const contents = parse(contentsS);
	let arts = (<></>);
	if (cena == 0) {
		arts = (<></>);
	} else {
		arts = (<p>От {cena} Рублей</p>);
	}
	return (
		<>
			<section >
				<div className={cn(styles.bag)}>
					<Image
						src={img}
						width={1800}
						height={600}
						alt={alt}
					/>
				</div>
				<div className={cn(styles.nlock_arxiv)}>
					<h1>{title}</h1>
					{contents}

					<div className={cn(styles.cenia)}>
						{arts}
					</div>
				</div>
			</section>
		</>
	);
};