

const routes =
  [ { route: ['login']
    , name: 'login'
    , moduleId: 'pages/login/component'
    , nav: true, title:'Login'
    }
  ,
    { route: ['index']
    , name: 'index'
    , moduleId: 'pages/index/component'
    , nav: false, title:'Index'
    }
  ,
    { route: ['']
    , redirect: 'login'
    }
  ]

export class App {
  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'Form'

    config.map(routes)

    config.mapUnknownRoutes(() => 'pages/login/component')

    this.router = router
  }
}