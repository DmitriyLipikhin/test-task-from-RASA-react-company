import React from "react";
import logoWebp from "../../../assets/images/logo.webp"; // Относительно текущего файла
import logoWebp2x from "../../../assets/images/logo@2x.webp";
import logoPng from "../../../assets/images/logo.png";
import logoPng2x from "../../../assets/images/logo@2x.png";

export default function Logo() {
  return (
    <picture>
      <source type="image/webp" srcSet={`${logoWebp}, ${logoWebp2x} 2x`} />
      <img className="header__logo" src={logoPng} srcSet={`${logoPng2x} 2x`} width="130" height="30" alt="Логотип Солид Банк"
      />
    </picture>
  );
}