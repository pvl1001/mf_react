import './ModalAlmond.scss'
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import showModal from "../../../redux/actions/showModal";
import Banner from "./components/Banner";
import AlmondCard from "./components/AlmondCard";
import {templateEqAlmond} from "../../../redux/reducers/tariffsReducer";
import optionSwitch from "../../../redux/actions/optionSwitch";
import {sumTotalPrice} from "../../../redux/actions/sumTotalPrice";
import {changeAlmondTotalPrice} from "../../../redux/actions/almond";
import {setDataOrder} from "../../../redux/reducers/orderReducer";

function ModalAlmond(props) {
   if (props.show) {

      const banners = [
         {
            "id": "easy",
            "img": "pic_1",
            "alt": "Умный дом",
            "title": "Умный <span>дом</span>",
            "text": "Сервис, который заботится о самом главном: безопасности и удобстве вашего дома. Все устройства\n                     подключаются к роутеру и образуют единую экосистему, которая реагирует на всё, что происходит дома."
         },
         {
            "id": "smartphone",
            "img": "pic_4",
            "alt": "Оповещения из дома",
            "title": "Оповещения <nobr><span>из дома</span></nobr>",
            "text": "Установите датчики открытия двери, протечки воды или движения и получите push-уведомление на\n                     смартфон при срабатывании, где бы вы ни находились. Посмотрите прямую трансляцию с камеры и\n                     убедитесь, что дома всё в порядке."
         },
         {
            "id": "their",
            "img": "pic_3",
            "alt": "Родительский контроль",
            "title": "Родительский <br><span>контроль</span>",
            "text": "Управляйте доступом всей семьи к интернету и легко контролируйте подключённые к сети устройства."
         },
         {
            "id": "around",
            "imgMob": "pic_5_mob",
            "img": "pic_5",
            "alt": "Интернет во всём доме",
            "title": "Интернет <nobr><span>во всём доме</span></nobr>",
            "text": "Один роутер покрывает площадь до 120 кв. м. Для покрытия большей площади объедините несколько\n                     роутеров Almond в единую сеть без проводов."
         },
         {
            "id": "habits",
            "img": "pic_2",
            "alt": "Всегда на связи",
            "title": "Всегда <nobr><span>на связи</span></nobr>",
            "text": "Если в доме начнутся перебои с электричеством, роутер Almond 3S продолжит работать благодаря\n                     встроенному аккумулятору и сохранит доступ в интернет, подключившись к мобильной сети LTE."
         }
      ]

      const i = props.showModalTariff && props.tariffs
         .find(tariff => tariff.id === props.tariff).equipments
         .map(eq => eq.id)
         .indexOf('eq-almond')

      const payload = {id: props.tariff, index: i}

      const almond = props.showModalTariff
         ? props.tariffs.find(tariff => tariff.id === props.tariff)
            .equipments.find(eq => eq.id === 'eq-almond')
         : props.equipments.find(eq => eq.id === 'eq-almond')

      function onHide() {
         if (props.showModalTariff && isEquipments()) {
            props.changeAlmondTotalPrice(payload)
            props.optionSwitch({...payload, checked: false})
            props.sumTotalPrice(payload)
         }

         props.showModal({modal: 'almond', bool: false})
      }

      function isEquipments() {
         return !props.tariffs.find(tariff => tariff.id === props.tariff).equipments[i].totalPrice
      }

      function addToTariff() {
         props.optionSwitch({...payload, checked: true})
         props.changeAlmondTotalPrice(payload)
         props.sumTotalPrice(payload)
         props.showModal({modal: 'almond', bool: false})
      }

      function showModalOrder() {
         props.showModal({modal: 'order', bool: true})
         props.setDataOrder({
            tariffName: props.tariffForTheir.name,
            tariffId: props.tariffForTheir.tariffId,
            equipments: almond.dataView,
            eventLabel: {
               order: `click_button_order_${almond.dataView}`,
               send: `click_button_${almond.dataView}_send_equipment`
            }
         })
      }

      function showModalChoiceRouter() {
         props.showModal({modal: 'choiceRouter', bool: true})
      }


      return (
         <Modal
            centered
            animation={false}
            className="modalAlmond"
            show={props.show}
            onHide={onHide}
         >
            <button type="button" className="modal-close" onClick={onHide}/>
            <h2 className="modalAlmond__banners-title modalAlmond__banners-title_head d-mobile">
               Роутер Almond
            </h2>

            <div className="modalAlmond__banners">
               <h2 className="modalAlmond__banners-title modalAlmond__banners-title_head">Роутер Almond</h2>

               {banners.map(banner =>
                  <Banner key={banner.id} banner={banner}/>
               )}

            </div>
            <div className="modalAlmond__price">
               <h3 className="modalAlmond__price-title">Купить Almond</h3>

               <div className="modalAlmond__price-router">
                  <h4 className="modalAlmond__price-router-title">Выберите роутер</h4>

                  <span
                     className="modalAlmond__price-link"
                     onClick={showModalChoiceRouter}>
                     Какой роутер мне подойдет?
                  </span>

                  <div className="modalAlmond__price-cards">
                     {templateEqAlmond.map((router, i) =>
                        i <= 1 && <AlmondCard key={router.id}
                                              card={router}
                                              almond={almond}
                                              index={i}/>
                     )}
                  </div>

               </div>

               <div className="modalAlmond__price-device">
                  <h4 className="modalAlmond__price-device-title">Выберите устройство</h4>

                  <div className="modalAlmond__price-cards">
                     {templateEqAlmond.map((sensor, i) =>
                        i >= 2 && <AlmondCard key={sensor.id}
                                              card={sensor}
                                              almond={almond}
                                              index={i}/>
                     )}
                  </div>
               </div>

               {almond.totalPrice &&
                  <div className="modalAlmond__price-price price">
                     <span className="new-price">{almond.totalPrice}</span>
                     <span>₽</span>
                     <span>в месяц</span>
                     {/*<div className="price__icon"/>*/}
                  </div>
               }

               {props.showModalTariff
                  ? <button
                     className="modalAlmond__price-btn btn"
                     disabled={!almond.totalPrice}
                     onClick={addToTariff}>
                     Добавить к тарифу
                  </button>

                  : <button
                     className="modalAlmond__price-btn btn"
                     onClick={showModalOrder}>
                     Отправить заявку
                  </button>
               }

            </div>
         </Modal>

      )
   }

   return null
}


export default connect(
   state => ({
      show: state.modals.almond.show,
      showModalTariff: state.modals.tariff.show,
      tariff: state.modals.tariff.props,
      tariffs: state.tariffs,
      equipments: state.equipments,
      tariffForTheir: state.tariffs.find(tariff => tariff.id === 'for-their')
   }),
   {
      showModal,
      optionSwitch,
      sumTotalPrice,
      changeAlmondTotalPrice,
      setDataOrder
   }
)(ModalAlmond)