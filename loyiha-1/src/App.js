import "./App.css";

function App() {
  return (
    <div className="body">
      <header>
        <div className="container">
          <a className="logo" href="#"></a>

          <div className="pc-phone">
            <button className="btn btn-pc">
              <span className="pc"></span>
            </button>
            <hr className="tayoqcha" />
            <button className="btn btn-phone">
              <span className="phone"></span>
            </button>
          </div>

          <p className="header-p">
            Click edit and create your own amazing website
          </p>

          <a href="#">Подробнее</a>

          <button className="btn btn-nav">Редактировать</button>
        </div>
      </header>

      <section id="homeSection">
        <div className="container">
          <h2 className="homeSection-title">Олег Марков</h2>
          <ul className="lists">
            <li className="list">
              <a href="#">Главная</a>
            </li>
            <li className="list">
              <a href="#">Обо мне</a>
            </li>
            <li className="list">
              <a href="#">Связаться</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="main">
        <div className="container">
          <div className="grid-container">
            <img
              className="grid-item"
              src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg"
              width="302"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_302,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_9f4f79dd27814710b261e3acb931156e.jpg"
              width="302"
              height="453"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_3eea4c192eed4667a602ead5652459c5.jpg"
              width="302"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b572be78b8984e2db58978eb21e433d7.jpg"
              width="302"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_afe9335eb67640c988d648f7671308e5.jpg"
              width="302"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b9747effc3074458a295cf5674f8c73c.jpg"
              width="302"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_394a136048754355ad8432b30522c761.jpg"
              width="302"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg"
              width="302"
              alt=""
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <p>
              © 2035 Олег Марков. Сайт создан на <a href="">Wix.com.</a>
            </p>
            <ul className="socials">
              <li className="faceebok">
                <a href="http://www.facebook.com/wix">
                  <img
                    alt="facebook-square"
                    fetchpriority="high"
                    src="https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_19,h_19,al_c,usm_0.66_1.00_0.01,enc_auto/8d2c2a4846503b9067e2fd2f590445c2.wix_mp"
                  ></img>
                </a>
              </li>
              <li className="link">
                <a href="https://www.flickr.com/photos/wixcom/page1/">
                  <img
                    alt="facebook-square"
                    fetchpriority="high"
                    src="https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f33e5c8ff44ad726a15419f6ff97b3fd.png"
                  ></img>
                </a>
              </li>
              <li className="twitter">
                <a href="http://www.twitter.com/wix">
                  <img
                    alt="facebook-square"
                    fetchpriority="high"
                    src="https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe7017590fbd384c7502a64601c7b444.png"
                  ></img>
                </a>
              </li>
              <li className="psocial">
                <a href="https://www.pinterest.com/wixcom/">
                  <img
                    alt="facebook-square"
                    fetchpriority="high"
                    src="https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0a5617532c029a9bcc4b6490606cc49.png"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
