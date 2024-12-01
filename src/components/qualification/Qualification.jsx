import { useState } from "react";
import "./Qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon">Education</i>
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-building qualification__icon">Organization</i>
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">BINUS University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Science Major</h3>
                <span className="qualification__subtitle">SMAN 1 BENGKALIS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>



            </div>
            

          {/* ============================================== */}

          {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                </div>
              </div>

              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 
                </div>
              </div>



            </div> */}

          </div>
          
{/* ==========================CONTENT PEMISAH=================== */}


          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">KMB Dhammavaddhana</h3>
                <span className="qualification__subtitle">Activist</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>
              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">GDSC BINUS Malang</h3>
                <span className="qualification__subtitle">Member</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>



            </div>


            {/* ============================================== */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bina Nusantara Computer Club</h3>
                <span className="qualification__subtitle">Activist</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>
              <div>
                <span className="span qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Pemuda Theravada Indonesia</h3>
                <span className="qualification__subtitle">Activist</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>



            </div>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
