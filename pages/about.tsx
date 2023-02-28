import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/abouts.module.scss';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { blockPortfolio, blockstati } from '../interfaces/home.interface';
import { Htag } from '../components/Htag/Htag';
import cn from 'classnames';
import { PortfolioBlock } from '../components/PortfolioBlock/PortfolioBlock';
import avatar from '../public/avatar.jpg';
import { Navik } from '../components/Navik/Navik';

function Abouts({ portfolio, stati }: aboutsProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Здравствуйте! Меня зовут Александр - Sprint Site</title>
				<meta name="description" content="Со школьных лет увлекаюсь созданием сайтов. Начинал с Joomla потом изучил PHP/CSS сделал пару сайтов PHP+HTML+MySQL." />
			</Head>
			<section className={cn(styles.about_page, 'bg0 bg4')}>
				<div className={cn(styles.container, 'container')}>
					<div className={cn('row my_row')}>
						<div className={cn(styles.about_img, styles.leftimagepicture, "col col-6 col_right")}>
							<Image
								src={avatar}
								width={320}
								height={320}
								alt={'Аватар'} />
						</div>
						<div className={cn(styles.container, styles.right_about, 'col col-6')}>
							<Htag tag={'zagolovokh2'} className={''}>КТО Я?</Htag>
							<p>
								Здравствуйте! Меня зовут Александр. Со школьных лет увлекаюсь программированием. Начинал с AS2 потом перешел на AS3. Потом начал изучать JS написал свое первое расширение для Google. Потом перешел на разработку игр использовал unity и C++. Написал пару игр для Android, после этого увлекся созданием сайтов. Начинал с Joomla потом изучил PHP/CSS сделал пару сайтов PHP+HTML+MySQL. Перешел на wordpress, за время работы над сайтами перепробовал множество и других CMS. Получил сертификат по битриксу. В данный момент изучаю библиотеку React и Фреймворки VUE и ANGULAR.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.block_stati}>
				<div className={styles.stati}>
					<Htag tag={'zagolovokh2'} className={''}>Мои навыки</Htag>
					{stati.map((post) => (
						<article key={post.ID} >
							{setDropsNavik(post.proc, post.title, post.year)}
						</article>
					))}
				</div>
			</section>
			<section className={cn(styles.container, styles.containerabout, styles.blockportfolio, 'bg0 bg1')}>
				<Htag tag={'zagolovokh2'} className={''}>Портфолио</Htag>
				<div className='container'>
					<div className={styles.prof3block}>
						{portfolio.map((post) => (
							<article key={post.ID} >
								<PortfolioBlock post_content={post.post_content} post_title={post.post_title} post_excerpt={post.post_excerpt} post_name={post.post_name} img={post.img}></PortfolioBlock>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default withLayout(Abouts);

function setDropsNavik(proc, title, years) {
	if (proc != 0 || proc != false) {
		const nump = Number(proc);
		const numy = Number(years);
		return <Navik procent={nump} title={title} years={numy} />;
	} else {
		return <></>;
	}
}

export const getServerSideProps: GetServerSideProps<aboutsProps> = async () => {
	let allBlogs = [];
	const { data: portfolio } = await axios.get<blockPortfolio>(process.env.API_PUBLIC_DOMINS + '/potfolio3/');
	const { data: stati } = await axios.get<blockPortfolio>(process.env.API_PUBLIC_DOMINS + '/stati/');

	return {
		props: {
			portfolio,
			stati
		}
	};
};

interface aboutsProps extends Record<string, unknown> {
	portfolio: blockPortfolio;
	stati: blockstati;
}