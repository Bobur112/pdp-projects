import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <div className="d-fixed navtop container-fluid d-flex justify-content-between">
          <div className="navtop-left col-auto col-lg">
            <a
              className="btn btn-transparent-dark btn-sm"
              href="https://startbootstrap.com/template/shop-homepage"
            >
              <svg
                width="8px"
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="arrow-left"
                class="svg-inline--fa fa-arrow-left fa-sm"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z"
                ></path>
              </svg>
              <span className="ms-2">Overview Page</span>
            </a>
          </div>

          <div className="navtop-center col col-auto d-none d-xl-block">
            <button className="btn btn-1 btn-icon btn-secondary mx-1 active">
              <fa-icon _ngcontent-serverapp-c116="" class="ng-fa-icon">
                <svg
                  width="15.75px"
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="desktop"
                  class="svg-inline--fa fa-desktop"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M512 32H64C46.3 32 32 46.3 32 64V256H544V64c0-17.7-14.3-32-32-32zm64 224v32 64c0 35.3-28.7 64-64 64H362.9l10.7 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H360 216 144c-8.8 0-16-7.2-16-16s7.2-16 16-16h58.4l10.7-64H64c-35.3 0-64-28.7-64-64V288 256 64C0 28.7 28.7 0 64 0H512c35.3 0 64 28.7 64 64V256zM32 288v64c0 17.7 14.3 32 32 32H231.7c.2 0 .4 0 .6 0H343.7c.2 0 .4 0 .6 0H512c17.7 0 32-14.3 32-32V288H32zM234.9 480H341.1l-10.7-64H245.6l-10.7 64z"
                  ></path>
                </svg>
              </fa-icon>
            </button>

            <button className="btn btn-icon btn-transparent-dark mx-1">
              <svg
                width="12.25px"
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="tablet"
                class="svg-inline--fa fa-tablet"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M64 32C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zM0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM192 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                ></path>
              </svg>
            </button>

            <button className="btn btn-icon btn-transparent-dark mx-1">
              <svg
                width="10.5px"
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="mobile"
                class="svg-inline--fa fa-mobile"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M96 32C78.3 32 64 46.3 64 64V448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zM32 64C32 28.7 60.7 0 96 0H288c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="navtop-right col text-end">
            <a
              class="btn btn-transparent-dark btn-sm me-2"
              href="https://github.com/StartBootstrap/startbootstrap-shop-homepage"
            >
              <fa-icon class="ng-fa-icon text-github">
                <svg
                  width="12px"
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  class="svg-inline--fa fa-github"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </fa-icon>
            </a>

            <a href="#">
              <svg
                width="12px"
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="download"
                class="svg-inline--fa fa-download"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g class="fa-duotone-group">
                  <path
                    class="fa-secondary"
                    fill="#E1645C"
                    d="M178.7 352H64c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H333.3l-54.6 54.6c-12.5 12.5-32.8 12.5-45.3 0L178.7 352zM408 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                  ></path>
                  <path
                    class="fa-primary"
                    fill="#E1645C"
                    d="M256 0c17.7 0 32 14.3 32 32V306.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 306.7V32c0-17.7 14.3-32 32-32z"
                  ></path>
                </g>
              </svg>
              <small>Free Download</small>
            </a>

            <button class="btn-exit btn btn-transparent-dark btn-sm btn-icon">
              <svg
                width="9px"
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="xmark"
                class="svg-inline--fa fa-xmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="navbar-dark bg-dark navbar navbar-expand-lg">
          <nav class="container ">
            <div class="container d-flex justify-content-between align-items-center">
              <a class="navbar-brand" href="#">
                Start Bootstrap
              </a>

              <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="section-1 py-5 bg-light border-bottom mb-4">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center">
            <h1 className="section-title fw-bolder">Welcome to Blog Home!</h1>
            <p class="lead mb-0">
              A Bootstrap 5 starter layout for your next blog homepage
            </p>
          </div>
        </div>
      </div>

      <div className="sectin-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-4">
                <a href="#!">
                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  <div class="card-body">
                    <div class="small text-muted">January 1, 2023</div>
                    <h2 class="card-title text-dark">Featured Post Title</h2>
                    <p class="card-text text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque, nulla? Quos cum ex quis soluta,
                      a laboriosam. Dicta expedita corporis animi vero voluptate
                      voluptatibus possimus, veniam magni quis!
                    </p>
                    <a class="btn btn-primary" href="#!">
                      Read more →
                    </a>
                  </div>
                </a>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="card mb-4">
                    <a href="#!">
                      <img
                        class="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div class="card-body">
                      <div class="small text-muted">January 1, 2023</div>
                      <h2 class="card-title h4">Post Title</h2>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a class="btn btn-primary" href="#!">
                        Read more →
                      </a>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <a href="#!">
                      <img
                        class="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div class="card-body">
                      <div class="small text-muted">January 1, 2023</div>
                      <h2 class="card-title h4">Post Title</h2>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a class="btn btn-primary" href="#!">
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="card mb-4">
                    <a href="#!">
                      <img
                        class="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div class="card-body">
                      <div class="small text-muted">January 1, 2023</div>
                      <h2 class="card-title h4">Post Title</h2>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a class="btn btn-primary" href="#!">
                        Read more →
                      </a>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <a href="#!">
                      <img
                        class="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div class="card-body">
                      <div class="small text-muted">January 1, 2023</div>
                      <h2 class="card-title h4">Post Title</h2>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla? Quos cum ex quis
                        soluta, a laboriosam.
                      </p>
                      <a class="btn btn-primary" href="#!">
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <nav aria-label="Pagination">
                <hr class="my-0" />
                <ul class="pagination justify-content-center my-4">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Newer
                    </a>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#!">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#!">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#!">
                      3
                    </a>
                  </li>
                  <li class="page-item disabled">
                    <a class="page-link" href="#!">
                      ...
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#!">
                      15
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#!">
                      Older
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-header">Search</div>
                <div class="card-body">
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter search term..."
                      aria-label="Enter search term..."
                      aria-describedby="button-search"
                    />
                    <button
                      class="btn btn-primary"
                      id="button-search"
                      type="button"
                    >
                      Go!
                    </button>
                  </div>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">Categories</div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!">Web Design</a>
                        </li>
                        <li>
                          <a href="#!">HTML</a>
                        </li>
                        <li>
                          <a href="#!">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!">JavaScript</a>
                        </li>
                        <li>
                          <a href="#!">CSS</a>
                        </li>
                        <li>
                          <a href="#!">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">Side Widget</div>
                <div class="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the Bootstrap 5 card
                  component!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright © Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
