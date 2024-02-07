import s from './menuItem.module.scss';

type MenuItemProps={
    number:string,
    title:string
}
const MenuItem = ({number,title}:MenuItemProps) => {
    return (
        <div className={s.menuItem}>
            <span className={s.number}>{number}</span>
            <span className={s.title}>{title}</span>
        </div>
    );
};

export default MenuItem;
