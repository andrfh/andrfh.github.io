import './EducationCard.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CButton, CCard, CCardBody, CCardImage, CModal, CModalBody, CCarousel, CCarouselItem, CImage  } from '@coreui/react'
import { useState } from 'react'

const EducationCard = ({course}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="education" data-aos="fade-down" data-aos-duration="1000" onClick={()=>{setIsOpen(true)}}>
            <span  onClick={()=>{setIsOpen(true)}}>
                    <div className="education_center">
                      <h4>{course.photo}</h4>
                      <div className="education_texts">
                        <h5>{course.title}</h5>
                        <p>{course.description}</p>
                      </div>
                    </div>
                    <span className={course.status.class}>{course.status.text}</span>
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
                    
                </CModalBody>
 
            </CModal>
        </div>

    )
}

export default EducationCard