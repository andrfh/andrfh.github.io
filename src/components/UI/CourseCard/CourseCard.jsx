import './CourseCard.css'
import github from '../../../pictures/github.svg'
import link from '../../../pictures/link.svg'
import arrow from '../../../pictures/arrow.svg'
import close from '../../../pictures/close.svg'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CButton, CCard, CCardBody, CCardImage, CModal, CModalBody, CCarousel, CCarouselItem, CImage  } from '@coreui/react'
import { useState } from 'react'
import kip from '../../../pictures/kip.png'

const CourseCard = ({course, isMain}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        {isMain ? 
            <div className="education_main" data-aos="fade-down" data-aos-duration="1500">
              <img src={kip} alt='кипфин'/>
                <div className="education_texts">
                  <h5>Колледж информатики и программирования Финансового университета при Правительстве Российской Федерации</h5>
                  <p>10.02.05 Обеспечение информационной безопасности автоматизированных систем</p>
                  <p className="education_years">2022 - 2026</p>
                </div>
            </div>
            :
            <div className="education" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{setIsOpen(course.certificate ? true : false)}}>
                <div className="education_center">
                <h4><img src={course.photo} /></h4>
                <div className="education_texts">
                    <h5>{course.title}</h5>
                    <p>{course.description}</p>
                </div>
                </div>
                <span className={course.status.class}>{course.status.text}</span>
            </div>
        }
            <CModal
                alignment="center"
                visible={isOpen}
                size='xl'
                onClose={()=>{setIsOpen(false)}}
                aria-labelledby="VerticallyCenteredScrollableExample2"
            >
                <CModalBody className='project_modal'>
                    <embed
                        src={course?.certificate}
                        type="application/pdf"
                        frameBorder="0"
                        scrolling="auto"
                        height="100%"
                        width="100%"
                    ></embed>
                    
                </CModalBody>
 
            </CModal>
        </>
    )
}

export default CourseCard