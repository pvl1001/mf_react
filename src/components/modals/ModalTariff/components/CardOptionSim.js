import optionSwitch from "../../../../redux/actions/optionSwitch";
import {connect} from "react-redux";
import {counterSim} from "../../../../redux/actions/counterSim";
import showModal from "../../../../redux/actions/showModal";
import {sumTotalPrice} from "../../../../redux/actions/sumTotalPrice";

function CardOptionSim(props) {

   const payload = {id: props.id, index: props.idx}
   const showModalTariffAll = () => props.showModal( {modal: 'tariffAll', bool: true} )

   const handleSwitch = () => {
      props.optionSwitch( payload )
      props.sumTotalPrice( payload )
   }

   const handlerCounter = (name) => {
      props.counterSim( {id: props.id, index: props.idx, cnt: props.equipment.cnt, name} )
      props.sumTotalPrice( payload )
   }


   return (
      <li key={props.equipment.id}
          className="tariff-modal__dop-options-card dop-options-card">
         <div className="dop-options-card__sim">
            <p>SIM-карта с тарифом
               <span onClick={showModalTariffAll}> «Без переплат. Всё»</span> Скидка 40% на абонентскую плату
            </p>
            <div className="tariff-modal__counter counter">
               <div className="counter__minus" onClick={() => handlerCounter( 'minus' )}>&minus;</div>
               <input type="text" readOnly value={props.equipment.cnt}/>
               <div className="counter__plus" onClick={() => handlerCounter( 'plus' )}>+</div>
            </div>
         </div>

         <div className="dop-options-card__price">
            <div className="price">
               <span className="price__old">
                  {props.equipment.sumOldPrice || props.equipment.oldPrice} ₽
               </span>
               <span className="price__current">
                  {props.equipment.sumPrice || props.equipment.price}
               </span> <span> ₽</span>
               <span className="price__month"> в месяц</span>
            </div>

            <label className="switch">
               <input type="checkbox"
                      onChange={handleSwitch}
                      checked={props.equipment.switch}/>
               <span className="round"/>
            </label>
         </div>
      </li>
   )
}


const mapDispatchToProps = {
   showModal,
   optionSwitch,
   counterSim,
   sumTotalPrice
}

export default connect( null, mapDispatchToProps )( CardOptionSim )