import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('login-copyright')
export class LoginCopyright{
  constructor(){
    this.style = style
  }
}