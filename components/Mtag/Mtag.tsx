import { HtagProps } from './Mtag.props';
import styles from './Mtag.module.css';
import cn from 'classnames';

export const Mtag = ({ data, href, name }: HtagProps): JSX.Element => {
	return <div className={cn(styles.mh_meta)}></div>;
};