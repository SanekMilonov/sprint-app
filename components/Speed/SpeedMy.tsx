import cn from 'classnames';
import Image from 'next/image';
import { SpeedMyProps } from './SpeedMy.props';
import ProgressBar from 'react-customizable-progressbar'
import styles from './SpeedMy.module.scss';
import { Htag } from '../Htag/Htag';
import Link from 'next/link';
import { format } from 'date-fns';
import { useState, useRef, useEffect } from 'react';
import { GetServerSideProps } from 'next';

export const SpeedMy = ({ title, num, color }: SpeedMyProps): JSX.Element => {
	const [seconds, setSeconds] = useState(2);
	const [nums, setNums] = useState(0);
	const intervalRef = useRef<any>();

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setSeconds((sec) => sec - 1);
		}, 1000);
		return () => clearInterval(intervalRef.current);
	}, []);

	const cancelInterval = () => {
		if (seconds < 1) {
			setNums(num);
			clearInterval(intervalRef.current);
		}
	};

	cancelInterval();
	return (
		<div className="col col-md-6 speed">
			<h3>{title}</h3>
			<ProgressBar
				radius={100}
				progress={nums}
				initialAnimationDelay={2}
				strokeWidth={28}
				strokeColor="#ffce54"
				strokeLinecap="butt"
				trackStrokeWidth={14}
				trackStrokeLinecap="butt"
				cut={120}
				rotate={-210}
			>
				<div className="indicator">
					<div>{num}%</div>
				</div>
			</ProgressBar>
		</div>
	);
};