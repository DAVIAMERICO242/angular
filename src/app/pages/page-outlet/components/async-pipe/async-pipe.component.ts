import { Component } from '@angular/core';
import { City, GlobalService } from '../../../../services/GlobalService';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  providers:[GlobalService],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css'
})
export class AsyncPipeComponent {
  public $cities!:Observable<City[]>

  constructor(private globalService:GlobalService){
    this.$cities = globalService.city$;
    this.globalService.getCities();
  }

}
