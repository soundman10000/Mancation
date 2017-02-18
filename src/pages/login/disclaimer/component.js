import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('login-disclaimer')
export class LoginDisclaimer{
  constructor(){
    this.style = style
  }
}