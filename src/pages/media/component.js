import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('mancation-media')
export class Media{
  constructor(){
    this.style = style
  }
}