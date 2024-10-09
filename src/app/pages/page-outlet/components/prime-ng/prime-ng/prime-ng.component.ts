import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [MultiSelectModule,FormsModule],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.css',
  styles:[`
          :host ::ng-deep .ng-star-inserted {
              font-size: 12px !important;
          }

          :host ::ng-deep .ng-star-inserted {
              font-size 12px !important
          }
    `]
})
export class PrimeNgComponent {
  public data = [{
    nome:'DAVI AMÉRICO RODRIGUES MESQUITA',
    age:25
  },{
    nome:'DEBORA HELEN FERNANDES MARTINS',
    age:23
  }]

  public selectedRows!:{nome:string;age:number}[];

  public logChange(value:{nome:string;age:number}[]){
    console.log(value)
  }
}
