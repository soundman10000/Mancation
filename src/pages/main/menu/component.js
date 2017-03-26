import { useView, bindable, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('mancation-navigation')
export class MancationNavigation{
  @bindable router
  constructor(){
    this.style = style
  }
}