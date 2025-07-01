import React from "react";
import "./catalog.scss";

export default function Catalog ({ catalogAuto, catalogBest}) {
    function importAll(r) {
        return r.keys().reduce((acc, key) => {
          const name = key.replace('./', '').replace(/\.(webp|jpg|jpeg|png)$/, '');
          const ext = key.match(/\.(webp|jpg|jpeg|png)$/)[0];
          if (!acc[name]) {
            acc[name] = {};
          }
          acc[name][ext.slice(1)] = r(key);
          return acc;
        }, {});
      }
      
      const images = importAll(
        require.context('../../../assets/images', false, /auto.*\.(webp|jpg|jpeg|png)$/)
      );

      console.log(images)
    return (
        <section className="catalog">
            <div className="catalog__container">
                <div className="catalog__top-wrapper">
                    <h2 className="catalog__top-title">Выберите себе авто</h2>
                    <button className="catalog__top-hide">Свернуть список машин</button>
                </div>
                <div className="catalog__select-wrapper">
                    <div className="catalog__select-brand">
                        <p className="catalog__select-label">Марка</p>
                        <input className="catalog__select-input" type="hidden" />
                        <div className="catalog__select-link catalog__select-link-brand">Выбрать</div>
                    </div>
                    <div className="catalog__select-year">
                        <p className="catalog__select-label">Год</p>
                        <input className="catalog__select-input" type="hidden" />
                        <div className="catalog__select-link catalog__select-link-year">Выбрать</div>
                    </div>
                    <div className="catalog__select-price">
                        <p className="catalog__select-label">Цена</p>
                        <input className="catalog__select-input" type="hidden" />
                        <div className="catalog__select-link-wrapper">
                            <div className="catalog__select-link catalog__select-link-price">От</div>
                            <div className="catalog__select-link catalog__select-link-price">До</div>
                        </div>
                    </div>
                </div>
                <div className="catalog__best">
                    <ul className="catalog__best-list">
                        {catalogBest.map ((option) => (
                            <li className="catalog__best-item" key={option.id}>
                                <picture>
                                    <source
                                    type="image/webp"
                                    srcSet={`${images[option.imagedesktop ? (window.innerWidth > 360 ? option.imagedesktop : option.image):option.image]['webp']}, ${images[option.imagedesktop ? (window.innerWidth > 360 ? option.imagedesktop : option.image):option.image]['webp']} 2x`}
                                    />
                                    <img
                                    className="catalog__best-image"
                                    src={`${images[option.image]['jpg']}`}
                                    srcSet={`${images[option.image]['jpg']} 2x`}
                                    width="256"
                                    height="120"
                                    alt="Логотип Солид Банк"
                                    />
                                </picture>
                                <div className="catalog__best-info-wrapper">
                                    <span className="catalog__best-label">Лучшее предложение</span>
                                    <h3 className="catalog__best-title">{option.name}</h3>
                                    <p className="catalog__best-description">{option.description}</p>
                                    <span className="catalog__best-price">{window.innerWidth < 768 ? option.mobileprice : option.price}</span>
                                    <a href="/index" className="catalog__best-link">Подробнее</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="catalog__auto">
                    <ul className="catalog__auto-list">
                        {catalogAuto.map ((option) => (
                            <li className="catalog__auto-item" key={option.id}>
                                <picture>
                                    <source
                                    type="image/webp"
                                    srcSet={`${images[option.image]['webp']}, ${images[option.image]['webp']} 2x`}
                                    />
                                    <img
                                    className="catalog__auto-image"
                                    src={`${images[option.image]['jpg']}`}
                                    srcSet={`${images[option.image]['jpg']} 2x`}
                                    width="296"
                                    height="200"
                                    alt="Логотип Солид Банк"
                                    />
                                </picture>
                                <h3 className="catalog__auto-title">{option.name}</h3>
                                <span className="catalog__auto-country">{option.country}</span>
                                <div className="catalog__auto-price-wrapper">
                                    <span className="catalog__auto-price">{option.price}</span>
                                    <a href="/index" className="catalog__auto-link">Подробнее</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="catalog__auto-all">Показать все машины</button>
                    <p className="catalog__auto-form">Не нашли автомобиль у нас, но нужен автокредит? <a className="catalog__auto-form-link" href="/index">Перейдите к форме заявки</a></p>
                </div>
            </div>
        </section>
    );
}