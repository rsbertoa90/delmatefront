import Vue from 'vue'


import {
  library
} from '@fortawesome/fontawesome-svg-core';

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import {
  faHandPointRight
}
from '@fortawesome/free-regular-svg-icons'

import {
  
  faList,
  faClock,
  faDollarSign,
  faPauseCircle,
  faPlay,
  faTrash,
  faChevronLeft,
  faChevronRight,
  faShoppingCart,
  faPhone,
  faDownload,
  faTruck,
  faBuilding,
  faHome,
  faArrowDown,
  faTimes,
  faBars,
  faSearch,
  faArrowLeft,
  faChevronDown,
  faAward,
  faUser,
  faUserCog,
  faPlus,
  faMinus,
  faChevronUp,
  faEnvelope,
  faCheckSquare,
  faMapMarkerAlt,
  faUserCheck,
  faMousePointer,
  faTh,
  faListUl,
  faArrowUp,
  faHandHoldingUsd,
  faCheck,
  faSignOutAlt,

} from '@fortawesome/free-solid-svg-icons'


library.add(faPauseCircle,faSignOutAlt,
  faUser,
  faTh,
  faListUl,
  faArrowUp,
  faHandHoldingUsd,
  faCheck,
  faMousePointer,
  faUserCheck,
  faHandPointRight,
  faMapMarkerAlt,
  faCheckSquare,
  faEnvelope,
  faPlus,
  faMinus,
  faUserCog,
  faAward,
  faList,
  faArrowLeft,
  faSearch,
  faBars,
  faClock,
  faDollarSign,
  faPlay,
  faTrash,
  faShoppingCart,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faPhone,
  faDownload,
  faHome,
  faTruck,
  faBuilding,
  faWhatsapp,
  faInstagram,
  faFacebook,
  faArrowDown,
  faTimes)

Vue.component('fa-icon', FontAwesomeIcon);