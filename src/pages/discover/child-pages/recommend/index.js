import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style'

import TopBanners from './c-cpns/top-banners'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotArtist from './c-cpns/hot-artist'

function JMRecommend (props) {
  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <TopBanners />
      <Content className="w980">
        {/* 主体推荐页左侧 */}
        <RecommendLeft>
          {/* 热门推荐 */}
          <HotRecommend history={props.history} />
          <NewAlbum />
          <RecommendRanking to={props.history} />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotArtist />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(JMRecommend)