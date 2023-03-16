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
            <span className="hey">Hey there . .</span>

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
              <img src="https://camo.githubusercontent.com/04c27c52ca4763154470042b8e2c5b372a8d5dda503f2a7c61d0d72bc1c0d9ed/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a6176617363726970742c74732c72656163742c6e6578742c6a71756572792c7068702c776f726470726573732c707974686f6e2c646a616e676f2c666173746170692c7675652c6e7578742c7461696c77696e642c626f6f7473747261702c646f636b65722c6769742c6e67696e782c6d7973716c2c706f7374677265732c7265646973267468656d653d6c69676874" alt="My Skills" data-canonical-src="https://skillicons.dev/icons?i=html,css,javascript,ts,react,next,jquery,php,wordpress,python,django,fastapi,vue,nuxt,tailwind,bootstrap,docker,git,nginx,mysql,postgres,redis&amp;theme=light" />
            </div>
          </div>
          <div className="myPic">{/* <img src="./assets/img/header2.jpg" alt="" /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Banner;
