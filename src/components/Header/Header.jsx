import React from 'react';
import logo from '../../assets/img/logo.svg';

import icon_telegram from '../../assets/img/icons/telegram.svg';
import icon_viber from '../../assets/img/icons/viber.svg';
import icon_whatsapp from '../../assets/img/icons/whatsapp.svg';



const Header = () => {
    return (
        <header className="header">
        <div className="header__container container">
            <a className="header__logo" href="index.html">
                <img src={logo} alt='logo' />
            </a>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a className="header__nav-link" href="##">Услуги</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="##">Виджеты</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="##">Интеграции</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="##">Кейсы</a></li>
              <li className="header__nav-item header__nav-item--hidden-mobile"><a className="header__nav-link" href="##">Сертификаты</a></li>
            </ul>
          </nav>
          <div className="header__contacts"><a className="header__tel" href="tel:+75555555555">+7 555 555-55-55</a>
            <ul className="header__social">
                <li className="header__social-item">
                    <a className="header__social-link" href="##">
                        <img src={icon_telegram} alt='icon-telegram' />
                    </a>
                </li>
                <li className="header__social-item">
                    <a className="header__social-link" href="##">
                        <img src={icon_viber} alt='icon-viber' />
                    </a>
                </li>
                <li className="header__social-item">
                    <a className="header__social-link" href="##">
                        <img src={icon_whatsapp} alt='icon-whatsapp' />
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </header>
    );
};

export default Header;