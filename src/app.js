

const routes =
  [ { route: ['login']
    , name: 'login'
    , moduleId: 'pages/login/component'
    , nav: true, title:'Login'
    }
  ,
    { route: ['user/:id']
    , name: 'user'
    , moduleId: 'pages/user/component'
    , nav: false, title:'User'
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