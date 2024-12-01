import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Gamedev from "./Gamedev"
import Design from "./Design"
import RightHand from "../../assets/robot__hand.png"
import LeftHand from "../../assets/robot__hand__left.png"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
    
    <div className="hand">
      <img src={LeftHand} alt="" className="left__hand" />     
      <img src={RightHand} alt="" className="right__hand" />     
      </div>
    <div className="skills__container grid">
      <Frontend />

      <Backend /> 
      <Gamedev />

      <Design />
    </div>
    </section>
  )
}

export default Skills
