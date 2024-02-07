import s from './button.module.scss';
import arrow from '../../../assets/images/arrow.png';
type ButtonPropsType={
    name:string
}
const Button = ({name}:ButtonPropsType) => {
    return (
        <>
            <button className={s.btn}>
                {name}
                <img src={arrow}/>
            </button>
        </>

    );
};

export default Button;
