import s from './menu.module.scss'
import MenuItem from "./menuItem/menuItem";
const navItems=[
    {
        number:'01',
        title:'обо мне'
    },
    {
        number:'02',
        title:'проекты'
    },
    {
        number:'03',
        title:'навыки'
    },
    {
        number:'04',
        title:'развитие'
    },
]

const Menu = () => {
    return (
            <div className={s.container} id={'about'}>
                <div className={s.menu}>
                    {navItems.map((item)=>
                        <MenuItem key={item.number} number={item.number} title={item.title.toUpperCase()}/>)}
                </div>
            </div>
    );
};

export default Menu;
