import {motion } from 'framer-motion'
import HeaderNav from './components/UI/HeaderNav/HeaderNav'
import MainBtn from './components/UI/MainBtn/MainBtn'
import Title from "./components/UI/Title/Title"
import ProjectCard from './components/UI/ProjectCard/ProjectCard'
import me from './pictures/me2.jpg'
import kip from './pictures/kip.jpg'
import reactPicture from './pictures/react.jpg'
import './App.css'
import { useState } from "react"
import StarsBg from './components/StarsBg/StarsBg'

function App() {
  const [active, setActive] = useState('home')

  const courses = [{
    photo: '👨‍💻',
    title: 'React.js',
    description: 'Разработка веб-страниц при помощи React',
    status: {
      class: 'finished',
      text: 'Завершен'
    }
  },
  {
    photo: '👨‍💻',
    title: 'React.js',
    description: 'Разработка веб-страниц при помощи React',
    status: {
      class: 'finished',
      text: 'Завершен'
    }
  },
  {
    photo: '👨‍💻',
    title: 'React.js',
    description: 'Разработка веб-страниц при помощи React',
    status: {
      class: 'processed',
      text: 'В процессе'
    }
  },
  {
    photo: '👨‍💻',
    title: 'React.js',
    description: 'Разработка веб-страниц при помощи React',
    status: {
      class: 'processed',
      text: 'В процессе'
    }
  }]

    const projects = [{
        photo: reactPicture,
        title: 'To-do лист',
        description: 'A modern e-commerce platform built with React and styled-components. Features include product filtering, shopping cart, and responsive design.',
        tags: ['React', 'Css', 'TypeScript'],
        full_description: 'A comprehensive weather dashboard that provides detailed meteorological information with stunning visualizations. This project demonstrates proficiency in API integration, data visualization, and creating intuitive user interfaces. The application fetches real-time weather data and presents it through interactive charts and graphs, making complex weather patterns easy to understand.',
        key_feauteres: [
          'Real-time weather data from multiple reliable weather APIs',
          'Interactive charts showing temperature trends, humidity, and pressure',
          'Geolocation-based automatic weather detection',
          '7-day detailed weather forecast with hourly breakdowns',
          'Customizable dashboard with drag-and-drop widget arrangement'
        ],
        solutions: [
          'Handling multiple API endpoints and managing data consistency',
          'Creating responsive charts that work well on mobile devices',
          'Implementing efficient caching to minimize API calls and improve performance',
          'Designing an intuitive interface that presents complex data clearly'
        ],
        gallery: [reactPicture, kip, reactPicture]
      },
      {
        photo: kip,
        title: 'Калькулятор',
        description: 'Что тут еще добавить? ',
        tags: ['Vue.js', 'Nust.js', 'JavaScript'],
        full_description: 'A comprehensive weather dashboard that provides detailed meteorological information with stunning visualizations. This project demonstrates proficiency in API integration, data visualization, and creating intuitive user interfaces. The application fetches real-time weather data and presents it through interactive charts and graphs, making complex weather patterns easy to understand.',
        key_feauteres: [
          'Real-time weather data from multiple reliable weather APIs',
          'Interactive charts showing temperature trends, humidity, and pressure',
          'Geolocation-based automatic weather detection',
          '7-day detailed weather forecast with hourly breakdowns',
          'Customizable dashboard with drag-and-drop widget arrangement'
        ],
        solutions: [
          'Handling multiple API endpoints and managing data consistency',
          'Creating responsive charts that work well on mobile devices',
          'Implementing efficient caching to minimize API calls and improve performance',
          'Designing an intuitive interface that presents complex data clearly'
        ],
        gallery: [reactPicture, kip, reactPicture]
      },
      {
        photo: reactPicture,
        title: 'Diary of Jane',
        description: 'Something`s getting in the way. Something`s just about to brake',
        tags: ['React', 'HTML', 'JavaScript'],
        full_description: 'A comprehensive weather dashboard that provides detailed meteorological information with stunning visualizations. This project demonstrates proficiency in API integration, data visualization, and creating intuitive user interfaces. The application fetches real-time weather data and presents it through interactive charts and graphs, making complex weather patterns easy to understand.',
        key_feauteres: [
          'Real-time weather data from multiple reliable weather APIs',
          'Interactive charts showing temperature trends, humidity, and pressure',
          'Geolocation-based automatic weather detection',
          '7-day detailed weather forecast with hourly breakdowns',
          'Customizable dashboard with drag-and-drop widget arrangement'
        ],
        solutions: [
          'Handling multiple API endpoints and managing data consistency',
          'Creating responsive charts that work well on mobile devices',
          'Implementing efficient caching to minimize API calls and improve performance',
          'Designing an intuitive interface that presents complex data clearly'
        ],
        gallery: [reactPicture, kip, reactPicture]
      },
      {
        photo: kip,
        title: 'Task Manager',
        description: 'Приложение для добавления задач',
        tags: ['Tailwind', 'Vue', 'TypeScript'],
        full_description: 'A comprehensive weather dashboard that provides detailed meteorological information with stunning visualizations. This project demonstrates proficiency in API integration, data visualization, and creating intuitive user interfaces. The application fetches real-time weather data and presents it through interactive charts and graphs, making complex weather patterns easy to understand.',
        key_feauteres: [
          'Real-time weather data from multiple reliable weather APIs',
          'Interactive charts showing temperature trends, humidity, and pressure',
          'Geolocation-based automatic weather detection',
          '7-day detailed weather forecast with hourly breakdowns',
          'Customizable dashboard with drag-and-drop widget arrangement'
        ],
        solutions: [
          'Handling multiple API endpoints and managing data consistency',
          'Creating responsive charts that work well on mobile devices',
          'Implementing efficient caching to minimize API calls and improve performance',
          'Designing an intuitive interface that presents complex data clearly'
        ],
        gallery: [reactPicture, kip, reactPicture]
      },
      {
        photo: reactPicture,
        title: 'Task Manager',
        description: 'Приложение для добавления задач',
        tags: ['Tailwind', 'Vue', 'TypeScript'],
        full_description: 'A comprehensive weather dashboard that provides detailed meteorological information with stunning visualizations. This project demonstrates proficiency in API integration, data visualization, and creating intuitive user interfaces. The application fetches real-time weather data and presents it through interactive charts and graphs, making complex weather patterns easy to understand.',
        key_feauteres: [
          'Real-time weather data from multiple reliable weather APIs',
          'Interactive charts showing temperature trends, humidity, and pressure',
          'Geolocation-based automatic weather detection',
          '7-day detailed weather forecast with hourly breakdowns',
          'Customizable dashboard with drag-and-drop widget arrangement'
        ],
        solutions: [
          'Handling multiple API endpoints and managing data consistency',
          'Creating responsive charts that work well on mobile devices',
          'Implementing efficient caching to minimize API calls and improve performance',
          'Designing an intuitive interface that presents complex data clearly'
        ],
        gallery: [reactPicture, kip, reactPicture]
      },
      {
        photo: kip,
        title: 'Task Manager',
        description: 'Приложение для добавления задач',
        tags: ['Tailwind', 'Vue', 'TypeScript'],
        full_description: 'A comprehensive weather dashboard that provides detailed meteorological information with stunning visualizations. This project demonstrates proficiency in API integration, data visualization, and creating intuitive user interfaces. The application fetches real-time weather data and presents it through interactive charts and graphs, making complex weather patterns easy to understand.',
        key_feauteres: [
          'Real-time weather data from multiple reliable weather APIs',
          'Interactive charts showing temperature trends, humidity, and pressure',
          'Geolocation-based automatic weather detection',
          '7-day detailed weather forecast with hourly breakdowns',
          'Customizable dashboard with drag-and-drop widget arrangement'
        ],
        solutions: [
          'Handling multiple API endpoints and managing data consistency',
          'Creating responsive charts that work well on mobile devices',
          'Implementing efficient caching to minimize API calls and improve performance',
          'Designing an intuitive interface that presents complex data clearly'
        ],
        gallery: [reactPicture, kip, reactPicture]
      }]

 

  return (
    <div>
      {/* Фон с сеткой и звездами*/}
      <div className="grid">
        <StarsBg numStars={80} />
        <div className="grid-background">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeW  idth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      {/* хэдэр */}

      <header className="header">
        <div className="container">
          <div className="header_wrapper">
            <h4>Мое портфолио</h4>
            <nav className="header_navbar">
              <HeaderNav href="#home" text='Главная' isActive={active == 'home' ? true : ''}/>
              <HeaderNav href="#about" text='Обо мне' isActive={active == 'about' ? true : ''}/>
              <HeaderNav href="#education" text='Образование' isActive={active == 'edu' ? true : ''}/>
              {/* <HeaderNav href="#expirience" text='Опыт' isActive={active == 'portfolio' ? true : ''}/> */}
              <HeaderNav href="#portfolio" text='Портфолио' isActive={active == 'portfolio' ? true : ''}/>
              <HeaderNav href="#contacts" text='Контакты' isActive={active == 'contacts' ? true : ''}/>
            </nav>
          </div>
        </div>
      </header>
      <motion.section className='section' id="home" onViewportEnter={() => {setActive('home')}} viewport={{ amount: 0.7 }}>
        <div className="container">
          <div className="main_wrapper">
            <div className="main_me">
              <h1>Солонович Андрей</h1>
              <h4>Frontend Разработчик</h4>
              <p>Создаю красивые и удобные в использовании интерфейсы</p>
              <div className="main_me-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Git</span>
              </div>
              <div className="main_me-btns">
                <MainBtn text='Мои проекты' style='primary'/>
                <MainBtn text="Связаться" style='ghost'/>
              </div>
            </div>
            <div className="main_photo">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </motion.section>

       <motion.section className='section' id="about" onViewportEnter={() => {setActive('about')}} viewport={{ amount: 0.7 }}>
        <div className="container">
          <div className="about_wrapper">
            <Title text="Обо мне"/>
            <div className="about">
              <h3>👨‍💻</h3>
              <p>Привет! Мне 19 лет, и я начинающий фронтенд-разработчик с большой страстью к созданию красивых и функциональных пользовательских интерфейсов. Работаю с HTML, CSS и JavaScript, активно изучаю React и современные технологии веб-разработки. Каждый день стремлюсь развиваться и изучать что-то новое в мире IT.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className='section' id="education" onViewportEnter={() => {setActive('edu')}} viewport={{ amount: 0.7 }}>
        <div className="container">
          <div className="education_wrapper">
            <Title text="Образование"/>
            <div className="education_main">
              <h4>👨‍💻</h4>
                <div className="education_texts">
                  <h5>Колледж информатики и программирования Финансового университета при Правительстве Российской Федерации</h5>
                  <p>Обеспечение информационной безопасности автоматизированных систем</p>
                  <p className="education_years">2022-2026</p>
                </div>
            </div>
            <div className="education_courses">
              {courses.map(item => {
                return (
                  <div className="education">
                    <div className="education_center">
                      <h4>{item.photo}</h4>
                      <div className="education_texts">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <span className={item.status.class}>{item.status.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className='section' id="portfolio" onViewportEnter={() => {setActive('portfolio')}} viewport={{ amount: 0.7 }}>
        <div className="container">
          <div className="portfolio_wrapper">
            <Title text="Портфолио"/>
            <div className="portfolio">
              {projects.map(item => {
                return (
                  <ProjectCard project={item}/>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>
    
    
    </div>
  )
}

export default App
