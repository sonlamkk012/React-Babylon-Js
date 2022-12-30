import { DoubleLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./BabylonUFO.scss";

const BabylonUFO = () => {
  return (
    <div id="babylon-UFO">
      <div className="container">
        <div className="title">
          <h2>
            <span>UFO</span>
          </h2>
          <h3>
            <span>Babylon Js</span>
          </h3>
        </div>
        <div>
          <div className="button">
            <Link to="/">
              <button className="btn-home btn-enter-app">
                <DoubleLeftOutlined />
                <span>Home</span>
              </button>
            </Link>
          </div>
          <iframe
            id="iframeAR"
            scroll="no"
            width="100%"
            height="800"
            src="static/UFO/babylon-UFO.html"
            frameborder="0"
            allowtransparency="true"
            style={{ borderRadius: "20px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default BabylonUFO;
