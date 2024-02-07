import s from './projects.module.scss';
import smartbite from '../../../assets/images/smartBite.png';
import hite from '../../../assets/images/hite.png';
import portfolio from '../../../assets/images/portfolio.png';
import SectionTitle from "../../../app/components/common/sectionTitle/sectionTitle";
import Project from "./project/project";
import ProjectLeft from "./project-left/projectLeft";


const projects = [
    {
        subtitle: 'Приложение по доставке здоровой еды',
        title: 'Smart bite',
        desc: 'Главная задача - разработать дизайн концепт\n' +
            'приложения для быстрого и удобного заказа питательных блюд. ',
        imageUrl: smartbite,
        behanceUrl:'https://www.behance.net/gallery/190179981/Healthy-food-delivery-app',
        figmaUrl:'https://www.figma.com/file/5XWluNzH4QjP8Ff34n9Erf/Healthy-food-delivery-app?type=design&node-id=11%3A22&mode=design&t=SHWEg0T2bnCDe8sb-1'
    },
    {
        subtitle: 'Портфолио - лендинг',
        title: 'Web-developer',
        desc: 'Основная цель - эффективно демонстрировать навыки, опыт и индивидуальность веб-разработчика потенциальным работодателям или клиентам. Портфолио служит визуальным и интерактивным представлением работ разработчика, демонстрируя его мастерство в веб-разработке.',
        imageUrl: portfolio,
        behanceUrl: 'https://www.behance.net/gallery/190686441/Personal-Portfolio-Website',
        figmaUrl:'https://www.figma.com/file/DpIxRcJLvFaLrlPqwV0pCz/Web-Developer-Portfolio?type=design&node-id=0%3A1&mode=design&t=54vl49T44Yv24kg3-1'
    },
    {
        subtitle: 'Интернет - магазин',
        title: 'Hite',
        desc: 'Создать концепт сайта для интернет-магазина дизайнерских предметов интерьера в минималистическом стиле.',
        imageUrl: hite,
        behanceUrl:'https://www.behance.net/gallery/190320987/Online-Furniture-Store',
        figmaUrl:'https://www.figma.com/file/qW0dBBhE0XG0lGn7Vwpnep/Online-Furniture-Store-Design?type=design&node-id=93%3A1896&mode=design&t=YSk2M1bxMbBznwvz-1'
    },

]
const Projects = () => {
    return (
            <div className={s.container} id={'projects'}>
                <div className={s.projects}>
                    <SectionTitle>Projects</SectionTitle>
                   <Project
                       subtitle={projects[0].subtitle}
                       title={projects[0].title}
                       desc={projects[0].desc}
                       imageUrl={projects[0].imageUrl}
                       behanceUrl={projects[0].behanceUrl}
                       figmaUrl={projects[0].figmaUrl}
                   />
                    <ProjectLeft
                        subtitle={projects[2].subtitle}
                        title={projects[2].title}
                        desc={projects[2].desc}
                        imageUrl={projects[2].imageUrl}
                        behanceUrl={projects[2].behanceUrl}
                        figmaUrl={projects[2].figmaUrl}
                    />
                   <Project
                       subtitle={projects[1].subtitle}
                       title={projects[1].title}
                       desc={projects[1].desc}
                       imageUrl={projects[1].imageUrl}
                       behanceUrl={projects[1].behanceUrl}
                       figmaUrl={projects[1].figmaUrl}
                   />
                </div>
            </div>
    );
};

export default Projects;
