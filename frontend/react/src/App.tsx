import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import me from './assets/img/me.jpg'
import header from './assets/img/header.jpg'
import './App.css'

function App() {
  const [projects, setProjects] = useState(
    [
      {id:1, title: 'Shop', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/shop.jpg', cat:'react'},
      {id:2, title: 'Hacoupian', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/hacoupian.jpg', cat:'react'},
      {id:3, title: 'Diacobin', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/diacobin.jpg', cat:'vue'},
      {id:4, title: 'NovinMarketing', img: 'https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/novin.jpg', cat:'react'},
    ]
  )

  // const filteredProjects = (cat:any) => {
  //   setProjects((prev)=> {
  //     return (
  //       prev.filter(project=>{
  //         return project.cat != cat
  //       })
  //     )
  //   })
  // }

  // const changeProjectsHandler = (project:any) => {
  //   filteredProjects(project)
  // }

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
              <span>Beginner</span>
            </div>
          </div>
          <div className="menu-skill-container">
            <p className="title">Skill</p>
            <div className="progress">
              <div className="subject">
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>CSS</span>
                <span>100%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>Java Script</span>
                <span>60%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>React JS</span>
                <span>70%</span>
              </div>
              <div className="bar">
                <div></div>
              </div>
            </div>
            <div className="progress">
              <div className="subject">
                <span>WordPress</span>
                <span>50%</span>
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
                  <i className="fa fa-check" aria-hidden="true"></i>Functional
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
                  <i className="fa fa-check" aria-hidden="true"></i>Axios
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>ES6
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Formik and
                  YUP
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Familiar
                  with Design Pattern
                </span>
              </div>
              <div className="knowledge-content">
                <span>
                  <i className="fa fa-check" aria-hidden="true"></i>Git
                </span>
              </div>
            </div>
          </div>
          <div className="cv-container">
            <span>
              DOWNLOAD CV<i className="fa fa-download" aria-hidden="true"></i>
            </span>
            <span>
              <a href="/pdf/FA-Najari-CV.pdf">FA</a>
              <a href="/pdf/ENG-Najari-CV.pdf">ENG</a>
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
                    href="#"
                    target="_blank"
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i>
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
        <img src="./assets/img/header.jpg" alt="sami official website" />
      </div>
      <div className="content">
        <div className="subject">
          <span className="hey">Hey there . .</span>
          <div className="words">
            <span className="code">&lt;code&gt; </span>
            <div className="Typewriter" data-testid="typewriter-wrapper">
              <span className="Typewriter__wrapper">My next goal is Web 3</span>
              <span className="Typewriter__cursor">|</span>
            </div>
            <span className="code"> &lt;/code&gt;</span>
          </div>
          <div className="activity">
          <img src="https://camo.githubusercontent.com/04c27c52ca4763154470042b8e2c5b372a8d5dda503f2a7c61d0d72bc1c0d9ed/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a6176617363726970742c74732c72656163742c6e6578742c6a71756572792c7068702c776f726470726573732c707974686f6e2c646a616e676f2c666173746170692c7675652c6e7578742c7461696c77696e642c626f6f7473747261702c646f636b65722c6769742c6e67696e782c6d7973716c2c706f7374677265732c7265646973267468656d653d6c69676874" alt="My Skills" data-canonical-src="https://skillicons.dev/icons?i=html,css,javascript,ts,react,next,jquery,php,wordpress,python,django,fastapi,vue,nuxt,tailwind,bootstrap,docker,git,nginx,mysql,postgres,redis&amp;theme=light" />
          </div>
        </div>
        <div className="myPic">
          <img src="./assets/img/header2.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className="degree-container">
      <div className="a_degree">
        <span>Bachelor's</span>
        <span>Payame Noor University (North Tehran)</span>
      </div>
      <div className="experience">
        <span>5 Years</span>
        <span> Experience</span>
      </div>
      <div className="b_degree">
        <span>Work In</span>
        <span>4 Companies</span>
      </div>
    </div>

    <div className="work-title">
      <span>My Works</span>
      <select>
        <option value="all">All</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="php">php</option>
        <option value="python">Python</option>
      </select>
    </div>

    <div className="work_container">
      <div className="row">
        {
          projects.map((project:any) => {
            return (
              <div className="box">
          <div className="title">
            <span>{project.title}</span>
            {/* <span>{project.cat}</span> */}
          </div>
          <img src={project.img} alt={project.title} />
          <div className="review_btn">
            <a href="https://n4jari.github.io/student-management-app/" target="_blank" >
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

    <div className="experience-title">Experience</div>

    <div className="experience-container">
      <div className="row">
        <div className="box">
          <img
            src="https://www.bertina.ir/blog/wp-content/uploads/2019/06/bertina-logo.png"
            alt="Bertina"
          />
          <h3>Technical services</h3>
          <div className="sub-1">
            <span>Bertina</span> . <span>Part-time</span>
          </div>
          <div className="sub-2">
            <span>2020-07-01</span> / <span>2020-12-31</span> / (
            <span>6 month</span>)<br />
            <span>Tehran, Iran</span>
          </div>
          <p>
            Bertina works in the field of hosting and server services and I
            worked as a technical support in this company.
          </p>
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
