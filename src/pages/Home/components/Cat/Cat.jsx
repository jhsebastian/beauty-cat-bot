import React from 'react';
import Lottie from 'react-lottie';
import './Cat.css';
import animationCat from './4889-cat.json';

const Cat = ({ history }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationCat
  }

  function handleonClick() {
    history.push('/chat');
  }

  return(
    <div 
      className="cat-container"
      onClick={handleonClick}
    >
      <Lottie className="animation-cat"
        options={defaultOptions}
      />
    </div>
    
  )
};

export default Cat;