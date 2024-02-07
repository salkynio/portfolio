import s from './menu.module.scss'
import MenuItem from "./menuItem/menuItem";
const navItems=[
    {
        number:'01',
        title:'обо мне',
        href: 'about'

    },
    {
        number:'02',
        title:'проекты',
        href: 'projects'
    },
    {
        number:'03',
        title:'навыки',
        href: 'skills'
    },
    {
        number:'04',
        title:'развитие',
        href: 'skills'
    },
]

const Menu = () => {
    return (
            <div className={s.container} id={'about'}>
                <div className={s.menu}>
                    {navItems.map((item)=>
                        <MenuItem  key={item.number} href={item.href} number={item.number} title={item.title.toUpperCase()}/>)}
                </div>
            </div>
    );
};

export default Menu;
