import { useView } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
export class Mancation{
  constructor(){
    this.style = style
  }
}