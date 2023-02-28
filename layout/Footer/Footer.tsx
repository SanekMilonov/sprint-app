import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import cn from 'classnames';
import SiteIkon from '../../public/iconksite.svg';
import { Menu } from '../../components/Menu/Menu';
import { format } from 'date-fns';
import Link from 'next/link';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	const menuarr = [
		{
			"id": "1",
			"title": "Главная",
			"path": "/",
		}, {
			"id": "2",
			"title": "Обо мне",
			"path": "/about/",
		}, {
			"id": "3",
			"title": "Услуги",
			"path": "/uslugi/",
		}, {
			"id": "4",
			"title": "Портфолио",
			"path": "/portfolio/",
		}]
	const menuauslug = [
		{
			"id": "1",
			"title": "Landing page",
			"path": "/my_servec/landing_page/",
		}, {
			"id": "2",
			"title": "Простой сайт",
			"path": "/my_servec/simple_site/",
		}, {
			"id": "3",
			"title": "Интернет-магазин",
			"path": "/my_servec/online_store/",
		}, {
			"id": "4",
			"title": "Администрирование",
			"path": "/my_servec/administratirovanie/",
		}, {
			"id": "5",
			"title": "Доработка сайта и прочее",
			"path": "/my_servec/development/",
		}]
	const menukontakt = [
		{
			"id": "1",
			"title": "Whatsapp",
			"path": "https://wa.me/https://wa.me/+79603823933?&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%83+%D0%BC%D0%B5%D0%BD%D1%8F+%D0%B5%D1%81%D1%82%D1%8C+%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81",
		}, {
			"id": "2",
			"title": "Telegramm",
			"path": "https://t.me/alexsix82",
		}, {
			"id": "3",
			"title": "VK",
			"path": "https://vk.com/id137306194",
		}, {
			"id": "4",
			"title": "E-Mail",
			"path": "https://sprint-site.ru/malto:sanesk@bk.ru",
		}]
	return (
		<div className={styles.foots}>
			<footer className={cn(className, styles.footer)} >
				<div className="content">
					<div className="row">
						<div className="col-lg-3 col-md-12 fot-logo">
							<Link href="/" className={styles.custom_logo_link} rel="home" aria-current="page">
								<SiteIkon />
							</Link>
						</div>
						<div className={cn(className, styles.fot_menu, 'col-lg-3 col-md-12')}>
							<Menu typ={'bottom'} data={menuarr} title={'Меню'} />
						</div>
						<div className={cn(className, styles.fot_menu, 'col-lg-3 col-md-12')}>
							<Menu typ={'bottom'} data={menuauslug} title={'Услуги'} />
						</div>
						<div className={cn(className, styles.fot_menu, 'col-lg-3 col-md-12')}>
							<Menu typ={'bottom_kont'} data={menukontakt} title={'Контакты'} />
						</div>
					</div>
				</div>
			</footer>
			<footer className={styles.emd_bottom}>
				<div className="content">
					<div className="row">
						<div className="col-md-12">
							<p><span>©</span> Copyright 2022 - {format(new Date(), 'yyyy')} <Link href="/">Sprint-Site.ru</Link></p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};