import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/uslugi.module.scss';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { blockPortfolio, blockstati } from '../interfaces/home.interface';
import { Htag } from '../components/Htag/Htag';
import cn from 'classnames';
import { Accordion } from 'react-bootstrap';
import { Navik } from '../components/Navik/Navik';
import Inteflov from '../public/inetforallnew.png';
import Link from 'next/link';

function Uslugi({ portfolio, stati }: aboutsProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Услуги - Sprint Site</title>
				<meta name="description" content="Услуги, цены, описание и часто задаваемы вопросы. По созданию сайтов и их доработке" />
			</Head>
			<section className={cn(styles.uslugi_page, 'bg0 bg3')}>
				<Htag tag={'zagolovokh2'} className={''}>Услуги</Htag>


				<div className={cn(styles.uslugi_container, 'container')} >
					<div className="row">
						<div className={cn(styles.uslugi_img, 'col')}>
							<Image
								src={Inteflov}
								width={300}
								height={300}
								alt={"Inteflov"}
							/>
						</div>
						<div className="col">
							<div className="row">
								<div className="col-sm-6">
									<div className={styles.card}>
										<Link href="/my_servec/landing_page/" className={styles.card_body}>
											<h5 className={styles.card_title}>Landing page</h5>
											<p className={styles.card_text}>Простой и быстрый сайт. Состоящий из одной страницы. Подходит для небольших компаний, чтоб рассказать о себе.</p>
										</Link>
									</div>
								</div>
								<div className="col-sm-6">
									<div className={styles.card}>
										<Link href="/my_servec/simple_site" className={styles.card_body}>
											<h5 className={styles.card_title}>Простой сайт</h5>
											<p className={styles.card_text}>Не большой легкий сайт. Как тот, га которым вы находитесь</p>
										</Link>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<div className={styles.card}>
										<Link href="/my_servec/online_store" className={styles.card_body}>
											<h5 className={styles.card_title}>Интернет магазин</h5>
											<p className={styles.card_text}>Сайт для продажи ваших товаров и услуг</p>
										</Link>
									</div>
								</div>
								<div className="col-sm-6">
									<div className={styles.card}>
										<Link href="/my_servec/administratirovanie" className={styles.card_body}>
											<h5 className={styles.card_title}>Администрирование</h5>
											<p className={styles.card_text}>Доработка и поддержка сайта на постоянной основе.Исправление багов и ускорение сайта</p>
										</Link>
									</div>
								</div>
								<div className="col">
									<div className={styles.card}>
										<Link href="/my_servec/development/" className={styles.card_body}>
											<h5 className={styles.card_title}>Прочее</h5>
											<p className={styles.card_text}>Сюда входит доработка сайта, заполнение карточек товаров на вашем сайте.На озон и др.</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={cn(styles.uslugi_info, 'bg0 bg1')}>
				<div className="container">
					<Htag tag={'zagolovokh2'} className={''}>Что нужно знать перед тем как написать мне</Htag>
					<div className={cn(styles.spisok)}>
						<ul className={cn(styles.ulznat)}>
							<li >Я программист, а не дизайнер.(как можно видеть по моему сайту.Который я делал сам).По этому при оброщение ко мне вам следует обзавестись макетом сайта. И лучше на Figme. Если у вас нет макета вы можете посмотреть где его можно найти в следующем шаблоне</li>
							<li >Мне нужно ТЗ, в котором будет подробно расписан функционал сайта. Старайтесь все описать по подробнее. Где и что должно меняться, при наведение/скролле. Должны ли данные меняться в админке или они статичные и прочее</li>
							<li >Работаю при предоплате, бывают исключения</li>
						</ul>
					</div>
				</div>
			</section>
			<section className={cn(styles.uslugi_fqu, 'bg0 bg1')}>
				<Htag tag={'zagolovokh2'} className={''}>Часто задоваемые вопросы</Htag>
				<div className={cn(styles.spisok_accardion, "container")} >
					<Accordion defaultActiveKey="0" flush alwaysOpen={false}>
						<Accordion.Item eventKey="0" >
							<Accordion.Header>Зачем нужна предоплата</Accordion.Header>
							<Accordion.Body>
								<p>В начале своей работе на фрилансе я брал плату только по окончанию работы. Но нашлись люди кторые либо пропадали,либо отказывались платить. И становиться жаль за потраченное время, так что теперь я работаю только по предоплате.</p>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Если у вас нет шаблона</Accordion.Header>
							<Accordion.Body>
								{'Вы можете заказать его на фрилан биржахНайти в поисковике примеры сайтов, старайтесь не брать сайт полность, а частями. пример:"Хочу меню как на этом сайте (адресс сайта), а блок "обо мне" как на этом (адресс сайта) и т.д.'}<Link href="https://themeforest.net/category/all">Можете посмотреть готовые шаблоный сайтов.</Link> И по премеру с верху выбрать сайты по частям.						</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Условия предоставления услуг</Accordion.Header>
							<Accordion.Body>
								<ul >
									<li>Исполнитель обязуеться выполнить свою работу по ТЗ</li>
									<li>Заказчик может 3 раза вносить изменения после утверждения ТЗ.</li>
									<li>Стороны могут в любой момент отказаться друг от друга.Если работа была не доделана по ТЗ.Тогда Испонитель должен передать всю работу что успел выполнить заказчику.Заказчик должен оплатить часть работы от 30%-50% </li>
									<li>Исполнитель не несет ответственности за то что размещаеться на сайте</li>
									<li>Исполнитель отказываеться от всех прав на интелектульную собственность клиента</li>
									<li>{"Огронечения по должности 'Администратор'. 1-2 крупные задачи в месяц, и 10-15 постов в день"}</li>
									<li>Исполнитель не несет ни какой финансовой отвественности перед заказчиком</li>
									<li>Исполнитель не несет ответственность за поломку сайта третями лицами (Работа хостинга, взлом, ошибка другого программиста)</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</section>
		</>
	);
}

export default withLayout(Uslugi);

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