import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<motion.button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
				[styles.none]: appearance == 'none',
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
			</span>}
		</motion.button>
	);
};