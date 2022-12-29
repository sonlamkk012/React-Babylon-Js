import { def } from "@vue/shared";
import "./BabylonFish.scss";

const BabylonFish = () => {
  return (
    <div id="babylon-fish">
      <div className="container">
        <div className="title">
          <h2>
            <span>Fish</span>
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
            src="static/Fish/babylon-fish.html"
            frameborder="0"
            allowtransparency="true"
            style={{ borderRadius: "20px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BabylonFish
