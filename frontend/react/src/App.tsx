import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import me from './assets/img/me.jpg'
import { TypeAnimation } from 'react-type-animation';
import './App.css'

function App() {
  const [projects, setProjects] = useState(
    [
      {id:1, title: 'Shop', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/shop.jpg', cat:'wordpress', url:'https://shop.hacoupian.net/'},
      {id:2, title: 'Hacoupian', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/hacoupian.jpg', cat:'wordpress', url:'https://hacoupian.net/'},
      {id:3, title: 'Diacobin', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/diacobin.jpg', cat:'vue', url:'https://diacobin.com/'},
      {id:4, title: 'NovinMarketing', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/novin.jpg', cat:'wordpress', url:'https://novinmarketing.com/'},
      {id:5, title: 'Shopping Cart', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/cart.jpg', cat:'react', url:'https://shopping-cart-stores.netlify.app/'},
      {id:6, title: 'Expense Reactjs', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/expense.jpg', cat:'react', url:'https://expenses-reactjs.netlify.app/'},
      {id:7, title: 'Weather App', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/weather.jpg', cat:'react', url:'https://weather-ap-react.netlify.app/'},
      {id:8, title: 'Course Reactjs', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/course.jpg', cat:'react', url:'https://course-reactjs.netlify.app/'},
      {id:9, title: 'IMDB Scraper', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/imdb-scraper.jpg', cat:'django', url:'https://imdb.pythonanywhere.com/'},
      {id:10, title: 'Discussion Website', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/discuss.jpg', cat:'django', url:'https://discuss.pythonanywhere.com/'},
      {id:11, title: 'shop Django', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/shup.jpg', cat:'django', url:'https://shup.pythonanywhere.com/'},
    ]
  )

  return (
  <div className="App">
  <div className="menu">
    <div className="menu">
      <div className="menu-container">
        <div className="menu_profile">
          <div className="menu_profile_container">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <img
              src="https://avatars.githubusercontent.com/u/73436220?v=4"
              alt="Mohsen Sami"
            />
            <div className="menu_profile_content">
              <p className="name">Mohsen Sami</p>
              <p className="specialty">Full-Stack developer</p>
            </div>
          </div>
        </div>
        <div className="menu-content">
          <div className="origin-container">
            <div className="origin-content">
              <div className="country">
                <span>Residence:</span>
                <span>Iran</span>
              </div>
              <div className="city">
                <span>City:</span>
                <span>Tehran</span>
              </div>
              <div className="age">
                <span>Born:</span>
                <span>Sep 1988</span>
              </div>
            </div>
          </div>
          <div className="menu-lan-container">
            <p className="title">Languages</p>
            <div className="menu-lan-content">
              <span>Persian</span>
              <span>Native</span>
            </div>
            <div className="menu-lan-content">
              <span>English</span>
              <span>Learning</span>
            </div>
          </div>
          <div className="menu-skill-container">
            <p className="title">Skills</p>
            <div className="progress">
              <div className="subject">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>ReactJS</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>VueJS</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>Django</span>
                <span>85%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>WordPress</span>
                <span>100%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
          </div>
          <div className="knowledge">
            <div className="knowledge-container">
              <p className="title">Knowledge</p>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Responsive
                  Design
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Functional and Class
                  Components
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Context API
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Familiar
                  with Redux
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Bootstrap ,
                  Tailwind{" "}
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Material UI
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Axios, Fetch
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>MySQL, postgresql
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Django and
                  FastApi
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Familiar
                  Docker
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>OOP
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Git
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Postgre / Redis
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Celery - rabbitMq
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Familiar PWA
                </span>
              </div>
            </div>
          </div>
          <div className="cv-container">
            <span>
              DOWNLOAD CV<i className="fa fa-download" aria-hidden="true"></i>
            </span>
            <span>
              <a href="#">FA</a>
              <a href="#">ENG</a>
            </span>
          </div>
          <div className="social">
            <div className="social-container">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/mohsensami" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.github.com/mohsensami/" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_mohsensami" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/mohsensami88"
                    target="_blank"
                  >
                    <i className="fa fa-send-o" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="body">
    <div className="nav-container">
      <div className="nav-btn">
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
    </div>
    <div className="banner-container">
      <div className="background">
        <img src="./assets/img/header.min.jpg" alt="sami official website" />
      </div>
      <div className="content">
        <div className="subject">
          <span className="hey">Hey there . .</span>

          <div className="words">
          <span className="code">&lt;code&gt; </span>
          <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'Hello World, I am Full-Stack Developer',
    1000,
    'Hello World, I am Frontend Developer',
    1000,
    'Hello World, I am Backend Developer',
    1000,
    ]}
    speed={30} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '1em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
  <span className="code"> &lt;/code&gt;</span>
  </div>

          <div className="activity">
          <img src="https://camo.githubusercontent.com/04c27c52ca4763154470042b8e2c5b372a8d5dda503f2a7c61d0d72bc1c0d9ed/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a6176617363726970742c74732c72656163742c6e6578742c6a71756572792c7068702c776f726470726573732c707974686f6e2c646a616e676f2c666173746170692c7675652c6e7578742c7461696c77696e642c626f6f7473747261702c646f636b65722c6769742c6e67696e782c6d7973716c2c706f7374677265732c7265646973267468656d653d6c69676874" alt="My Skills" data-canonical-src="https://skillicons.dev/icons?i=html,css,javascript,ts,react,next,jquery,php,wordpress,python,django,fastapi,vue,nuxt,tailwind,bootstrap,docker,git,nginx,mysql,postgres,redis&amp;theme=light" />
          </div>
        </div>
        <div className="myPic">
          {/* <img src="./assets/img/header2.jpg" alt="" /> */}
        </div>
      </div>
    </div>

    <div className="degree-container">
      <div className="a_degree">
        <span>Bachelor's</span>
        <span>Payame Noor University (North Tehran)</span>
      </div>
      <div className="experience">
        <span>6 Years</span>
        <span> Experience</span>
      </div>
      <div className="b_degree">
        <span>Work In</span>
        <span>4 Companies</span>
      </div>
    </div>

    <div className="work-title">
      <span>My Works</span>
      {/* <select>
        <option value="all">All</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="php">php</option>
        <option value="python">Python</option>
      </select> */}
    </div>

    <div className="work_container">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {
          projects.map((project:any) => {
            return (
              <div key={project.id} className="box flex flex-col justify-between">
          <div className="title">
            <span>{project.title}</span>
            {/* <span>{project.cat}</span> */}
          </div>
          <img src={project.img} alt={project.title} />
          <div className="review_btn">
            <a rel="noopener noreferrer nofollow" href={project.url} target="_blank" >
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>

    <div className="experience-title pt-8">Experiences</div>

    <div className="experience-container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="box">
          <img
            src="https://hacoupian.net/wp-content/uploads/2021/08/logo2.png.webp"
            alt=""
          />
          <h3>Fullstack web developer</h3>
          <div className="sub-1">
            <span>Hacoupian</span> . <span>Full-time</span>
          </div>
          <div className="sub-2">
            <span>July 2020</span> / <span>November 2022</span> / (
            <span>2 years and 5 month</span>)<br />
            <span>Tehran, Iran</span>
          </div>
          {/* <p>
            Bertina works in the field of hosting and server services and I
            worked as a technical support in this company.
          </p> */}
        </div>
        <div className="box">
          <img
            src="https://novinmarketing.com/wp-content/themes/novin/images/logo.png"
            alt=""
          />
          <h3>fullstack web developer</h3>
          <div className="sub-1">
            <span>NovinMarketing</span> . <span>Full-time</span>
          </div>
          <div className="sub-2">
            <span>April 2019 </span> / <span>January 2020</span> / (
            <span>9 month</span>)<br />
            <span>Tehran, Iran</span>
          </div>
          {/* <p>
            Bertina works in the field of hosting and server services and I
            worked as a technical support in this company.
          </p> */}
        </div>
        <div className="box">
          <img
            src="https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/logo.jpg"
            alt=""
          />
          <h3>php web developer</h3>
          <div className="sub-1">
            <span>Espinasweb</span> . <span>Full-time</span>
          </div>
          <div className="sub-2">
            <span>April 2018 </span> / <span>April 2019</span> / (
            <span>1 years and 2 months</span>)<br />
            <span>Tehran, Iran</span>
          </div>
          {/* <p>
            Bertina works in the field of hosting and server services and I
            worked as a technical support in this company.
          </p> */}
        </div>
        <div className="box">
          <img
            src="https://30seo.ir/wp-content/uploads/2022/06/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B3%D8%A6%D9%88-Seo.png"
            alt=""
          />
          <h3>php web developer</h3>
          <div className="sub-1">
            <span>Seoyab</span> . <span>Full-time</span>
          </div>
          <div className="sub-2">
            <span>March 2017 </span> / <span>March 2018</span> / (
            <span>1 years and 1 months</span>)<br />
            <span>Tehran, Iran</span>
          </div>
          {/* <p>
            Bertina works in the field of hosting and server services and I
            worked as a technical support in this company.
          </p> */}
        </div>
      </div>
    </div>

    <footer>
      <div className="footer_container">
        <div className="email">
          <p>
            <i className="fa fa-send-o"></i> <span>mohsensami88@gmail.com</span>
          </p>
        </div>
        <div className="cpr">
          <p>Copyright 2023 | mohsensami</p>
        </div>
      </div>
    </footer>
  </div>
</div>

  )
}

export default App
