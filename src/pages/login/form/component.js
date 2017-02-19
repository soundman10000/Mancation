import { useView, customElement, inject } from 'aurelia-framework'
import { Router } from 'aurelia-router'
import { EventAggregator } from 'aurelia-event-aggregator'
import style from './style.pcss'

@useView('./view.html')
@customElement('login-form')
@inject(EventAggregator, Router)
export class LoginForm{
  constructor(emitter, router){
    this.emitter = emitter
    this.style = style
    this.router = router
  }

  Login(){
    this.router.navigate('index')
  }
}