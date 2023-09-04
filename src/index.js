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
    <Skill skill='React' emoji="👍" color='blue' />
    <Skill skill='HTML+CSS' emoji="👍" color='red' />
    <Skill skill='Svelte' emoji="👍" color='orange ' />
    <Skill skill='Javascript' emoji="👍"  color='yellow' />
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
