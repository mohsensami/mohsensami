import { TypeAnimation } from "react-type-animation";

function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="background">
          <img src="./assets/img/header.min.jpg" alt="sami official website" />
        </div>
        <div className="content">
          <div className="subject">
            <span className="hey">Hi there . .</span>

            <div className="words">
              <span className="code">&lt;code&gt; </span>
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={["Hello World, I am web Developer", 1000, "Hello World, I am Frontend Developer", 1000, "Hello World, I am Backend Developer", 1000]}
                speed={30} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "1em" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
              <span className="code"> &lt;/code&gt;</span>
            </div>

            <div className="activity">
              <img src="https://skillicons.dev/icons?i=html,css,javascript,ts,react,next,jquery,php,wordpress,python,django,fastapi,vue,tailwind,bootstrap,docker,git,nginx,mysql,postgres,redis&amp;theme=light" alt="My Skills" data-canonical-src="https://skillicons.dev/icons?i=html,css,javascript,ts,react,next,jquery,php,wordpress,python,django,fastapi,vue,tailwind,bootstrap,docker,git,nginx,mysql,postgres,redis&amp;theme=light" />
            </div>
          </div>
          <div className="myPic">{/* <img src="./assets/img/header2.jpg" alt="" /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Banner;
