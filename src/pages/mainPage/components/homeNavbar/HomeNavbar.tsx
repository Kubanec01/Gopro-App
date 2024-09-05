import { Container, Nav } from "react-bootstrap";
import logoImg from "../../../../assets/logo-img.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./homeNavbar.module.css";
import { useTranslation } from "react-i18next";
import { useScreenSize } from "../../../../hooks/useScreenSize";


export function HomeNavbar() {
  const {t} = useTranslation()

  // STYLES
  const link = `${style.link}`;

  const [isAtTop, setIsAtTop] = useState(true);
  const windowWidth = useScreenSize()

  // !!!!!!!
  // ! Pri 768px a menej sprav z navbaru len bars icon a vsetky ponuky ktore sa rozbalia po kliknuti na bars button
  // ! pod touto sirkou sa deaktivuje scroll bar ktory sa aktivuje ked nieje navbar na top-0
  // !!!!!!!

  

  useEffect(() => {
    const scrollStatus = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", scrollStatus);

    return () => {
      window.removeEventListener("scroll", scrollStatus);
    };
  });

  return (
    <Navbar className="fixed z-[1000] w-full px-2">
      {isAtTop ? (
        <Container className="2xl:w-[70%] max-w-[1300px] mx-auto flex justify-between h-[9.375rem]">
          <Navbar.Brand className="flex items-center w-[18.75rem]">
              <img className="object-cover w-full" src={logoImg} alt="" />
          </Navbar.Brand>
          <Nav className="flex justify-center items-center max-w-[400px] mr-[2.5rem] gap-16">
            <Link to="shop" className="text-[#ffffffdc] text-2xl">
              {t('navbar.shop')}
            </Link>
            <Link to="about" className="w text-[#ffffffdc] text-2xl">
              {t('navbar.about')}
            </Link>
            <button
            onClick={() => {window.location.href = "mailto: jakub.z.roman@gmail.com"}}
            className="border-2 rounded-2xl w-[8.75rem] h-[3.125rem] text-white  text-2xl">
              {t("navbar.contactUs")}
            </button>
          </Nav>
        </Container>
      ) : (
        <Container
          style={{
            borderRadius: "10px 10px 20px 20px",
            backdropFilter: "blur(10px)",
          }}
          className={`${style.container} max-w-[1000px] mx-auto flex justify-between h-[5rem] mt-[1.25rem] bg-[#1a191964] border-2 border-[#ffffff2e]`}
        >
          <Nav className="mx-auto w-[90%] flex items-center justify-center text-[#ffffffac] text-lg gap-20">
            {/* page links */}
            <a className={link} href="#accessories">
              {t("navbar.accessories")}
            </a>
            <a className={link} href="#application">
              {t('navbar.application')}
            </a>
            <a className={link} href="#new-product">
            {t('navbar.upcoming')}
            </a>
            {/* routes links */}
            <Link className={link} to="shop" >
            {t('navbar.shop')}
            </Link>
            <Link className={link} to="about" >
            {t('navbar.about')}
            </Link>
            <a className={link} href="mailto:jakub.z.roman@gmail.com">
            {t('navbar.contactUs')}
            </a>
          </Nav>
        </Container>
      )}
    </Navbar>
  );
}