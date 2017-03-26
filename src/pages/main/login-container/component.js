import { useView, customElement, inject } from 'aurelia-framework'
import style from './style.pcss'
import { Router } from 'aurelia-router'

@customElement('main-login-container')
@useView('./view.html')
@inject(Router)
export class MainLoginContainer{
  constructor(router){
    this.router = router
    this.style = style
  }
}