import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('main-mancation-information')
export class MainMancationInformation{
  constructor(){
    this.style = style
  }
}