import React, { useState } from 'react'
import './message.scss'
import { Anchor } from './message-styles';

const message = () => {
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsFlapOpen(!isFlapOpen);
  };


  return (
    <div className="container">
      <div className={`envelope-wrapper ${isFlapOpen ? 'flap' : ''}`} onClick={handleEnvelopeClick}>
        <div className="envelope" >
          <div className="letter">
            <div className="text">
              <strong>Dear Aly,</strong>
              <p>
                Happy Valentine's Day, Babs! Wala naman masyado, I just want to thank you for still replying sa mga messages ko kahit maraming beses ng hindi kareply reply mga sinasabi ko. Buti at di ka pa rin nagrereact ng "🍒", indication kasi to na di ka na magrereply eh. Uy pero ano ah, sana di labag sa loob mo na replyan at kausapin ako 🥺 just kidding. Pero seryoso, sobrang naaappreciate ko to kaya maraming salamat.
              </p>
              <p>
                Salamat din sa pakikinig ng mga kwento at rants ko minsan. Pag may mga gusto kang ikwento, ikwento mo lang din, kahit anong rants pa, makikinig ako.
              </p>
              <p>
                Ayun lang naman.
              </p>
              <p>
                Enjoy ka sa bakasyon mo dyan at wag magpaka stress, please. Dapat masulit mo yan!
              </p>
              <p>
                PS. Bumalik ka 🙄
              </p>
              <p>
                PPS. Di ko nakalimutang na Babs ang tawag ko sayo bago Madam. No, no, noooo.
              </p>
              <p>
                PPS. Tsaka na chocolates mo kapag nagkita na lang tayo. Balik ka muna.
              </p>
              <p>
                PPPS. And for the mean time, ito muna flowers mo. <a href="/flowers" onClick={handleEnvelopeClick}>Click mo to.</a>
              </p>
            </div>
          </div>
        </div>
        <div className="heart"></div>
      </div>
    </div>
  )
}

export default message