import { PortfolioBlockProps } from './PortfolioBlock.props';
import styles from './PortfolioBlock.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { useState } from 'react';

export const PortfolioBlock = ({ post_content, post_title, post_excerpt, post_name, img }: PortfolioBlockProps): JSX.Element => {
	const url = '/portfolio/' + post_name;
	const [hase, setHase] = useState<boolean>(false);
	const handleMouseEnter = e => {
		e.currentTarget.classList.add("activizin");
		setHase(true);
	}

	const handleMouseLeave = e => {
		e.currentTarget.classList.remove("activizin");
		setHase(false);
	}
	return (
		<div className={cn(styles.modal_item, {
			[styles.activizin]: hase == true,
			[styles.diactiv]: hase == false
		})}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<Link href={url}>
				<div className={styles.item_top}>
					<Image src={img} alt={post_title} width={150} height={260}
					></Image>
					<p className={styles.category}>{post_title}</p>
				</div>
				<div className={styles.item_bottom}>
					<div className={styles.item_title}>
						<h3>{post_content}</h3>
					</div>
				</div>
			</Link>
			<div className={styles.linia}></div>
			<div className={styles.cub}></div>
		</div>
	);
};