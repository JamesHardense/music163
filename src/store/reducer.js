import { combineReducers } from "redux-immutable"

import { reducer as themeHeaderReducer } from '@/components/app-header/store'
import { reducer as playerReducer } from '@/pages/player/store'
import { reducer as recommendReducer } from '@/pages/discover/child-pages/recommend/store'
import { reducer as toplistReducer } from '../pages/discover/child-pages/toplist/store'
import { reducer as songsReducer } from '../pages/discover/child-pages/songs/store'
import { reducer as loginReducer } from '@/components/theme-login/store'

const cRducer = combineReducers({
  recommend: recommendReducer,
  themeHeader: themeHeaderReducer,
  player: playerReducer,
  toplist: toplistReducer,
  songList: songsReducer,
  loginState: loginReducer,
})

export default cRducer