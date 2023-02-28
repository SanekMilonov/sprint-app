import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slid from './1cb960c13c8b6b5fc4f069debe732d27.jpg';
import styles from './Slider.module.scss';
import axios from 'axios';
import './Control.module.css';


export const Slider = (): JSX.Element => {
	const [appState, setAppState] = useState<any>();
	const fetchFootballers = async () => {
		await axios.get("https://sprint-site.ru/wp-json/wpcustomusers/v2/slider/")
			.then((res) => {
				setAppState(res.data);
			})
	}

	useEffect(() => {
		fetchFootballers()
	}, [])


	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	if (!appState) { return <p>Ошибка в слайдах!.</p> } else {
		return (
			<Carousel activeIndex={index} onSelect={handleSelect} className={styles.carusel_content}>
				{appState.map((postSlide) => (
					<Carousel.Item key={postSlide.ID} className={styles.item}>
						<Image
							className={styles.img}
							src={Slid}
							fill={true}
							alt={postSlide.post_title}
						/>
						<Carousel.Caption className={styles.caption}>
							<h2 className={styles.h3}>{postSlide.post_title}</h2>
							<p className={styles.p}>{postSlide.post_content}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		);
	}
};