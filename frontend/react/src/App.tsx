import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import me from './assets/img/me.jpg'
import header from './assets/img/header.jpg'
import './App.css'

function App() {
  

  return (
    <div className="App">
  <div className="menu">
    <div className="menu">
      <div className="menu-container">
        <div className="menu_profile">
          <div className="menu_profile_container">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <img
              src="https://msami.netlify.app/assets/me.0911da7d.jpg"
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
                  <a href="https://www.linkedin.com/in/n4jari" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.github.com/n4jari/" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/n4jari" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCUj6BoyDSnQ4WIjSWBhwKnw"
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
        <img src="./assets/img/header.jpg" alt="n4jari official website" />
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
            <img src="./assets/img/header.jpg" title="Netflix" />
          </div>
        </div>
        <div className="myPic">
          <img src="./assets/img/header2.jpg" alt="" />
        </div>
      </div>
    </div>

    <div className="degree-container">
      <div className="a_degree">
        <span>Associate</span>
        <span>Shahid Babaei University (Qazvin)</span>
      </div>
      <div className="b_degree">
        <span>Bachelor's</span>
        <span>Shahid Shamsipour University (Tehran)</span>
      </div>
      <div className="experience">
        <span>6 Month</span>
        <span> Experience</span>
      </div>
    </div>

    <div className="work-title">
      <span>My Works</span>
      <select>
        <option value="">All</option>
        <option value="Simple">Simple</option>
        <option value="Mid">Mid</option>
        <option value="Pro">Pro</option>
      </select>
    </div>

    <div className="work_container">
      <div className="row">
        <div className="box">
          <div className="title">
            <span>Student Management App</span>
            <span>Mid</span>
          </div>
          <img
            src="https://n4jari.ir/images/StudentApp.png"
            alt="Student Management App"
          />
          <div className="review_btn">
            <a
              href="https://n4jari.github.io/student-management-app/"
              target="_blank"
            >
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <span>Todo</span>
            <span>Mid</span>
          </div>
          <img src="https://n4jari.ir/images/Todo.png" alt="Todo" />
          <div className="review_btn">
            <a href="https://n4jari.github.io/todo-app" target="_blank">
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <span>Amilo</span>
            <span>Simple</span>
          </div>
          <img src="https://n4jari.ir/images/Amilo.png" alt="Amilo" />
          <div className="review_btn">
            <a href="https://n4jari.github.io/amilo" target="_blank">
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <span>TechLand</span>
            <span>Simple</span>
          </div>
          <img src="https://n4jari.ir/images/TechLand.png" alt="TechLand" />
          <div className="review_btn">
            <a href="https://n4jari.github.io/techland" target="_blank">
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <span>BBC</span>
            <span>Simple</span>
          </div>
          <img src="https://n4jari.ir/images/BBC.png" alt="BBC" />
          <div className="review_btn">
            <a href="https://n4jari.github.io/bbc" target="_blank">
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <span>Nike</span>
            <span>Simple</span>
          </div>
          <img src="https://n4jari.ir/images/Nike.png" alt="Nike" />
          <div className="review_btn">
            <a href="https://n4jari.github.io/nike" target="_blank">
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <span>Apple</span>
            <span>Simple</span>
          </div>
          <img src="https://n4jari.ir/images/Apple.png" alt="Apple" />
          <div className="review_btn">
            <a href="https://n4jari.github.io/apple" target="_blank">
              REVIEW NOW
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
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
            <i className="fa fa-send-o"></i> <span>n4jari@gmail.com</span>
          </p>
        </div>
        <div className="cpr">
          <p>Copyright 2023 | ©n4jari</p>
        </div>
      </div>
    </footer>
  </div>
</div>

  )
}

export default App
