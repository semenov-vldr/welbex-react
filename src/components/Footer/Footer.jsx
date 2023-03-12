import React from 'react';

import icon_telegram from '../../assets/img/icons/telegram.svg';
import icon_viber from '../../assets/img/icons/viber.svg';
import icon_whatsapp from '../../assets/img/icons/whatsapp.svg';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__container container">
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-item"><span className="footer__menu-title">О компании</span></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Партнёрская программа</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Вакансии</a></li>
            </ul>
            <ul className="footer__menu-list footer__menu-list--menu">
              <li className="footer__menu-item footer__menu-item--title"><span className="footer__menu-title">Меню</span></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Расчёт стоимости</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Кейсы</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Услуги</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Благодарственные письма</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Виджеты</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Сертификаты</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Интеграции</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Блог на Youtube</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Наши клиенты</a></li>
              <li className="footer__menu-item"><a className="footer__menu-link" href="##">Вопрос / Ответ</a></li>
            </ul>
            <ul className="footer__menu-list footer__menu-list--contacts">
              <li className="footer__menu-item"><span className="footer__menu-title">Контакты</span></li>
              <li className="footer__menu-item"><a className="footer__menu-link footer__menu-link--tel" href="tel:+75555555555">+7 555 555-55-55</a></li>
              <li className="footer__menu-item">
                <ul className="footer__social">
                  <li className="footer__social-item"><a className="footer__social-link" href="##"><img src={icon_telegram} alt="icon-telegram"/></a></li>
                  <li className="footer__social-item"><a className="footer__social-link" href="##"><img src={icon_viber} alt="icon-viber"/></a></li>
                  <li className="footer__social-item"><a className="footer__social-link" href="##"><img src={icon_whatsapp} alt="icon-whatsapp"/></a></li>
                </ul>
              </li>
              <li className="footer__menu-item"><span className="footer__menu-address">Москва, Путевой проезд 3с1, к 902</span></li>
            </ul>
          </nav>
          <div className="footer__copy">
            <p>©WELBEX 2022. Все права защищены.</p><a href="##">Политика конфиденциальности !!!</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;