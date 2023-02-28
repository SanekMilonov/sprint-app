import Head from 'next/head';
import styles from '../styles/portfolio.module.scss';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { blockPortfolio, menuSidebar, pageposting } from '../interfaces/home.interface';
import cn from 'classnames';
import { CardPortfolio } from '../components/CardPortfolio/CardPortfolio';
import { Heider_portfolio } from '../components/Heider_portfolio/Heider_portfolio';
import { SidebarMenu } from '../components/SidebarMenu/SidebarMenu';
import StickyBox from "react-sticky-box";
import Link from 'next/link';

function Portfolio({ portfolio, cms, servec, page }: aboutsProps): JSX.Element {
	let items = [];
	if (portfolio.max_num_pages != 1 || portfolio.max_num_pages != null) {
		let active = Number(page);
		let maxpage = portfolio.max_num_pages;
		for (let number = 1; number <= maxpage; number++) {
			let url = '/portfolio/?page=' + number;
			if (number === active) {
				items.push(
					<span key={number}
						className={styles.active}
					>
						{number}
					</span>
				);
			} else {
				items.push(
					<Link key={number} href={url}>{number}</Link>
				);
			}
		}
		items = [obvers(items)];
	} else {
		items.push(
			<></>
		);
	}

	return (
		<>
			<Head>
				<title>Портфолио - Sprint Site</title>
				<meta name="description" content="Здесь собрана небольшая часть сайтов над которыми я работал. " />
			</Head>
			<Heider_portfolio key={0} alt={'Портфолио'} img={'/../public/macbook.jpg'} title={'Портфолио'} content={'Здесь собрана небольшая часть сайтов над которыми я работал. К сожалению большую часть сайтов я потерял при переустановке виндус. Еще часть сайтов прекратили свое существование или изменили дизайн. Некоторые мне удалось восстановить из архивов, но не все.'} cena={0} />
			<section className={cn((styles.portfolio_section), 'bg0 bg1')}>
				<div className={cn(styles.portfolio_page)}>
					<div className={cn(styles.portfolio_items)}>
						{portfolio.post.map((post) => (
							<CardPortfolio key={post.ID} content={post.post_content} img={post.img} title={post.post_title} url={post.url} color={post.color} />
						))}
						{items}
					</div>
					<div className={cn(styles.portfolio_seadbar)}>
						<StickyBox offsetTop={20} offsetBottom={20}>
							<SidebarMenu data={servec} title={'Услуги'} />
							<SidebarMenu data={cms} title={'CMS'} />
						</StickyBox>
					</div>
				</div>
			</section>
		</>
	);
}

export default withLayout(Portfolio);

export async function getServerSideProps(context) {
	let page = context.query.page as string;
	if (!page) {
		page = "1";
	}
	let allBlogs = [];
	const { data: portfolio } = await axios.get<blockPortfolio>(process.env.API_PUBLIC_DOMINS + '/portfolio/?page=' + { page },
		{
			params: {
				page: page
			}
		});
	const { data: servec } = await axios.get<menuSidebar>(process.env.API_PUBLIC_DOMINS + '/my_servec/');
	const { data: cms } = await axios.get<menuSidebar>(process.env.API_PUBLIC_DOMINS + '/cms_serves/');


	return {
		props: {
			portfolio,
			servec,
			cms,
			page
		}
	};
};

interface aboutsProps extends Record<string, unknown> {
	portfolio: blockPortfolio;
	servec: menuSidebar;
	cms: menuSidebar;
	page: pageposting;
}

function obvers(items) {
	return (
		<ul key={100} className={cn(styles.pagination)}>
			{items}
		</ul>
	)
}