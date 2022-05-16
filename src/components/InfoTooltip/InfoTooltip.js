import React from 'react';

import succsessIcon from '../../images/success.svg'
import failIcon from '../../images/fail.svg'

import "./InfoTooltip.css";

function InfoTooltip({isOpen, onClose, onSuccess, tooltipStatus}) {

  return (
  <>
    <section className={`popup-overlay ${isOpen ? "popup-overlay_active" : ""}`} onClick={
      () => (tooltipStatus.status ? onSuccess() : onClose())
    }></section>
    <section className={`popup ${isOpen ? "popup_active" : ""}`}>
        <div className="popup__window">
        <button className="popup__close-button" type="button" onClick={
           () => (tooltipStatus.status ? onSuccess() : onClose())
          }></button>
          <div className="popup__form">
            <img className="popup__icon popup__icon_state_success-message" src={ !tooltipStatus.status ? failIcon : succsessIcon } alt={ tooltipStatus.altCaption } />
            <p className="popup__form-caption">{ tooltipStatus.mainMessage }</p>
          </div>
        </div>
    </section>
  </>
  );
}

export default InfoTooltip;
