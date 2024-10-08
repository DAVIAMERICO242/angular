import { Component, EventEmitter, Input, Output, OutputEmitterRef } from '@angular/core';
import { City, GlobalService} from '../../../../services/GlobalService';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  public cities:City[] | undefined= undefined;

  constructor(private globalService:GlobalService){//herdado do componente pai
    this.globalService.city$.subscribe(city => {
      this.cities= city; // Atualiza o valor local para refletir na UI
    });
  }

  public changeCidade(){
    this.globalService.changeCity([])
  }

  ngOnInit(): void {
    console.log("CRIANÇA MONTADA")
    
  }

  childMethod(){
    
  }

}
