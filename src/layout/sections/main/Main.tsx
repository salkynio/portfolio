import React from 'react';
import s from './main.module.scss';
import mainImg from '../../../assets/images/main.png'


const Main = () => {
    return (
            <div className={s.container} id={'home'}>
                <div className={s.main}>
                    <h1  className={s.lastName}> Omurbekova</h1>
                    <div className={s.info}>
                        <div className={s.contentInfo}>
                            <h2 className={s.name}>Salkyn</h2>
                            <span className={s.job}>UI/UX Designer</span>
                            <button className={s.btn}> Посмотреть проекты</button>
                        </div>
                        <div className={s.imageBlock}>
                            <img src={mainImg}
                                   width={520}
                                   height={560}
                                   alt={'mainImg'}
                                   draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Main;
