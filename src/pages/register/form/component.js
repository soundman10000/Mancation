import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('register-form')
export class RegisterForm{
  constructor(){
    this.style = style
  }
}