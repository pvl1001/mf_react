import Collapse from "react-bootstrap/Collapse";
import React from "react";
import * as PropTypes from "prop-types";


export default function TvChannelsGroup(props) {

   let classNameChannel = null

   function isChannelGreen(premiumGroup, premiumChannel) {
      const findGroup = props.tvChannels.find( tvGroup => tvGroup.group === premiumGroup )
      if (findGroup) {
         return findGroup.groupData.find( el => el.name === premiumChannel )
            ? classNameChannel = 'collapse-channel__group-channelName text-green'
            : classNameChannel = 'collapse-channel__group-channelName'
      }
   }


   return (
      <li className="collapse-channel__channel-group">

         <a className="collapse-channel__group-toggle">

            <div onClick={props.onClick}
                 aria-controls={`tv-channels-${props.i}`}
                 aria-expanded={props.collapse.collapseChannels[props.i]}
                 className="collapse-channel__group-wrapper">
               <span className="collapse-channel__group-name">{props.tv.group}</span>
               <span className="collapse-channel__group-count">
                  {props.tvChannels[props.i] ? props.tvChannels[props.i].groupData.length : 0}
               </span>
            </div>

         </a>

         <Collapse in={props.collapse.collapseChannels[props.i]}>

            <ul id={`tv-channels-${props.i}`} className="collapse-channel__group-list">

               {props.tv.groupData.map( channel => (
                  <li key={channel.id}
                      className={isChannelGreen( props.tv.group, channel.name )}>
                     {channel.name}
                  </li>
               ) )}

            </ul>

         </Collapse>

      </li>)
}


TvChannelsGroup.propTypes = {
   onClick: PropTypes.func,
   i: PropTypes.number,
   tv: PropTypes.object,
   collapse: PropTypes.object,
   tvChannels: PropTypes.array,
}