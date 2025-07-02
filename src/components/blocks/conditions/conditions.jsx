import React from "react";
import "./conditions.scss";

export default function Conditions () {
    return (
        <section className="conditions">
            <div className="conditions__container">
                <h2 className="conditions__title">Общие условия</h2>
                <dl className="conditions__list">
                    <div className="conditions__item">
                        <dt className="conditions__label">Срок</dt>
                        <dd className="conditions__description">от 6 месяцев до 6 лет.</dd>
                    </div>
                    <div className="conditions__item">
                        <dt className="conditions__label">Сумма</dt>
                        <dd className="conditions__description">от 200 000 до 5 000 000 руб.</dd>
                    </div>
                    <div className="conditions__item">
                        <dt className="conditions__label">Годовая процентная  ставка:</dt>
                        <dd className="conditions__description">от 7,5 % *.</dd>
                    </div>
                    <p className="conditions__label">Возможность приобретения авто у частного лица</p>
                </dl>
                <a className="conditions__link" href="/index.html">Смотреть полные условия кредита</a>
            </div>
        </section>
    );
}