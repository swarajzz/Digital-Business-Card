import React from "react";
import img1 from "../assets/Enhanced_Photo.jpg";
import img2 from "../assets/Swaraj_Photo.jpg";
export default function Header() {
  return (
    <header className="header">
      <img className="header__image" src={img1} alt="" />
      <h1 className="header__title"> Swaraj </h1>
      <h3 className="header__subtitle"> Frontend Developer </h3>
      {/* <a className="header__link" href="#">
        Netlify App{" "}
      </a> */}
      <div className="header__btn-group">
        <a
          className="header__btn btn--email"
          href="mailto:nikhilmansharma0402@gmail.com"
        >
          <ion-icon class="header__logo" name="mail-outline"></ion-icon>
          <span className="header__logo-text"> Email </span>
        </a>
        <a
          className="header__btn btn--github"
          href="https://github.com/swarajzz"
          target="_blank"
        >
          <ion-icon class="header__logo" name="logo-github"></ion-icon>
          <span className="header__logo-text"> Github </span>
        </a>
      </div>
    </header>
  );
}
