import s from './projectLeft.module.scss'
import arrowleft from '../../../../assets/images/arrow-left.png'
import {NavLink} from "react-router-dom";

type ProjectPropsType = {
    subtitle: string,
    title: string,
    desc: string,
    imageUrl: string,
    behanceUrl: string,
    figmaUrl: string
}

const ProjectLeft = ({subtitle, title, desc, imageUrl,behanceUrl,figmaUrl}: ProjectPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.project}>
                <div className={s.imageBlock}>
                    <img
                        src={imageUrl}
                        width={560}
                        height={625}
                    />
                </div>
                <div className={s.content}>
                    <p className={s.subtitle}>{subtitle}</p>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.desc}>{desc}</p>
                    <NavLink className={s.btn} to={behanceUrl}>
                        <img src={arrowleft}/>
                        Behance

                    </NavLink>
                    <NavLink className={s.btn} to={figmaUrl}>
                        <img src={arrowleft}/>
                        Figma
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectLeft;
