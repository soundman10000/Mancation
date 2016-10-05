import { useView, customElement, inject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator'
import style from './style.pcss'

@useView('./view.html')
@customElement('login-container')
@inject(EventAggregator)
export class LoginContainer{
  constructor(emitter){
    this.emitter = emitter
    this.style = style
  }
}