import { DoubleLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Babylon.scss";

const Babylon = () => {
  return (
    <div id="babylon">
      <div className="container">
        <div className="title">
          <h2>
            <span>Solar</span>
          </h2>
          <h3>
            <span>Babylon Js</span>
          </h3>
        </div>
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
          src="static/demo-babylon-react.html"
          frameborder="0"
          allowtransparency="true"
          style={{ borderRadius: "20px" }}
        ></iframe>
      </div>
    </div>
  );
};
export default Babylon;
