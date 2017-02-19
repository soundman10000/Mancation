import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

const beerImage = './../../emoji-doge.png'

@useView('./view.html')
@customElement('login-header')
export class LoginHeader{
  constructor(){
    this.style = style
    this.state = {}
    this.state.beerImage = beerImage
  }
}