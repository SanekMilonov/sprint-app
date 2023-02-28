import { useRouter } from 'next/router';
import cn from 'classnames';
import { GetStaticProps } from 'next';
import { withLayout } from '../../layout/Layout';
import styles from '../../styles/portfolio.module.scss';
import axios from 'axios';
import { menuSidebar, pageposting, portfoliopage } from '../../interfaces/home.interface';
import { useEffect, useLayoutEffect, useState } from 'react';
import { CardPortfolio } from '../../components/CardPortfolio/CardPortfolio';
import { SidebarMenu } from '../../components/SidebarMenu/SidebarMenu';
import Head from 'next/head';
import { Heider_portfolio } from '../../components/Heider_portfolio/Heider_portfolio';
import Link from 'next/link';
import StickyBox from 'react-sticky-box';
import { Error404 } from '../404';

function JobsPage({ portfolio, cms, servec, page }: PagePortfolioProps): JSX.Element {
	if (portfolio.post_title == "Ошибка") {
		return (
			<Error404 />);
	} else {
		const spisok = portfolio.post;
		const img = portfolio.img_site;
		const title = portfolio.name;
		const text = portfolio.text;
		const price = portfolio.price;
		const id = portfolio.term_id;
		const slig = portfolio.slug;
		const max = Number(portfolio.max_num_pages);
		let items = [];
		if (max === 1 || max === null) {
			items.push(
				<></>
			);
		} else {
			let active = Number(page);
			let maxpage = portfolio.max_num_pages;
			for (let number = 1; number <= maxpage; number++) {
				let url = '/my_servec/' + slig + '/?page=' + number;
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
		}
		return (
			<>
				<Head>
					<title>{title} - Sprint Site</title>
					<meta name="description" content={text} />
				</Head>
				<Heider_portfolio key={id} alt={title} img={img} title={title} content={text} cena={price} />
				<section className={cn((styles.portfolio_section), 'bg0 bg1')}>
					<div className={cn(styles.portfolio_page)}>
						<div className={cn(styles.portfolio_items)}>
							{spisok.map((post) => (
								<CardPortfolio
									key={post.ID}
									content={post.post_content}
									img={post.img}
									title={post.post_title}
									url={post.url}
									color={post.color}
								/>
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
}

export default withLayout(JobsPage);

export async function getServerSideProps(context) {
	let page = context.query.page as string;
	const name = context.query.name as string;
	if (!page) {
		page = "1";
	}
	const { data: portfolio } = await axios.get<portfoliopage>("https://sprint-site.ru/wp-json/wpcustomusers/v2/my_servec/" + name, {
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
			page,
		}
	};
};

interface PagePortfolioProps extends Record<string, unknown> {
	portfolio: portfoliopage;
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