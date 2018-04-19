import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitas: string[] =[
    "Receita 1",
    "Receita 2",
    "Receita 3",
    "Receita 4"
  ]

  mostrarReceita: boolean=true;

  constructor() { }

  ngOnInit() {
  }

  public esconderReceita() {
    this.mostrarReceita = false;
  }


public mostrarReceitas() {
  this.mostrarReceita = true;
}


}
