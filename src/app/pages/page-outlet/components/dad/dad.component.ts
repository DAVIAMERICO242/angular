import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { City, GlobalService} from '../../../../services/GlobalService';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InheritedStyleComponent } from "../inherited-style/inherited-style.component";
import { MultiSelectModule } from 'primeng/multiselect';
import { LoadingButtonComponent } from "../../../../components/loading-button/loading-button.component";

@Component({
  selector: 'app-dad',
  standalone: true,
  imports: [ChildComponent, CommonModule, TableModule, DialogModule, ButtonModule, ConfirmDialogModule, InheritedStyleComponent, MultiSelectModule, LoadingButtonComponent],
  providers:[GlobalService,ConfirmationService],
  templateUrl: './dad.component.html',
  styleUrl: './dad.component.css'
})
export class DadComponent implements OnInit {
  public cities:City[] | undefined= undefined;

  public open:boolean = false;

  public loading:boolean = false;

  constructor(private globalService:GlobalService,private confirmationService:ConfirmationService){
    this.globalService.city$.subscribe(city => {//toda vez que um next for executado vai cair aqui
      this.cities = city; // Atualiza o valor local para refletir na UI
    });
  }

  ngOnInit(): void {
    this.globalService.getCities()
  }

  public load(){
     this.loading = true;
     setTimeout(()=>{
      this.loading = false;
     },1000)
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
