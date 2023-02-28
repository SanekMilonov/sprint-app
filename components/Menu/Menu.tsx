import { MenutagProps } from './Menu.props';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import HomeIkon from './home-solid.svg';
import TGIkon from './paper-plane-regular.svg';
import VKIkon from './vk.svg';
import PhoneIkon from './phone-alt-solid.svg';
import EmailIkon from './envelope-solid.svg';
import MenulIkon from './menuikon.svg';
import styles from './Menu.module.scss';
import cn from 'classnames';
import { useState } from 'react';


export const Menu = ({ typ, data, title }): JSX.Element => {
	const router = useRouter();
	const thispath = '/' + router.pathname + '/';
	var urs = router.pathname as string;

	if (urs === null || urs == "" || urs == undefined) {
		urs = thispath;
	} else {
		if (urs == "/my_servec/[name]" || urs == "/cms_serves/[name]" || urs == "/portfolio/[name]") {
			urs = "/portfolio";
		}
	}
	const menuarr = [
		{
			"id": "1",
			"title": "Home",
			"path": "",
			"vloje": "0",
			"dmenu": null,
		},
		{
			"id": "2",
			"title": "Обо мне",
			"path": "/about",
			"vloje": "0",
			"dmenu": null
		},
		{
			"id": "3",
			"title": "Услуги",
			"path": "/uslugi",
			"vloje": "0",
			"dmenu": null
		},
		{
			"id": "4",
			"title": "Портфолио",
			"path": "/portfolio",
			"vloje": "0",
			"dmenu": null
		}
	]
	const menuarrsoc = [{
		"id": "5",
		"title": "watsap",
		"path": "https://wa.me/+79603823933?&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%83+%D0%BC%D0%B5%D0%BD%D1%8F+%D0%B5%D1%81%D1%82%D1%8C+%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81",
		"vloje": "0",
		"dmenu": null
	}, {
		"id": "6",
		"title": "tg",
		"path": "https://t.me/alexsix82",
		"vloje": "0",
		"dmenu": null
	}, {
		"id": "7",
		"title": "vk",
		"path": "https://vk.com/id137306194",
		"vloje": "0",
		"dmenu": null
	}, {
		"id": "8",
		"title": "email",
		"path": "malto:sanesk@bk.ru",
		"vloje": "0",
		"dmenu": null
	}]
	const { pathname } = useRouter();
	const [hase, setHase] = useState<boolean>(false);
	function funcClich(p) {
		if (p == true) {
			setHase(false);
		} else {
			setHase(true);
		}
	}
	switch (typ) {
		case 'top':
			return (<nav className={styles.navbar}>
				<div className={styles.container_fluid}>
					<button className={styles.navbar_toggler} onClick={() => funcClich(hase)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon">
							<MenulIkon />
						</span>
					</button>
					<div className={cn(styles.navbar_collapse, {
						[styles.activ]: hase == true,
						[styles.diactiv]: hase == false
					})} id="navbarSupportedContent">
						<ul className={cn(styles.navbar_nav, 'me-auto mb-2 mb-lg-0')}>
							<ul id="top-nav-ul" className={cn(styles.menu_navigator)}>
								{menuarr.map(
									({ id, title, path, vloje, dmenu }) => (
										<li key={id} className={urs === path ? styles.active : null}>
											{setDrops(dmenu, title, vloje, id, path, pathname)}
										</li>
									)
								)}
							</ul>
							<ul id="top-nav-ul-soc" className={cn(styles.menu_navigator, styles.menu_navigator_soc)}>
								{menuarrsoc.map(
									({ id, title, path, vloje, dmenu }) => (
										<li key={id}>
											{setDropsSoc(dmenu, title, vloje, id, path, pathname)}
										</li>
									)
								)}
							</ul>
						</ul>
					</div>
				</div>
			</nav >);
		case 'bottom':
			return (
				<>
					<h3>{title}</h3>
					<div className={styles.menu_menju_container}>
						<ul className={styles.menu}>
							{data.map(
								({ id, title, path }) => (
									<li key={id}><Link href={path}>{title}</Link></li>
								)
							)}
						</ul>
					</div>
				</>
			);

		case 'bottom_kont':
			return (
				<>
					<h3>{title}</h3>
					<div className={styles.menu_menju_container}>
						<ul className={styles.menu}>
							{data.map(
								({ id, title, path }) => (
									<li key={id} className={styles.socfoter}>{setDropsSocFot(title, id, path)}</li>
								)
							)}
						</ul>
					</div>
				</>
			);
		default:
			return <></>;
	}
};

function setDrops(dmenu, title, vloje, id, path, url) {
	if (title == 'Home') {
		return (<Link key={1 + 100} className={styles.homeikon} href={'..'} ><HomeIkon /></Link>);
	}
	return (<Link key={id + 100} href={path}>{title}</Link>);
}

function setDropsSocFot(title, id, path) {
	switch (title) {
		case 'Whatsapp':
			return <a key={id} className={styles.homeikon} href={path} ><PhoneIkon /><div className={styles.fottitle}>{title}</div></a>;
		case 'Telegramm':
			return <a key={id} className={styles.homeikon} href={path} ><TGIkon /><div className={styles.fottitle}>{title}</div></a>;
		case 'VK':
			return <a key={id} className={styles.homeikon} href={path} ><VKIkon /><div className={styles.fottitle}>{title}</div></a>;
		case 'E-Mail':
			return <a key={id} className={styles.homeikon} href={path} ><EmailIkon /><div className={styles.fottitle}>{title}</div></a>;
		default:
			return <></>;
	}
}

function setDropsSoc(dmenu, title, vloje, id, path, url) {
	const ur = url + "/";
	switch (title) {
		case 'watsap':
			return <Link key={id + 100} className={styles.homeikon} href={path} ><PhoneIkon /></Link>;
		case 'tg':
			return <Link key={id + 100} className={styles.homeikon} href={path} ><TGIkon /></Link>;
		case 'vk':
			return <Link key={id + 100} className={styles.homeikon} href={path} ><VKIkon /></Link>;
		case 'email':
			return <Link key={id + 100} className={styles.homeikon} href={path} ><EmailIkon /></Link>;
		default:
			return <></>;
	}
}