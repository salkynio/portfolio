import s from './header.module.scss';
import {Icon} from "../../app/components/common/icon/Icon";
import cn from "classnames";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

const navItems = [
    {
        title:'Главное',
        icon: 'home',
        href: 'home'
    },
    {
        title:'Обо мне',
        icon: 'person',
        href: 'about'
    },
    {
        title:'Проекты',
        icon: 'projects',
        href: 'projects'
    },

    {
        title:'Навыки',
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
                            <div className={s.menuItem}>

                                <Icon iconId={item.icon} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                                {item.title}
                            </div>

                        </Link>
                    )}
            </nav>
        </header>
    );
};

export default Header;
