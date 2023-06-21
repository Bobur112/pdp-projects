import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-left">
            <a className="logo" href="#"></a>
            <div className="pc-phone">
              <button className="btn btn-pc">
                <span className="pc"></span>
              </button>
              <div className="tayoqcha"></div>
              <button className="btn btn-phone">
                <span className="phone"></span>
              </button>
            </div>
          </div>

          <div className="header-right">
            <p className="header-p">
              Click edit and create your own amazing website
            </p>

            <a href="#">Подробнее</a>

            <button className="btn btn-nav">Редактировать</button>
          </div>
        </div>
      </header>

      <div className="section-1">
        <div className="section1-main">
          <div className="author">
            <h2>K. Griffith</h2>
          </div>
          <div className="menu">
            <ul className="list">
              <li className="item">
                <a className="item-href" href="#">
                  APPEARANCES
                </a>
              </li>
              <li className="item">
                <a className="item-href" href="#">
                  BOOKS
                </a>
              </li>
              <li className="item">
                <a className="item-href" href="#">
                  NEWS
                </a>
              </li>
              <li className="item">
                <a className="item-href" href="#">
                  ABOUT
                </a>
              </li>
              <li className="item">
                <a className="item-href" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>

      <div className="section-2">
        <div className="author-img">
          <img
            src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_190,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg"
            alt=""
            srcset="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_190,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg"
            fetchpriority="high"
          ></img>
        </div>
        <div className="author-title">
          <h1 className="author-name">Kayla Griffith</h1>
          <p className="author-link">Award Winning Author</p>
        </div>

        <div className="saction-3">
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
