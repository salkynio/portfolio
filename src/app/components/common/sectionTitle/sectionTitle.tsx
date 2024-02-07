import s from './sectionTitle.module.scss';
import {FC} from "react";
import {ReactNode} from "react";


const SectionTitle:FC<{children:ReactNode|undefined}>  = ({children}) => {
    return (
        <h2 className={s.title}>
            {children}
        </h2>
    );
};

export default SectionTitle;
