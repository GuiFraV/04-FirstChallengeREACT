import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
      <Footer />
    </div>
  );
}

function Avatar(){
  return <img className="avatar" src='gf.png' alt='Guillaume Franguiadakis'/>
}

function Intro(){
  return <div>
    <h1>Guillaume Franguiadakis</h1>
    <p>Full StackDeveloper skilled</p>
  </div>
}

function SkillList(){
  return <div className="skill-list">
    <Skill skill='React' emoji="👍" color='blue' level='Débutant' />
    <Skill skill='HTML+CSS' emoji="👍" color='red' level='Avancé' />
    <Skill skill='Svelte' emoji="👍" color='orange ' level='Intermédiaire' />
    <Skill skill='Javascript' emoji="👍"  color='yellow' level='Avancé' />
  </div>
}

function Skill(props){
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill}
      </span>
      <span>
       {props.emoji}
      </span>
      <span>
       {props.level}
      </span>
    </div>
  )
}

function Footer(){
  return (
    <div>
      <p> Made with ❤️ by Guillaume</p>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
