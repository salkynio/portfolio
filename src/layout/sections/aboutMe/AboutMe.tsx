import s from './aboutMe.module.scss';
const AboutMe = () => {
    return (
            <div className={s.container}>
                <div className={s.aboutMe}>
                    <span className={s.title}>
                        ОБО МНЕ
                    </span>
                    <p className={s.text}>
                        UI/UX дизайнер ,made in Bishkek, Kyrgyzstan.
                        <div>Создаю интуитивные и привлекательные интерфейсы.</div>
                        <div>Моя цель — улучшать пользовательский опыт, делая продукты функциональными и стильными🚀.
                        </div>
                    </p>
                </div>

            </div>

    );
};

export default AboutMe;
