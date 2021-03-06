import './Support.scss'

export default function Support() {
   return (
      <div className="support">

         <div className="support__container wrapper">
            <div className="support__phone">
               <a href="tel:88005500500">8 800 55-00-500</a>
            </div>

            <div className="support__icon">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.5 28">
                  <g transform="translate(-2 -4)">
                     <ellipse cx="1.5" cy="2" rx="1.5" ry="2" transform="translate(12 16)"/>
                     <circle cx="2" cy="2" r="2" transform="translate(20 16)"/>
                     <path
                        d="M30,12.75H28.206A9.625,9.625,0,0,0,18.625,4h-1.75A9.625,9.625,0,0,0,7.25,12.75H5.5A3.5,3.5,0,0,0,2,16.25v3.5a3.5,3.5,0,0,0,3.5,3.5H9V13.625A7.875,7.875,0,0,1,9.429,11.1l.131.079A21.875,21.875,0,0,0,21.145,14.5H26.5v9.625a3.5,3.5,0,0,1-3.5,3.5h-.122A3.5,3.5,0,0,0,19.5,25H16a3.5,3.5,0,1,0,0,7h3.5a3.5,3.5,0,0,0,3.377-2.625H23a5.25,5.25,0,0,0,5.25-5.25V23.25H30a3.5,3.5,0,0,0,3.5-3.5v-3.5A3.5,3.5,0,0,0,30,12.75ZM7.25,21.5H5.5a1.75,1.75,0,0,1-1.75-1.75v-3.5A1.75,1.75,0,0,1,5.5,14.5H7.25ZM19.5,30.25H16a1.75,1.75,0,0,1,0-3.5h3.5a1.75,1.75,0,0,1,0,3.5ZM10.479,9.687l-.306-.192a7.875,7.875,0,0,1,6.7-3.745h1.75a7.875,7.875,0,0,1,7.822,7h-5.3A20.125,20.125,0,0,1,10.479,9.687ZM31.75,19.75A1.75,1.75,0,0,1,30,21.5H28.25v-7H30a1.75,1.75,0,0,1,1.75,1.75Z"
                        transform="translate(0)"/>
                  </g>
               </svg>
            </div>

            <div className="support__link">
               <a target="_blank" rel="noreferrer" href="https://help.home.megafon.ru">Поддержка
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.9" height="15.55" viewBox="0 0 9.9 15.55">
                     <g id="Сгруппировать_378" data-name="Сгруппировать 378" transform="translate(-12521 -1887.9)">
                        <rect id="Прямоугольник_156" data-name="Прямоугольник 156" width="11" height="3"
                              transform="translate(12523.121 1887.9) rotate(45)" fill="var(--mf-blue)"/>
                        <rect id="Прямоугольник_157" data-name="Прямоугольник 157" width="11" height="3"
                              transform="translate(12521 1901.328) rotate(-45)" fill="var(--mf-blue)"/>
                     </g>
                  </svg>
               </a>
            </div>
         </div>

      </div>
   )
}