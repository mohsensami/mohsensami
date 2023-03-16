import React from "react";

function Experiences() {
  return (
    <>
      <div className="experience-title pt-8">Experiences</div>

      <div className="experience-container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="box">
            <img src="https://hacoupian.net/wp-content/uploads/2021/08/logo2.png.webp" alt="" />
            <h3>web developer</h3>
            <div className="sub-1">
              <span>Hacoupian</span> . <span>web-time</span>
            </div>
            <div className="sub-2">
              <span>July 2020</span> / <span>November 2022</span> / (<span>2 years and 5 month</span>)<br />
              <span>Tehran, Iran</span>
            </div>
            {/* <p>
        Bertina works in the field of hosting and server services and I
        worked as a technical support in this company.
      </p> */}
          </div>
          <div className="box">
            <img src="https://novinmarketing.com/wp-content/themes/novin/images/logo.png" alt="" />
            <h3>web developer</h3>
            <div className="sub-1">
              <span>NovinMarketing</span> . <span>Full-time</span>
            </div>
            <div className="sub-2">
              <span>April 2019 </span> / <span>January 2020</span> / (<span>9 month</span>)<br />
              <span>Tehran, Iran</span>
            </div>
            {/* <p>
        Bertina works in the field of hosting and server services and I
        worked as a technical support in this company.
      </p> */}
          </div>
          <div className="box">
            <img src="https://raw.githubusercontent.com/mohsensami/mohsensami/main/images/works/logo.jpg" alt="" />
            <h3>php web developer</h3>
            <div className="sub-1">
              <span>Espinasweb</span> . <span>Full-time</span>
            </div>
            <div className="sub-2">
              <span>April 2018 </span> / <span>April 2019</span> / (<span>1 years and 2 months</span>)<br />
              <span>Tehran, Iran</span>
            </div>
            {/* <p>
        Bertina works in the field of hosting and server services and I
        worked as a technical support in this company.
      </p> */}
          </div>
          <div className="box">
            <img src="https://30seo.ir/wp-content/uploads/2022/06/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B3%D8%A6%D9%88-Seo.png" alt="" />
            <h3>php web developer</h3>
            <div className="sub-1">
              <span>Seoyab</span> . <span>Full-time</span>
            </div>
            <div className="sub-2">
              <span>March 2017 </span> / <span>March 2018</span> / (<span>1 years and 1 months</span>)<br />
              <span>Tehran, Iran</span>
            </div>
            {/* <p>
        Bertina works in the field of hosting and server services and I
        worked as a technical support in this company.
      </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
