import "./BabylonFireBall.scss";

const BabylonFireBall = () => {
  return (
    <div id="babylon-fire-ball">
      <div className="container">
        <div className="title">
          <h2>
            <span>Fire Ball</span>
          </h2>
          <h3>
            <span>Babylon Js</span>
          </h3>
        </div>
        <div>
          <iframe
            id="iframeAR"
            scroll="no"
            width="100%"
            height="800"
            src="static/FireBall/demo-babylon.html"
            frameborder="0"
            allowtransparency="true"
            style={{ borderRadius: "20px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BabylonFireBall;
