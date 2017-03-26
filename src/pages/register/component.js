import { useView } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
export class MancationRegister{
  constructor(){
    this.style = style
    this.data = {
      user: {}
    }
  }

  Register(){
  }
}