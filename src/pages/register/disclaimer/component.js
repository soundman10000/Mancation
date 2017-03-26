import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('register-disclaimer')
export class RegisterDisclaimer{
  constructor(){
    this.style = style
  }
}