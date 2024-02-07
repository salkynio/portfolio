import s from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.container}>
            <div className={s.footer}>
                <div className={s.content}>
                        <span>
                            Спасибо, что заглянули и
                        </span>
                    <span>
                            хорошего вам дня !
                        </span>
                    <div className={s.email}>
                        omursalkyn@gmail.com
                    </div>
                </div>
            </div>
            <div className={s.copy}>
                <p className={s.p}>
                    © 2024 Salkyn Omurbekova, All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
