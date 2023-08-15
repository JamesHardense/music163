import React from "react"
import { Redirect } from "react-router-dom"

const JMDiscover = React.lazy(() => import('@/pages/discover'))
const JMRecommend = React.lazy(() =>
  import('@/pages/discover/child-pages/recommend')
)
const JMToplist = React.lazy(() =>
  import('@/pages/discover/child-pages/toplist')
)
const JMSongs = React.lazy(() => import('@/pages/discover/child-pages/songs'))
const JMDjradio = React.lazy(() =>
  import('@/pages/discover/child-pages/djradio')
)
const JMArtist = React.lazy(() => import('@/pages/discover/child-pages/artist'))
const JMAlbum = React.lazy(() => import('@/pages/discover/child-pages/album'))
const JMMine = React.lazy(() => import('@/pages/mine'))
const JMFriend = React.lazy(() => import('@/pages/friend'))

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: JMDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: JMRecommend
      },
      {
        path: "/discover/ranking",
        component: JMToplist
      },
      {
        path: "/discover/songs",
        component: JMSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: JMDjradio
      },
      {
        path: "/discover/artist",
        component: JMArtist
      },
      {
        path: "/discover/album",
        component: JMAlbum
      },
      {
        path: "/discover/player",
        // component: Player
      }
    ]
  },
  {
    path: "/mine",
    component: JMMine
  },
  {
    path: "/friend",
    component: JMFriend
  },
]

export default routes