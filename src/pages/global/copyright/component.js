import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('copyright')
export class Copyright{
  constructor(){
    this.style = style
  }
}