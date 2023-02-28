import { NavikProps } from './Navik.props';
import styles from './Navik.module.scss';
import cn from 'classnames';
import { ProgressBar } from 'react-bootstrap';
import Image from 'next/image';
import Sass from './sass-1.svg';
import Photoshop from './ps.svg';
import Illustar from './ai.svg';
import Html from './html.svg';
import Bitrix from './1c_bitrix_logo.svg.png';
import Angular from './angular_full_color_logo.svg.png';
import Cscart from './cs-cart-e1651150902132.png';
import Drupal from './logo-drupal-e1651150843917.png';
import Javascript from './javascript-logo.png';
import Laraveli from './gh.png';
import Modx from './modx-logo-e1651150810445.png';
import Opencart from './opencart-e1651150778269.png';
import Php from './php_png23.png';
import Pretsho from './1200px-prestashop.svg-e1651150744304.png';
import ReactI from './react-icon.svg.png';
import Vue from './1200px-vue.js_logo_2.png';
import Wordpress from './wordpress-logotype-wmark.png';

export const Navik = ({ title, years, procent }: NavikProps): JSX.Element => {

	return (
		<div className={styles.set__item}>
			<div className={styles.set__icon}>
				{setDropsNavikIMG(title, years)}
			</div>
			<div className={styles.set__detail}>
				<div className={styles.set__meta}>
					<div className={styles.set__name}>
						<h4 className={styles.small_title}>{title}</h4>
						{setDropsNavikYears(years)}
					</div>
					<p className={styles.set__high}>{procent}
						<span className="skill-set__ratio">%</span>
					</p>
				</div>
				<ProgressBar animated now={procent} />
			</div>
		</div>
	);
};

function setDropsNavikYears(years) {
	if (years != 0 || years != false) {
		return (<p className={styles.set__year}>{years} year</p>);
	}
}

function setDropsNavikIMG(title, years) {
	/*<img src="/wp-content/uploads/2022/04/react-icon.svg.png" alt="React"></img>*/
	switch (title) {
		case '1C Bitrix':
			return <Image src={Bitrix} width={60} height={60} alt={title} />;
		case 'Angular':
			return <Image src={Angular} width={60} height={60} alt={title} />;
		case 'CS-Cart':
			return <Image src={Cscart} width={60} height={60} alt={title} />;
		case 'Drupal':
			return <Image src={Drupal} width={60} height={60} alt={title} />;
		case 'HTML/CSS':
			return <Html />;
		case 'Illustrator':
			return <Illustar />;
		case 'JS':
			return <Image src={Javascript} width={60} height={60} alt={title} />;
		case 'Laravel':
			return <Image src={Laraveli} width={60} height={60} alt={title} />;
		case 'MODX':
			return <Image src={Modx} width={60} height={60} alt={title} />;
		case 'Opencart':
			return <Image src={Opencart} width={60} height={60} alt={title} />;
		case 'PHP':
			return <Image src={Php} width={60} height={60} alt={title} />;
		case 'Photoshop':
			return <Photoshop />;
		case 'PrestaShop':
			return <Image src={Pretsho} width={60} height={60} alt={title} />;
		case 'React':
			return <Image src={ReactI} width={60} height={60} alt={title} />;
		case 'Sass':
			return <Sass />;
		case 'VUE':
			return <Image src={Vue} width={60} height={60} alt={title} />;
		case 'Wordpress':
			return <Image src={Wordpress} width={60} height={60} alt={title} />;
		default:
			return <></>;
	}
}