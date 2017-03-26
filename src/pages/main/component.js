import { useView, inject } from 'aurelia-framework'
import style from './style.pcss'
import { Router } from 'aurelia-router'

@useView('./view.html')
@inject(Router)
export class Mancation{
  constructor(router){
    this.style = style
    this.router = router
  }
}