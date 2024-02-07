import s from './header.module.scss';
import {Icon} from "../../app/components/common/icon/Icon";
import cn from "classnames";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

const navItems = [
    {
        icon: 'home',
        href: 'home'
    },
    {
        icon: 'person',
        href: 'about'
    },
    {
        icon: 'projects',
        href: 'projects'
    },

    {
        icon: 'skills',
        href: 'skills'
    }]
const Header = () => {
    return (
        <header className={s.header}>
            <nav>
                {
                    navItems.map(item =>
                        <Link
                            className={s.link}
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            to={item.href}>
                            <Icon iconId={item.icon} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                        </Link>
                    )}
            </nav>
        </header>
    );
};

export default Header;
