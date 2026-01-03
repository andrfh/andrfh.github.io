import react from '../pictures/react.svg'
import html from '../pictures/html.svg'
import js from '../pictures/js.svg'
import bootstrap from '../pictures/bootstrap.svg'

import jsCertificate from '../pictures/certificates/jsCertificate.pdf'
import htmlCertificate from '../pictures/certificates/htmlCertificate.pdf'
import bootstrapCertificate from '../pictures/certificates/bootstrapCertificate.pdf'

const courses = [{
    photo: react,
    title: 'React и Redux Toolkit',
    description: 'Курс по современному React от PurpleSchool ',
    status: {
      class: 'processed',
      text: 'В процессе'
    },
    certificate: ''
  },
  {
    photo: js,
    title: 'Javascript/jQuery',
    description: 'Интерактивный мини-курс Javascript и jQuery от FructCode.com',
    status: {
      class: 'finished',
      text: 'Завершен'
    },
    certificate: jsCertificate
  },
  {
    photo: html,
    title: 'HTML/CSS',
    description: 'Cоздания сайтов HTML и CSS  от FructCode.com',
    status: {
      class: 'finished',
      text: 'Завершен'
    },
    certificate: htmlCertificate
  },
  {
    photo: bootstrap,
    title: 'Bootstrap 3',
    description: 'Интерактивный курс по верстке сайтов Bootstrap от FructCode.com',
    status: {
      class: 'finished',
      text: 'Завершен'
    },
    certificate: bootstrapCertificate
  }]

export default courses