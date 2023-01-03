import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


import "./Home.scss";

const Home = () => {
  const [loadings, setLoadings] = useState([]);
  const navigate = useNavigate();

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1500);
  };

  const goToFish = () => {
      enterLoading(0);
    setTimeout(() => {
        navigate('/fish')
    },1500)
  }

  const goToFireBall = () => {
    enterLoading(1);
  setTimeout(() => {
      navigate('/fire-ball')
  },1500)
}

const goToSolar = () => {
    enterLoading(2);
  setTimeout(() => {
      navigate('/solar')
  },1500)
}

const goToUFO = () => {
  enterLoading(3);
setTimeout(() => {
    navigate('/ufo')
},1500)
}

  return (
    <div id="home">
      <div className="container">
        <div className="title">
          <h2>
            <span>Lâm Sơn</span>
          </h2>
          <h3>
            <span>Babylon Js</span>
          </h3>
        </div>
        <div className="button-group">
          <Button
            className="btn-home btn-enter-app animate-scale"
            type="primary"
            loading={loadings[0]}
            onClick={goToFish}
          >
            Fish
          </Button>
          <Button
            className="btn-home btn-enter-app animate-scale"
            type="primary"
            loading={loadings[1]}
            onClick={goToFireBall}
          >
           Fire Ball
          </Button>
          <Button
            className="btn-home btn-enter-app animate-scale"
            type="primary"
            loading={loadings[2]}
            onClick={goToSolar}
          >
            Solar
          </Button>
          <Button
            className="btn-home btn-enter-app animate-scale"
            type="primary"
            loading={loadings[3]}
            onClick={goToUFO}
          >
            UFO
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
