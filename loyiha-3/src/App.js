import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="shadow-sm">
        <div className="navbarr py-2">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Company name
              </a>
              <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 f-end">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Enterprice
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Support
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Pricing
                    </a>
                  </li>
                  <button class="btn btn-outline-primary" type="submit">
                    Sign up
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="section-1">
        <h1 className="title text-center mt-5 fw-normal">Pricing</h1>
        <div className="container section-1-text mb-40">
          <p className="lead text">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
      </div>

      <div className="section-2">
        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $0
                  <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $15
                  <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Sign up for free
                </button>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $29
                  <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  class="btn-2 btn btn-primary btn-lg btn-block"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          <hr className="hr" />
        </div>
      </div>

      <footer>
        <div className="footer-container container pt-3">
          <div className="footer-logo">
            <img
              className="footer-img"
              src="	https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
            />
            <small>© 2017-2018</small>
          </div>

          <div className="footer-lists">
            <div className="footer-list footer-first">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-list footer-second">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-list footer-thirty">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
