
import journalHome from '../pictures/journal/home.png'
import journalPost from '../pictures/journal/post.png'
import journalValid from '../pictures/journal/valid.png'

import socialHome from '../pictures/social-blog/home.png'
import socialLogin from '../pictures/social-blog/home.png'

import cvHome from '../pictures/cv/home.png'
import cvEdu from '../pictures/cv/edu.png'
import cvContacts from '../pictures/cv/contacts.png'

import rateshome from '../pictures/rates/home.jpg'
import ratesPage from '../pictures/rates/rate.jpg'
import ratesPage2 from '../pictures/rates/rate2.jpg'

const projects = [
      {
          photo: rateshome,
          title: 'Синхронизация валют',
          description: 'Сайт для просмотра курсов иностранных валют к Рублю из ЦБ РФ',
          tags: ['recharts', 'PostgreSQL', 'TanStack Query', 'Express.js', 'React'],
          full_description: 'Fullstack приложение, которое вручную или по расписанию каждый день в 18:00 запрашивает данные из ЦБ РФ и обновляет в собственной БД. На сайте отображаются последние сохраненные курсы валют. \n Внимание! На публичном сайте данные автоматически не обновляются в связи с ограничениями по тарифу на хостинге (не работает cron).',
          key_feauteres: [
            'Полноценное API с crud-операциями для каждой сущности',
            'CRON синхронизации с ЦБ',
            'Интеграция API на сайт',
            'График цены recharts на странице курса '
          ],
          solutions: [
            'Данные не запрашиваются каждый раз напрямую в ЦБ, а копируются в БД для использования на сайте',
            'Курсы запрашиваются автоматически в 18 часов каждого дня, т.к. в это время, в рабочие дни, ЦБ обновляет цены ',
            'Запросы на backend написаны напрямую через fetch',
            'На сайте присутствует удобный график, написанный при помощи recharts',
            'Сайт адаптивен под все устройства, а также имеет лоудеры'
          ],
          gallery: [rateshome, ratesPage, ratesPage2],
          source: {
            github:"https://github.com/andrfh/CourseSync",
            demo: "https://ratesexchange.vercel.app/"
          }
        },
        {
        photo: journalHome,
        title: 'Journal-list',
        description: 'Учебный проект сайта с заметками.',
        tags: ['React', 'HTML/CSS', 'JavaScript', 'Vite'],
        full_description: 'Проект изначально существовал в качестве практики на курсе по React. Сайт представляет из себя страницу, на которой можно добавить заметку, очистить данные из формы и сохранить. После между ними можно будет переключаться и создавать новые. Все данные заметок хранятся в LocalStorage, серверного хранения для данного приложения нет.',
        key_feauteres: [
          'Добавление записей через форму',
          'Валидация формы, чтобы не была добавлена пустая запись',
          'Кнопка очистки формы, если нужно все сбросить и написать заново',
          'Возможность переключаться между записями. Данные будут подставляться в форму'
        ],
        solutions: [
          'Каждый элемент интерфейса анимируется при наведении',
          'Данные хранятся в LocalStorage, чтобы записи не сбрасывались после обновлении страницы',
          'Для сохранения данных в формах, а также состояния валидности используется хук UseReducer',
          'Выбор тегов осуществляется с помощью всплывающего окна с готовыми значениями. Также есть поиск при написании тега'
        ],
        gallery: [journalHome, journalPost, journalValid],
        source: {
          github:"https://github.com/andrfh/journail-list",
          demo: ""
        }
      },
      {
        photo: socialHome,
        title: 'Сайт с постами',
        description: 'Сайт, где пользователи могут добавлять свои посты',
        tags: ['React.js', 'JavaScript', 'Express.js', 'MongoDB', 'JWT'],
        full_description: 'Клиент-серверное приложение с возможностью добавлять, редактировать и удалять посты, приправленное разграничением доступа и авторизацией через JWT. В данном проекте я впервые писал бекенд логику, обучаясь инструментам во время разработки. На данный момент приложение не завершено и продолжает наполняться функциями.',
        key_feauteres: [
          'Авторизация и регистрация пользователей',
          'Возможностью добавить, обновить или удалить пост',
          'Возможность смотреть чужие профили и редактировать свой',
          'Пост можно лайкнуть и оставить комментарии',
          'Внутри серверного кода имеется разграничение доступа',
          'Код включает в себя проработку разных сценариев и удобных отображений тех или иных ошибок'
        ],
        solutions: [
          'Json Web Token для авторизации',
          'CRUD операции с проработкой сценариев и разных кодов ошибок',
          'API имеет свою документацию'
        ],
        gallery: [socialHome, socialLogin],
        source: {
          github:"https://github.com/andrfh/social-blog",
          demo: ""
        }
      },
      {
        photo: cvHome,
        title: 'Личный сайт-резюме',
        description: 'Одностраничный сайт для демонстрации навыков и опыта, а также контактов',
        tags: ['React', 'HTML', 'JavaScript'],
        full_description: 'Сайт, на котором вы сейчас находитесь. Был разработан для демонстрации навыков и портфолио, как замена обычному резюме',
        key_feauteres: [
          'Красивый дизайн (из-за звездочек на фоне)',
          'Понятная и простая структура контента',
          'Навигация по сайту',
          'Анимации различных элементов'
        ],
        solutions: [
          'Были использованы компоненты модальных окон и навигационной панели из библиотеки CoreUi',
          'Релизован компонент фоновых звёзд, генерирующий звезды случайной высоты, ширины и положения на странице, в заданном кол-ве ',
          'Для анимации использовалась библиотека motion и aos-animate',
          'Сайт оптимизирован для поиска в поисковиках',
          'Код оптимизирован и сайт загружается быстро'
        ],
        gallery: [cvHome, cvEdu, cvContacts],
        source: {
          github:"https://github.com/andrfh/andrfh.github.io",
          demo: "https://andrfh.github.io"
        }
      }
      
    ]

export default projects