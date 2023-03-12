import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
        <div className="hero__container container">
          <div className="hero__left">
            <h1 className="hero__title">Зарабатывайте <br /> больше <br /><span className="hero__title-gradient">с WELBEX</span></h1>
            <p className="hero__subtitle">Развиваем и контролируем <br /> продажи за вас</p>
          </div>
          <div className="hero__right">
            <div className="hero__usp">
              <p className="hero__usp-title">Вместе с <span className="hero__usp-title-gradient">бесплатной <br /> консультацией </span> мы дарим:</p>
              <ul className="hero__usp-list hero__usp-list--desktop">
                <li className="hero__usp-item"><span className="hero__usp-item-name">Виджеты</span><span className="hero__usp-item-text">30 готовых <br /> решений</span></li>
                <li className="hero__usp-item"><span className="hero__usp-item-name">Dashboard</span><span className="hero__usp-item-text">с показателями <br /> вашего бизнеса</span></li>
                <li className="hero__usp-item"><span className="hero__usp-item-name">Skype Аудит</span><span className="hero__usp-item-text">отдела продаж <br /> и CRM системы</span></li>
                <li className="hero__usp-item"><span className="hero__usp-item-name">35 дней</span><span className="hero__usp-item-text">использования <br /> CRM</span></li>
              </ul>
              <ul className="hero__usp-list hero__usp-list--mobile">
                <li className="hero__usp-item">Skype аудит</li>
                <li className="hero__usp-item">30 виджетов</li>
                <li className="hero__usp-item">Dashboard</li>
                <li className="hero__usp-item">Месяц аmoCRM</li>
              </ul>
            </div>
            <button className="hero__button">Получить консультацию</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;