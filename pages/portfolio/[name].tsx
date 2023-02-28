import Head from 'next/head';
import styles from '../../styles/portfoliopage.module.scss';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { portfoliopage } from '../../interfaces/home.interface';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ProgressBar from 'react-customizable-progressbar';
import klava from '/public/klava.png';
import Zoom from "next-image-zoom";
import { Error404 } from '../404';



function PortfolioItems({ portfolio }: PagePortfolioProps): JSX.Element {
	if (portfolio.post_title == "Ошибка") {
		return (
			<Error404 />);
	} else {
		const description = portfolio.post_content;
		const title = portfolio.post_title;
		const cms = portfolio.cms;
		const servic = portfolio.servic;
		const img = portfolio.img_site;
		const izmenenie = portfolio.izmenenie;
		let izmendan = (<></>);
		if (!izmenenie) {
			izmendan = (<></>);

		} else {
			izmendan = (
				<section className={cn((styles.portfolio_section, styles.portfolio_izmenenie), 'bg0 bg3')}>
					<h2>Список изменений сайта</h2>
					<div className={cn((styles.timeline))}>
						{izmenenie.map((izmenenie) => (
							<div key={izmenenie.id} className={cn((styles.timeline_movement), 'row')}>
								{izmenenieText(izmenenie.id, izmenenie)}
							</div>
						))}
					</div>
				</section>);
		}
		const procmobdo = portfolio.do_mob;
		const procpkdo = portfolio.do_pk;
		const procmobposle = portfolio.posle_mob;
		const procpkposle = portfolio.posle_pk;
		return (
			<>
				<Head>
					<title>{title} - Sprint Site</title>
					<meta name="description" content={description} />
				</Head>
				<section className={cn((styles.portfolio_section), 'bg0 bg4')}>
					<div className={cn((styles.conter), 'container')}>
						<div className="row">
							<div className="col col-md-12">
								<h2>{title}</h2>
								<div>
									<p>{description}</p>
								</div>
								<div className="row" >
									<div className="col col-md-6 tax">
										<h3 className={cn((styles.speed_uslugi))}>CMS</h3>
										{cms.map((post) => (
											<Link key={post.term_id} href={"/cms_serves/" + post.slug} rel="tag">{post.name}</Link>
										))}
									</div>
									<div className="col col-md-6 tax">
										<h3 className={cn((styles.speed_uslugi))}>Услуги</h3>
										{servic.map((servic) => (
											<Link key={servic.term_id} href={"/my_servec/" + servic.slug} rel="tag">{servic.name}</Link>
										))}
									</div>
								</div>
								{speedOnMob(procmobdo, procmobposle)}
								{speedOnPK(procpkdo, procpkposle)}
							</div>
						</div>
					</div>
				</section>
				<section className={cn((styles.portfolio_section, styles.portfolio_site), 'bg0 bg1')}>
					<h2>Изображение сайта</h2>
					<p>*Некторые сайты прекратили свое существование или были полность изменены. Изображение взяты из архивов. и могут быть искажены</p>
					<div data-aos="zoom-in" className="new_nout aos-init aos-animate">
						<div className={cn((styles.nout_ekran))}>
							<Image
								src={img}
								alt={title}
								fill={true}
							/>
						</div>
						<div className={cn((styles.nout_bottom))}>
							<Image
								src={klava}
								alt={title}
								fill={true}
							/>
						</div>
					</div>
				</section>
				{izmendan}
			</>

		);
	}
}

export default withLayout(PortfolioItems);

export async function getServerSideProps(context) {
	const name = context.query.name as string;
	const { data: portfolio } = await axios.get<portfoliopage>("https://sprint-site.ru/wp-json/wpcustomusers/v2/portfolio/" + name);
	return {
		props: {
			portfolio
		}
	};
};

interface PagePortfolioProps extends Record<string, unknown> {
	portfolio: portfoliopage;
}

