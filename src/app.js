

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
    { route: ['register']
    , name: 'register'
    , moduleId: 'pages/register/component'
    , nav: false, title:'Register'
    }
  ,
  ,
    { route: ['about']
    , name: 'about'
    , moduleId: 'pages/about/component'
    , nav: true,
      title:'About Us'
    }
  ,
  ,
    { route: ['media']
    , name: 'media'
    , moduleId: 'pages/media/component'
    , nav: true,
      title:'Media'
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
    config.title = 'Home'

    config.map(routes)

    config.mapUnknownRoutes(() => 'pages/main/component')

    this.router = router
  }
}