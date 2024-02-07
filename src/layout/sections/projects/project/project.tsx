import s from './project.module.scss';
import arrow from '../../../../assets/images/arrow.png'
import {NavLink} from "react-router-dom";

type ProjectPropsType = {
    subtitle: string,
    title: string,
    desc: string,
    imageUrl:string,
    behanceUrl:string,
    figmaUrl:string
}

const Project = ({subtitle, title, desc,imageUrl,behanceUrl,figmaUrl}: ProjectPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.project}>
                <div className={s.content}>
                    <p className={s.subtitle}>{subtitle}</p>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.desc}>{desc}</p>
                    <NavLink className={s.btn} to={behanceUrl}>
                        Behance
                        <img src={arrow}/>
                    </NavLink>
                    <NavLink className={s.btn} to={figmaUrl}>
                         Figma
                        <img src={arrow}/>
                    </NavLink>
                </div>
                <div className={s.imageBlock}>
                    <img
                        src={imageUrl}
                        width={560}
                        height={625}
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
