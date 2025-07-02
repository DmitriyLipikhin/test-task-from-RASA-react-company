import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <div className="footer__social-wrapper footer__social-wrapper-country">
            <a href="tel:8 800 775-56-06" className="footer__social-link-tel">
              8 800 775-56-06
            </a>
            <p className="footer__social-description">
              Для звонков по России (бесплатно)
            </p>
          </div>
          <div className="footer__social-wrapper footer__social-wrapper-card">
            <a href="tel:8 495 232-37-23" className="footer__social-link-tel">
              +7 495 232-37-23
            </a>
            <p className="footer__social-description">
            Для блокировка карт (круглосуточно)
            </p>
          </div>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link--tg"
                href="./index.html"
              >
                <span className="visually-hidden">Телеграм</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link--vk"
                href="./index.html"
              >
                <span className="visually-hidden">Вконтакте</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link--classmates"
                href="./index.html"
              >
                <span className="visually-hidden">Одноклассники</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link footer__social-link--twitter"
                href="./index.html"
              >
                <span className="visually-hidden">Твиттер</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer__nav-accordion-list">
          <li className="footer__nav-accordion-item"><h3 className="footer__nav-accordion-title">Частным лицам</h3></li>
          <li className="footer__nav-accordion-item"><h3 className="footer__nav-accordion-title">Бизнесу</h3></li>
          <li className="footer__nav-accordion-item"><h3 className="footer__nav-accordion-title">О банке</h3></li>
          <li className="footer__nav-accordion-item"><h3 className="footer__nav-accordion-title">Дополнительные пункты</h3></li>
        </ul>
        <div className="footer__nav">
          <div className="footer__nav-wrapper footer__nav-wrapper-individuals">
            <h3 className="footer__nav-title">Частным лицам</h3>
            <ul className="footer__nav-item">
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Банковские карты
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Кредиты
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Вклады
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Ипотека
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Страхование
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Сейфовые ячейки
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Открытие счетов
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Обмен валюты
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Переводы
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Маркетплейс
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav-wrapper footer__nav-wrapper-business">
            <h3 className="footer__nav-title">Бизнесу</h3>
            <ul className="footer__nav-item">
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Экспресс-МСБ
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Расчетно-кассовое обслуживание
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Онлайн резервирование счета
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Внешнеэкономическая деятельность
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Зарплатный проект
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Овердрафт
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Кредит
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Лизинг
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Депозиты
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Банковские гарантии
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Факторинг
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav-wrapper footer__nav-wrapper-bank">
            <h3 className="footer__nav-title">О банке</h3>
            <ul className="footer__nav-item">
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Новости
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Вакансии
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Офисы
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Инвестиционные услуги
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  О банке
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Реквизиты
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Тарифы
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Монеты
                </a>
              </li>
              <li className="footer__nav-list">
                <a href="./index.html" className="footer__nav-link">
                  Непрофильные активы
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__additional-link-wrapper">
            <a href="./index.html" className="footer__additional-link">FATCA</a>
            <a href="./index.html" className="footer__additional-link">Страхование и другие услуги НФО</a>
            <a href="./index.html" className="footer__additional-link">Общие условия предоставления банковских гарантий в АО «Солид Банк»</a>
            <a href="./index.html" className="footer__additional-link">Памятки по финансовой безопасности</a>
            <a href="./index.html" className="footer__additional-link">Обеспечение защиты прав потребителей финансовых услуг</a>
            <a href="./index.html" className="footer__additional-link">Методика определения справедливой стоимости финансовых инструментов</a>
            <a href="./index.html" className="footer__additional-link">Политика в отношении обработки персональных данных</a>
            <a href="./index.html" className="footer__additional-link">Лица, ответственные за сведения на сайте</a>
            <a href="./index.html" className="footer__additional-link">Аудиторская компания</a>
            <a href="./index.html" className="footer__additional-link">Надзорные органы</a>
            <a href="./index.html" className="footer__additional-link">Информация о процентных ставках по договорам банковского вклада с физическими лицами</a>
            <a href="./index.html" className="footer__additional-link">Информация, связанная с совершением Банком действий, предусмотренных пунктом 5.6 статьи 7 ФЗ N 115</a>
        </div>
        <div className="footer__copyright-wrapper">
            <p className="footer__copyright">© 2004-2021, АО «Солид Банк» , официальный сайт, генеральная лицензия ЦБ РФ № 1329.</p>
            <p className="footer__copyright-site">Разработка сайта - <a href="./index.html" className="footer__copyright-link">RASA</a></p>
        </div>
      </div>
    </footer>
  );
}
