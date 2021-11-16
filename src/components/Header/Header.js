import React from 'react'
import './Header.scss'
import head_banner_mob from '../../img/pic/head_banner_mob.png'
import head_banner_tap from '../../img/pic/head_banner_tap.png'
import head_banner_desctop from '../../img/pic/head_banner_desctop.png'

export default function Header() {
   return (
      <header className="header">
         <div className="wrapper">
            <div className="section-row">
               <div className="header__text">
                  <h1>
                     Домашний интернет,
                     <nobr>ТВ и связь</nobr>
                  </h1>
                  <p>В тарифах «Объединяй!»</p>
                  <div className="header__btns">
                     <button
                             type="button"
                             className="btn btn-fiolet"
                             data-view="first_banner"
                             data-target="#order"
                             data-toggle="modal"
                     >Подключить
                     </button>
                     <span data-target="#for-their" data-toggle="modal"
                           className="header__about">Подробнее</span>
                  </div>
               </div>
               <div className="header__img-wrapp">
                  <picture>
                     <source srcSet={head_banner_mob} media="(max-width: 602px)"/>
                     <source srcSet={head_banner_tap} media="(max-width: 935px)"/>
                     <img className="header__img" src={head_banner_desctop} alt="head_banner"/>
                  </picture>
               </div>
            </div>
         </div>
      </header>
   )
}