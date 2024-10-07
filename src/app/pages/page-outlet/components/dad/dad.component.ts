import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { City, GlobalService} from '../../../../services/GlobalService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dad',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  providers:[GlobalService],
  templateUrl: './dad.component.html',
  styleUrl: './dad.component.css'
})
export class DadComponent {
  public cities:City[] | undefined= undefined;

  constructor(private globalService:GlobalService){
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
}
