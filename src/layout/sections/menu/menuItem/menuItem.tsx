import s from './menuItem.module.scss';
import {Link} from "react-scroll";

type MenuItemProps={
    number:string,
    title:string,
    href:string
}
const MenuItem = ({number,title,href}:MenuItemProps) => {
    return (
        <div className={s.menuItem}>
            <span className={s.number}>{number}</span>

            <Link className={s.title}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  to={href}>
                {title}</Link>
        </div>
    );
};

export default MenuItem;
