import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('login-header')
export class LoginHeader{
  constructor(){
    this.style = style
  }
}