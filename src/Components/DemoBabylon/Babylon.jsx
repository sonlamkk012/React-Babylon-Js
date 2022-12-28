

import "./Babylon.scss"


const Babylon = () => {
  return (
    <div id="babylon">
      <div className="container">
        <div className="title">
          <h2>
            <span>Lâm Sơn</span>
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
            height="1000"
            src="static/demo-babylon-react.html"
            frameborder="0"
            allowtransparency="true"
            style={{borderRadius:"20px"}}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Babylon;
