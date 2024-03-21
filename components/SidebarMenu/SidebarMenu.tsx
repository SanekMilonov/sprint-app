import { SidebarMenuProps } from './SidebarMenu.props';
import styles from './SidebarMenu.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const SidebarMenu = ({ data, title }: SidebarMenuProps): JSX.Element => {
	const router = useRouter();
	const thispath = router.asPath;
	const name = router.query.name as string;

	return (
		<div className={cn(styles.widget_title)}>
			<h3>{title}</h3>
			<ul className={cn(styles.widget_list)}>
				{data.menus.map((post) => (
					<li key={post.term_id} className={cn(styles.widget_items, name === post.slug ? styles.active : null)}>
						<Link href={post.url} className={cn(styles.widget_silka)}>{post.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
