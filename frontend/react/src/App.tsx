import { useState } from "react";
// import reactLogo from './assets/react.svg'
import me from "./assets/img/me.jpg";

import "./App.css";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Degree from "./components/Degree";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Hacoupian Shop", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/shop.jpg", cat: "wp", url: "https://shop.hacoupian.net/" },
    { id: 2, title: "Hacoupian Website", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/hacoupian.jpg", cat: "wp", url: "https://hacoupian.net/" },
    { id: 3, title: "Diacobin", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/diacobin.jpg", cat: "wp", url: "https://diacobin.com/" },
    { id: 4, title: "NovinMarketing", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/novin.jpg", cat: "wp", url: "https://novinmarketing.com/" },
    { id: 5, title: "nextjs Shop", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/next-shop2.jpg", cat: "react", url: "https://shop-sami.vercel.app/" },
    { id: 6, title: "nextjs blog", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/next-blog.jpg", cat: "react", url: "https://blog-sami.vercel.app/" },
    { id: 7, title: "Shopping Cart", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/cart.jpg", cat: "react", url: "https://shopping-cart-stores.netlify.app/" },
    { id: 8, title: "File Uploader", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/fileuploader.jpg", cat: "react", url: "https://file-uploader-sami.vercel.app/" },
    { id: 9, title: "Github Finder", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/githubfinder.jpg", cat: "react", url: "https://githubfinder-sami.netlify.app/" },
    { id: 10, title: "Expense Reactjs", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/expense.jpg", cat: "react", url: "https://expenses-reactjs.netlify.app/" },
    { id: 11, title: "Weather App", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/weather.jpg", cat: "react", url: "https://weather-ap-react.netlify.app/" },
    { id: 12, title: "Course Reactjs", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/course.jpg", cat: "react", url: "https://course-reactjs.netlify.app/" },
    { id: 13, title: "IMDB Scraper", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/imdb-scraper.jpg", cat: "django", url: "https://imdb.pythonanywhere.com/" },
    { id: 14, title: "Discussion Website", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/discuss.jpg", cat: "django", url: "https://discuss.pythonanywhere.com/" },
    { id: 15, title: "shop website", img: "https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/shup.jpg", cat: "django", url: "https://shup.pythonanywhere.com/" },
  ]);

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
