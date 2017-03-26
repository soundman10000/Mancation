

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
    { route: ['main']
    , name: 'main'
    , moduleId: 'pages/main/component'
    , nav: false, title:'Mancation'
    }
  ,
    { route: ['']
    , redirect: 'main'
    }
  ]

export class App {
  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'Form'

    config.map(routes)

    config.mapUnknownRoutes(() => 'pages/main/component')

    this.router = router
  }
}