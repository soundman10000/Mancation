import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('login-instructions')
export class LoginInstructions{
  constructor(){
    this.style = style
    this.state = {}
  }
}