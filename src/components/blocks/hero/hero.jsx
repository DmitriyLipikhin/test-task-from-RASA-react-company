import React from "react";
import "./hero.scss";
import heroWebp from "../../../assets/images/hero-image.webp"; // Относительно текущего файла
import heroWebp2x from "../../../assets/images/hero-image@2x.webp";
import heroPng from "../../../assets/images/hero-image.png";
import heroPng2x from "../../../assets/images/hero-image@2x.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__breadcrumbs">
          <ul className="hero__breadcrumbs-list">
            <li className="hero__breadcrumbs-item">Главная</li>
            <li className="hero__breadcrumbs-item">Кредит</li>
            <li className="hero__breadcrumbs-item hero__breadcrumbs-item--active">Автокредит</li>
          </ul>
        </div>
        <div className="hero__text">
          <h1 className="hero__text-title">Автокредит от 7,5% годовых</h1>
          <p className="hero__text-description">
            на покупку авто у дилера или частного лица
          </p>
          <button className="hero__text-button">Оформить</button>
        </div>
        <div className="hero__image-wrapper">
          <picture>
            <source
              type="image/webp"
              srcSet={`${heroWebp}, ${heroWebp2x} 2x`}
            />
            <img
              className="hero__image"
              src={heroPng}
              srcSet={`${heroPng2x} 2x`}
              width="316"
              height="216"
              alt="Логотип Солид Банк"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
