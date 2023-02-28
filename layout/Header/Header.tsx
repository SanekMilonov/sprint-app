import { HeaderProps } from './Header.props';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from '../../components/Menu/Menu';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<Menu typ={'top'} data={"f"} title={"an"} />
	);
};

