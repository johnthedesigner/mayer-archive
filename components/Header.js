import Link from "next/link";
import { withRouter } from "next/router";

const navPages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Collections", path: "/collections" },
];

const Logo = ({ color }) => {
  let src = "/logo-gold.svg";
  if (color === "blue") {
    src = "/logo-blue.svg";
  }
  if (color === "red") {
    src = "/logo-red.svg";
  }

  return (
    <Link href="/">
      <a className="global-header__logo" title="The Mayer Archive | Home">
        <img src={src} />
      </a>
    </Link>
  );
};

const navItemStyles = (color) => {
  switch (color) {
    case "blue":
      return {
        background: 'url("/bg-tex-blue.svg")',
      };
      break;
    case "gold":
      return {
        background: 'url("/bg-tex-gold.svg")',
      };
      break;
    case "red":
      return {
        background: 'url("/bg-tex-red.svg")',
      };
      break;
  }
};

const Header = ({ title, color, router }) => {
  return (
    <header className="global-header">
      <Logo color={color} />
      <nav className="main-nav">
        <ul className="main-nav__list">
          {navPages.map((page) => {
            let activeClass = "";
            let styles = {};
            if (router.pathname === page.path) {
              activeClass = "main-nav__link--active";
              styles = navItemStyles(color);
            }
            return (
              <li className="main-nav__item" key={page.path}>
                <Link href={page.path}>
                  <a
                    className={`main-nav__link ${activeClass}`}
                    style={styles}
                    title={page.label}
                  >
                    {page.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
