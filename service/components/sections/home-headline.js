import React, { useEffect, forwardRef } from 'react';
import { useTranslation } from '../../hooks/translation';
import { usePrice } from '../hooks/usePrice';

const HomeHeadline = forwardRef((
  {
    launchMode,
    modePreSales,
    setShowModal,
  },
  ref
) => {
  const [price, getPrice] = usePrice();
  const { t } = useTranslation();

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <>
      <section
        ref={ref}
        id="blindText"
        className="section-blindText invert-color"
      >
        <h2>{t('home:headline.title')}</h2>
        <div className="container">
          <div className="wrapper-sales-for">
            <div className="card-view the-balancer">
            <h3 style={{ fontWeight: 'bold' }}>{t('common:nowOnUnisap')}</h3>
              <div className="containerImg">
                <img
                  src="/assets/images/HPR_Favicon.svg"
                  alt={t('home:headline.titleTicket')}
                />
                <p>
                  ${launchMode ? price
                    : modePreSales ? ' 0.30'
                      : ' 0.30'
                  }
                </p>
                <p className="label-remember">
                  {t('home:headline.txtDownNum')}
                </p>
              </div>
              <div className="btn-ticket" onClick={() => setShowModal(true)}>
                {modePreSales || launchMode && <span>{t('home:banner.button')}</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="container help-area-padding">
          <div className="helper-test">
            <div className="wrapper-test">
              <p className="special">
                {t('home:headline.beforeInfoTop')}
              </p>
              <p className="special">{t('home:headline.beforeInfoBottom')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeHeadline;
