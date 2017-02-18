import { useView } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
export class MancationLogin{
  constructor(){
    this.style = style
  }
}