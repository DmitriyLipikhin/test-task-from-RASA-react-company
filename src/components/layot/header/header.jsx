import './header.scss';
import Logo from '../../../components/ui/logo/logo.jsx';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__top-nav-wrapper">
          <div className="header__top-nav-all">
            <ul className="header__top-nav-list header__top-nav-list-left">
              <li className="header__top-nav-item">
                <a className="header__top-nav-link" href="/public/index.html">Частным клиентам</a>
              </li>
              <li className="header__top-nav-item">
                <a className="header__top-nav-link header__top-nav-link--active" href="/public/index.html">Для бизнеса</a>
              </li>
            </ul>
            <ul className="header__top-nav-list header__top-nav-list-right">
              <li className="header__top-nav-item">
                <a className="header__top-nav-link" href="/public/index.html">О банке</a>
              </li>
              <li className="header__top-nav-item">
                <a className="header__top-nav-link" href="/public/index.html">Офисы</a>
              </li>
            </ul>
          </div>
          <div className="header__top-nav-info">
            <a className="header__top-nav-info-tel" href='tel:88007755606'>8 (800) 775-56-06</a>
            <button className="header__top-nav-info-country">Хабаровск</button>
            <a className="header__top-nav-info-version" href="/public/index.html" >English</a>
          </div>
        </div>
        <div className="header__logo-wrapper">
          <Logo />
          <button className="header__button"><span className="visually-hidden">Открыть меню</span></button>
        </div>
        <Swiper className="header__navigation-wrapper" allowTouchMove={true} direction={'horizontal'} slidesPerView={'auto'}>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Кредиты</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Вклады</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Обмен валют</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Карты</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Ипотека</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Переводы</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Страхование</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link" href="/public/index.html">Страхование</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link header__navigation-link-sublist" href="/public/index.html">Сервисы</a>
          </SwiperSlide>
          <SwiperSlide className="header__navigation-item">
            <a className="header__navigation-link header__navigation-link-sublist" href="/public/index.html">Ещё</a>
          </SwiperSlide>
        </Swiper>
        <div className="header__сallback-login">
          <a className="header__callback header__callback-number" href='tel:88007755606'>8 800 775-56-06</a>
          <a className="header__callback header__callback-text" href='tel:88007755606'>Заказать звонок</a>
          <a className="header__callback-login" href="/public/index.html" >Интернет-банк</a>
        </div>
      </div>
    </header>
  );
}

export default Header;