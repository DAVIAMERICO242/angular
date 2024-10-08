import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { City, GlobalService} from '../../../../services/GlobalService';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-dad',
  standalone: true,
  imports: [ChildComponent,CommonModule,TableModule,DialogModule,ButtonModule,ConfirmDialogModule],
  providers:[GlobalService,ConfirmationService],
  templateUrl: './dad.component.html',
  styleUrl: './dad.component.css'
})
export class DadComponent {
  public cities:City[] | undefined= undefined;

  public open:boolean = false;

  constructor(private globalService:GlobalService,private confirmationService:ConfirmationService){
    this.globalService.city$.subscribe(city => {
      this.cities = city; // Atualiza o valor local para refletir na UI
    });
  }

  ngOnInit(): void {
    this.globalService.getCities()
  }

  public changeCidade(){
    this.globalService.changeCity([])
  }

  public confirmarDelecao(event: Event,id:number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
          this.deleteCity(id)
        },
        reject: () => {
        }
    });
  }


  public deleteCity(id:number){
    this.globalService.deleteCity(id)
  }
}
