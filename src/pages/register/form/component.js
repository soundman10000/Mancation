import { useView, customElement, bindable } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('register-form')
export class RegisterForm{
  @bindable user
  constructor(){
    this.style = style
  }
}