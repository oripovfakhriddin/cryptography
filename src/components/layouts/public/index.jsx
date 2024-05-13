import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import background from "../../../assets/img/background-image.webp";
import useScreenSize from "../../../utils/useScreen";

import "./style.scss";

const PublicLayout = () => {
  const screenSize = useScreenSize();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (screenSize > 450) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  }, [screenSize]);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          padding: "0 24px",
        }}
      >
        <div className="header__block">
          <div className="header__logo__box">
            <Link to="/">
              <img
                src="https://static.tuit.uz/assets/c4c88c23/img/src/newlogotype.png"
                alt="Site Logo"
              />
              <p>TUIT</p>
            </Link>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about">About</NavLink>
              </li>
              {isNavOpen ? (
                <li className="nav__item">
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              ) : null}
              <li className="nav__item">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Header>
      <Content
        className="site__layout"
        style={{
          padding: "0 20px",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 1,
          width: "100%",
          padding: "24px",
          color: "white",
          backgroundColor: "#001529",
          textAlign: "center",
        }}
      >
        ©2023 make by Juniors Developers group
      </Footer>
    </Layout>
  );
};
export default PublicLayout;
