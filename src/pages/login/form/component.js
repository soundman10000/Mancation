import { useView, customElement, inject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator'
import style from './style.pcss'

@useView('./view.html')
@customElement('login-form')
@inject(EventAggregator)
export class LoginForm{
  constructor(emitter){
    this.emitter = emitter
    this.style = style
  }

  Login(){
    alert('login')
  }
}