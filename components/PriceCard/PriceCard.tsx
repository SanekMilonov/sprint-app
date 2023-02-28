import { PriceCardProps } from './PriceCard.props';
import styles from './PriceCard.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const PriceCard = ({ blok1_name, href, text, price, color }: PriceCardProps): JSX.Element => {
	const spacing = 24;
	return (
		<Link className={styles.flipc} href={href}>
			<div className={styles.flipper}>
				<div className={styles.front}>
					<div className={styles.overlay}>
						<div className={styles.inner}>
							<h2>{blok1_name}</h2>
						</div>
					</div>
				</div>
				<div className={styles.back} style={{ background: 'linear-gradient(115deg,' + color + ' 0%,#37b8ff 98.72611464968152%);' }}>
					<div className={styles.overlay}>
						<div className={styles.inner}>
							<p>{text}</p>
							<h3>От {price} ₽</h3>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};