function izmenenieText(l, izmenenie) {
	if (l % 2 === 0) {
		return (<>
			<div className={cn(styles.timeline_badge)}></div>
			<div data-aos="fade-left" className={cn((styles.timeline_itemo), 'col-sm-6 timeline-item aos-init')} >
				<div className={cn((styles.timeline_left), 'row')}>
					<div className="col-sm-12">
						<span></span>
						<div className={cn((styles.timeline_item))}>
							<p className="title">{izmenenie.text_site_izmen}</p>
							{izmenimg(izmenenie.img_site_izmen, izmenenie.text_site_izmen)}
						</div>
					</div>
				</div>
			</div></>);
	} else {
		return (
			<>
				<div className={cn(styles.timeline_badge)}></div>
				<div data-aos="fade-right" className={cn((styles.timeline_itemo), 'col-sm-6 offset-sm-6 timeline-item aos-init')}>
					<div className={cn((styles.timeline_right), 'row')}></div>
					<div className="col-sm-12">
						<span></span>
						<div className={cn((styles.timeline_item))}>
							<p className="title">{izmenenie.text_site_izmen}</p>
							{izmenimg(izmenenie.img_site_izmen, izmenenie.text_site_izmen)}
						</div>
					</div>
				</div>
			</>);
	}
	setsetCount(l)
}

function setsetCount(p) {
	return p++;
}

function izmenimg(s, a) {
	if (s == false) {
		return <></>;
	} else {
		return (<div className="info">
			<Zoom src={s} alt={a} width={800} height={600} />
		</div>);
	}
}

function speedOnPK(procpkdo, procpkposle) {
	if (procpkdo == false || procpkdo == "") {
		return (<></>);
	} else {
		return (<><h2 className={cn((styles.speed_titel))}>Скорость на ПК</h2>
			<div className="row">
				<div className="col col-md-6 tax">
					<div className={cn((styles.speedZagolovok))}>
						<h3>ДО</h3>
					</div>
					<div className={cn((styles.speedItems))}>
						<ProgressBar
							radius={100}
							progress={procpkdo}
							cut={120}
							rotate={-210}
							initialAnimation
							initialAnimationDelay={2500}
							strokeWidth={28}
							strokeColor="#54d2ff"
							trackStrokeWidth={28}
						/>
					</div>
					<div className={cn((styles.indicator))}>
						<div>{procpkdo}%</div>
					</div>
				</div>
				<div className="col col-md-6 tax">
					<div className={cn((styles.speedZagolovok))}>
						<h3>ПОСЛЕ</h3>
					</div>
					<div className={cn((styles.speedItems))}>
						<ProgressBar
							radius={100}
							progress={procpkposle}
							cut={120}
							rotate={-210}
							initialAnimation
							initialAnimationDelay={2500}
							strokeWidth={28}
							strokeColor="#54d2ff"
							trackStrokeWidth={28}
						/>

					</div>
					<div className={cn((styles.indicator))}>
						<div>{procpkposle}%</div>
					</div>
				</div>
			</div></>);
	}
}

function speedOnMob(procmobdo, procmobposle) {
	if (procmobdo == false || procmobdo == "") {
		return (<></>);
	} else {
		return (<><h2 className={cn((styles.speed_titel))}>Скорость на мобильном</h2>
			<div className="row">
				<div className="col col-md-6 tax">
					<div className={cn((styles.speedZagolovok))}>
						<h3>ДО</h3>
					</div>
					<div className={cn((styles.speedItems))} >
						<ProgressBar
							radius={100}
							progress={procmobdo}
							cut={120}
							rotate={-210}
							initialAnimation
							initialAnimationDelay={2500}
							strokeWidth={28}
							strokeColor="#68ff54"
							trackStrokeWidth={28}
						/>
					</div>
					<div className={cn((styles.indicator))} >
						<div>{procmobdo}%</div>
					</div>
				</div>
				<div className="col col-md-6 tax">
					<div className={cn((styles.speedZagolovok))}>
						<h3>ПОСЛЕ</h3>
					</div>
					<div className={cn((styles.speedItems))}>
						<ProgressBar
							radius={100}
							progress={procmobposle}
							cut={120}
							rotate={-210}
							initialAnimation
							initialAnimationDelay={2500}
							strokeWidth={28}
							strokeColor="#68ff54"
							trackStrokeWidth={28}
						/>

					</div>
					<div className={cn((styles.indicator))}>
						<div>{procmobposle}%</div>
					</div>
				</div>
			</div></>);
	}
}