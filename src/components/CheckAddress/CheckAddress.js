import './CheckAddress.scss'
import Form from "./components/Form";
import {useEffect, useState} from "react";
import Offer from "./components/Offer";
import $ from "jquery";
import Success from "./components/Success";
import {connect} from "react-redux";
import showModal from "../../redux/actions/showModal";
import {onUniteSwitch} from "../../redux/reducers/tariffsReducer";
import {setDataOrder} from "../../redux/reducers/orderReducer";
import {api} from "../../api";
import {analyticsEvent} from "../../analytics";


function CheckAddress(props) {

   useEffect(() => {
      $(inputAddress).autocomplete({
         width: 'auto',
         minChars: 1,
         deferRequestBy: 200,
         serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
         type: 'POST',

         onSelect(suggestion) {
            setIsShowLabel(false)

            setAddress({
               house_guid: suggestion.data.aoguid,
               address: suggestion.data.address
            })
         }
      })

      props.onUniteSwitch(true)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const inputAddress = '#addressCheck'
   const [address, setAddress] = useState({})
   const [result, setResult] = useState(null)
   const [isShowLabel, setIsShowLabel] = useState(false)

   function clearInput() {
      $(inputAddress).val('')
   }

   function resultNull() {
      setResult(null)
      setAddress({})
      clearInput()
   }

   function submit(e) {
      e.preventDefault()
      analyticsEvent('click_button_address')

      if (address.house_guid) {
         props.setDataOrder({
            clientAddress: address.address,
            house_guid: address.house_guid
         })
         return api('https://api.wifire.ru/api/address/check_dadata_address', address)
            .then(data => setResult(data.result))
      }

      setIsShowLabel(true)
   }

   const eventLabelDefault = {
      order: `click_button_order_${props.tariff.dataView}_ntv`,
      send: `click_button_send_${props.tariff.dataView}_ntv`
   }

   function showModalOrder(eventLabel = eventLabelDefault) {
      props.showModal({modal: 'order', bool: true})
      props.setDataOrder({
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         equipments: props.tariff.equipments,
         eventLabel: eventLabel
      })
   }


   return (
      <section className="unite-wrapper">
         <div className="unite unite-check-address wrapper">
            <div className="unite-address">

               <Form
                  result={result}
                  address={address}
                  setAddress={setAddress}
                  isShowLabel={isShowLabel}
                  setIsShowLabel={setIsShowLabel}
                  submit={submit}
               />

               {result === 1 &&
                  <Success
                     resultNull={resultNull}
                     showModalOrder={showModalOrder}
                     address={address.address}
                  />
               }

               {result === 0 &&
                  <Offer
                     resultNull={resultNull}
                     showModalOrder={showModalOrder}
                     address={address.address}
                  />
               }

            </div>
         </div>
      </section>
      // <!--?? ????????????, ???? ????????????????????, ?? 4-->
   )
}


export default connect(
   state => ({
      tariff: state.tariffs.find(tariff => tariff.id === 'around')
   }),
   {
      showModal,
      onUniteSwitch,
      setDataOrder,
   }
)(CheckAddress)