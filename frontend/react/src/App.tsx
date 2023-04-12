import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import me from "./assets/img/me.jpg";
import { data } from "./data";

import "./App.css";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Degree from "./components/Degree";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState(data);

  const [filteredProjects, setFilteredProjects] = useState(projects.filter((q) => q.cat === "react"));

  const handleChange = (value: any) => {
    const newProjects = projects.filter((q) => q.cat === value);
    setFilteredProjects(newProjects);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="body">
        <div className="nav-container">
          <div className="nav-btn">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
        <Banner />

        <Degree />

        <div className="work-title">
          <span>My Works</span>
          <select onChange={(e) => handleChange(e.target.value)}>
            <option value="react">React - Nextjs</option>
            <option value="django">Django</option>
            <option value="wp">Wordpress</option>
            {/* <option value="vue">Vue</option> */}
          </select>
        </div>

        <div className="work_container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {filteredProjects.map((project: any) => {
              return (
                <div key={project.id} className="box flex flex-col justify-between">
                  <div className="title">
                    <span>{project.title}</span>
                    {/* <span>{project.cat}</span> */}
                  </div>
                  <img src={project.img} alt={project.title} />
                  <div>
                    <span className="text-xs text-[#ffc107]">{project.cat}</span>
                  </div>
                  <div className="review_btn">
                    <a className="float-right" rel="noopener noreferrer nofollow" href={project.url} target="_blank">
                      REVIEW NOW
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Experiences />

        <Footer />
      </div>
    </div>
  );
}

export default App;
