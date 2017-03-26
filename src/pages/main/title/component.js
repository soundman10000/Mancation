import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('main-mancation-title')
export class MainMancationTitle{
  constructor(){
    this.style = style
  }
}