
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

import "./local-index.css";
import "./local-app.css";

const About = () => {
  
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <h2>React Redux Toolkit Tutorial for Beginners | Learn Modern Redux</h2>
        <p>Dave Gray</p>
        <p>363K subscribers</p>
        <p>Reference: <span>https://www.youtube.com/watch?v=u3KlatzB7GM&list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo&index=1</span></p>
        <p>208,264 views  Mar 18, 2022  #redux #toolkit #react</p>
        <p>Web Dev Roadmap for Beginners (Free!): https://bit.ly/DaveGrayWebDevRoadmap</p>
        <p>Learn modern Redux with this React Redux Toolkit tutorial for beginners. Redux Toolkit is the recommended way to implement Redux global state management in React apps. Learn about Redux stores, slices, reducers, and actions in this step-by-step tutorial.</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default About