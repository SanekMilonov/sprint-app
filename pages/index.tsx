import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { withLayout } from '../layout/Layout';
import { Slider } from '../components/Slider/Slider';
import inteflov from '../public/inetforallnew.png';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { blockAbout, blockPortfolio, blockPrice } from '../interfaces/home.interface';
import { Htag } from '../components/Htag/Htag';
import Link from 'next/link';
import cn from 'classnames';
import { Button } from '../components/Button/Button';
import { PriceCard } from '../components/PriceCard/PriceCard';
import { PortfolioBlock } from '../components/PortfolioBlock/PortfolioBlock';
import { Messagemy } from '../components/Messagemy/Messagemy';

function Home({ abouts, price, portfolio }: aboutsProps): JSX.Element {
	const but1 = <Link href={abouts.about_link}>Обо мне</Link>;
	const but2 = <Link href={abouts.about_link2}>Портфолио</Link>;
	return (
		<>
			<Head>
				<title>Создание, разработка и доработка сайтов - Sprint Site</title>
				<meta name="description" content="Создание и доработка сайтов, по приемлемым ценам. Больше 10 лет веб-разработке" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>

				<Slider />
				<section className={cn(styles.content, styles.blockabout, 'bg1 row')}>
					<div data-aos="fade-right" data-aos-mirror="false" data-aos-once="false" className={cn(styles.div1, 'col-xl-6 col-lg-12')}>
						<Image
							src={inteflov}
							width={300}
							height={300}
							alt={'Создание, разработка и доработка сайтов'}
						/>
					</div>
					<div data-aos="fade-left" data-aos-mirror="false" data-aos-once="false" className={cn(styles.div2, 'col-xl-6 col-lg-12')}>
						<Htag tag={'h3'} className={styles.div3}>{abouts.about_meta}</Htag>
						<Htag tag={'h2'} className={styles.div4}>{abouts.about_h4}</Htag>
						<p className={cn(styles.div5)}>{abouts.about_text}</p>
						<div className={cn(styles.div6)}>
							<Button appearance={'none'}>{but1}</Button>
							<Button appearance={'none'}>{but2}</Button>
						</div>
					</div>
				</section>
				<section className={cn(styles.container, styles.price, 'bg0 bg2')}>
					<Htag className='' tag={'zagolovokh2'} >Цены</Htag>
					<div className={styles.pricecontent}>
						{price.map((post) => (
							<PriceCard key={post.ID} blok1_name={post.blok1_name} color={post.blok1_color} href={post.blok1_href} text={post.blok1_text} price={post.blok1_price}></PriceCard>
						))}
					</div>
				</section>
				<section className={cn(styles.container, styles.containerabout, 'bg0 bg1')}>
					<Htag data-aos="fade-up" tag={'zagolovokh2'} className={'aos-init'}>Портфолио</Htag>
					<div className='container'>
						<div className={styles.prof3block}>
							{portfolio.map((post) => (
								<article data-aos="fade-down" key={post.ID} className="aos-init" >
									<PortfolioBlock post_content={post.post_content} post_title={post.post_title} post_excerpt={post.post_excerpt} post_name={post.post_name} img={post.img}></PortfolioBlock>
								</article>
							))}
						</div>
					</div>
				</section>
				<section className={cn(styles.container, 'bg0 bg3')}>
					<Messagemy>{ }</Messagemy>
				</section>
			</div>
		</>
	);
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps<aboutsProps> = async () => {
	let allBlogs = [];
	const { data: abouts } = await axios.get<blockAbout>(process.env.API_PUBLIC_DOMINS + '/homeab/');
	const { data: price } = await axios.get<blockPrice>(process.env.API_PUBLIC_DOMINS + '/price/');
	const { data: portfolio } = await axios.get<blockPortfolio>(process.env.API_PUBLIC_DOMINS + '/potfolio3/');
	//const jobsi = await res.json();
	//const { data: jobsy } = await axios.get<JobsItems[]>(process.env.API_PUBLIC_DOMINS + 'jobs/');
	//allBlogs.push(jobsy);


	return {
		props: {
			abouts,
			price,
			portfolio
		}
	};
};

interface aboutsProps extends Record<string, unknown> {
	abouts: blockAbout;
	price: blockPrice;
	portfolio: blockPortfolio;
}