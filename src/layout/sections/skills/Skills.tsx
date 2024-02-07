import s from './skills.module.scss';
import SectionTitle from "../../../app/components/common/sectionTitle/sectionTitle";

const hardSkills = [
    'Исследования', 'Анализ', 'Проектирование логики интерфейса ', 'Работа в Figma',
    'Передача макетов в разработку', 'Гайдлайны операционок'];
const softSkills = [
    'Эмпатия',
    'Коммуникация',
    'Критическое мышление',
    'Уверенность в себе',
    'Lifelong learning',
    'Критика ',
]
const interests = [
    'Изучаю статьи на Medium, VC.ru, Habr',
    'С любопытством читаю почтовые рассылки кейс-стадис от Growth.Design',
    'Книжные фавориты: ‘Don’t make me think’ Steve Krug, «Дизайн привычных вещей » Дональд Норман',
    'Слежу за tg-каналами дизайнеров',
    'Смотрю дизайнеров на YouTube,фаворит ютуб-канал Алексея Бычкова',
]
const Skills = () => {
    return (
            <div className={s.container} id={'skills'}>
                <SectionTitle>Skills</SectionTitle>
                <div className={s.skills}>
                    <div className={s.skillsList}>
                        <div className={s.title}>
                            Hard skills
                        </div>
                        <div className={s.content}>
                            {hardSkills.map((skill) => <span className={s.span} key={skill}>{skill}</span>)}
                        </div>
                    </div>
                    <div className={s.skillsList}>
                        <div className={s.title}>
                            Soft skills
                        </div>
                        <div className={s.content}>
                            {softSkills.map((skill) => <span key={skill}>{skill}</span>)}
                        </div>
                    </div>
                </div>
                <SectionTitle>Interests</SectionTitle>
                <div className={s.interests}>
                    <div className={s.interestsList}>
                        <div className={s.interestTitle}>
                            Развитие
                        </div>
                        <div className={s.content}>
                            {interests.map((skill) => <span className={s.span} key={skill}>{skill}</span>)}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Skills;
