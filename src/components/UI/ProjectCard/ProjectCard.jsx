import './ProjectCard.css'
import github from '../../../pictures/github.svg'
import link from '../../../pictures/link.svg'
import arrow from '../../../pictures/arrow.svg'
import close from '../../../pictures/close.svg'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CButton, CCard, CCardBody, CCardImage, CModal, CModalBody, CCarousel, CCarouselItem, CImage  } from '@coreui/react'
import { useState } from 'react'

const ProjectCard = ({project}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <CCard className='project' >
            <span  onClick={()=>{setIsOpen(true)}}>
                <CCardImage orientation="top" src={project.photo}/>
                <CCardBody className='project_body'>
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    <div className="project_tags">
                        {project.tags.map(item => {
                            return <span className='tag'>{item}</span>
                        })}
                    </div>
                    <div className="projects_info">
                        <div className="projects_info-wrapper">
                            <div className="projects_info-item">
                                <img src={github} alt="" />
                                <p>Code</p>
                            </div>
                            <div className="projects_info-item">
                                <img src={link} alt="" />
                                <p>Demo</p>
                            </div>
                        </div>
                        <img className='project_info-go' src={arrow} alt="" />
                    </div>
                </CCardBody>
            </span>
            <CModal
                alignment="center"
                scrollable
                visible={isOpen}
                size='lg'
                onClose={()=>{setIsOpen(false)}}
                aria-labelledby="VerticallyCenteredScrollableExample2"
            >
                <CModalBody className='project_modal'>
                    <div className="modal_header">
                        <h4>{project.title}</h4>
                        <img src={close} alt="" onClick={()=>{setIsOpen(false)}} />
                    </div>
                    <hr />
                    <p>{project.description}</p>
                    <img className="modal_photo" src={project.photo} alt="" />
                    <h5>Используемые технологии:</h5>
                    <div className="project_tags">
                        {project.tags.map(item => {
                            return <span className='tag'>{item}</span>
                        })}
                    </div>
                    <h5>О проекте:</h5>
                    <p>{project.full_description}</p>
                    <h5>Ключевые функции:</h5>
                    <ul className='feauteres'>
                        {project.key_feauteres.map(item => {
                            return <li>{item}</li>
                        })}
                    </ul>
                    <h5>Проблемы и решения</h5>
                    <ul className='solutions'>
                        {project.solutions.map(item => {
                            return <li>{item}</li>
                        })}
                    </ul>

                    <h5>Галлерея:</h5>
                    <CCarousel controls>
                        {project.gallery.map(item => {
                            return (
                            <CCarouselItem>
                                <CImage className="d-block w-100" src={item} alt="slide 1" />
                            </CCarouselItem>
                            )
                        })}
                        
                    </CCarousel>
                    <div className="project_modal-btns">
                        <button className="gh"> <img src={github} alt="" />Посмотреть код</button>
                        <button className="demo"><img src={link} alt="" />Демо-версия</button>
                    </div>
                </CModalBody>
 
            </CModal>
        </CCard>
    )
}

export default ProjectCard