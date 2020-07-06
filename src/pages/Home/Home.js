import React from 'react';
import Cat from '../Home/components/Cat/Cat';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = ({ history }) => {
  return(
    <div className="home-catbot-container">
      <div className="home-catbot-content">
        <Cat history={history}/>
        <div className="home-catbot-greeting">
          <Fade top>
            <h1>¿Qué me miras?</h1>
          </Fade>
          <Fade top>
            <label>¿Quieres hablar conmigo?</label>
            <label>Click sobre mí para comenzar</label>
          </Fade>
        </div>
      </div>
    </div>
  )
};

export default Home;