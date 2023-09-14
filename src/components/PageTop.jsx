import Link from "next/link";

export default function PageTop() {
  /*    < !--Nav Bar Start-- >*/

  return (
    <div className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          詩畵堂<span>(시화당)</span>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav ml-auto">
            <Link href="feature.html" className="nav-item nav-link">
              <i className="bi bi-journal-bookmark"></i> 시화당 차림
            </Link>
            <Link href="team.html" className="nav-item nav-link">
              <i className="bi bi-journal-medical"></i> 베스트 차림
            </Link>
            <Link href="subscription.html" className="nav-item nav-link">
              <i className="bi bi-journal-check"></i> 정기구독
            </Link>

            <li className="nav-item dropdown">
              <Link
                href=""
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-journals"></i> 블로그
              </Link>
              <div className="dropdown-menu">
                <Link href="blog.html" className="dropdown-item">
                  모음 블로그
                </Link>
                <Link href="single.html" className="dropdown-item">
                  상세 블로그
                </Link>
              </div>
            </li>

            <Link
              href=""
              className="nav-item nav-link"
              data-toggle="modal"
              data-target="#loginModal"
            >
              <i className="bi bi-person-check-fill"></i> 로그인
            </Link>
            <form className="d-flex" role="search">
              <div className="input-group input-group-sm mb-3">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="검색"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </ul>
        </div>
      </div>
    </div>
  );
}
