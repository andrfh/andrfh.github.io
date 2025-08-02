import { motion } from "motion/react"
import HeaderNav from './components/UI/HeaderNav/HeaderNav'
import MainBtn from './components/UI/MainBtn/MainBtn'
import me from './pictures/me2.jpg'
import './App.css'
import { useState } from "react"

function App() {
  const [active, setActive] = useState('home')

  return (
    <div>
      {/* Фон с сеткой */}
      <div className="grid">
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
            <h3>Портфолио</h3>
            <nav className="header_navbar">
              <HeaderNav href="#home" text='Главная' isActive={active == 'home' ? true : ''}/>
              <HeaderNav href="#about" text='Обо мне' isActive={active == 'about' ? true : ''}/>
              <HeaderNav href="#education" text='Образование' isActive={active == 'edu' ? true : ''}/>
              <HeaderNav href="#portfolio" text='Портфолио' isActive={active == 'portfolio' ? true : ''}/>
              <HeaderNav href="#contacts" text='Контакты' isActive={active == 'contacts' ? true : ''}/>
            </nav>
          </div>
        </div>
      </header>
      <motion.section className='main' id="home" onViewportEnter={(entry) => {console.log('home'); setActive('home')}} viewport={{ amount: 0.7 }}>
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
    
    </div>
  )
}

export default App
