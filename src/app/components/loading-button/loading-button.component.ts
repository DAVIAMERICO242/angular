import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-button.component.html',
  styleUrl: './loading-button.component.css'
})
export class LoadingButtonComponent {
  @Input() disabled:boolean = false;
  @Input() type: "submit" | undefined;
  @Input() class: string = ''; // Nova propriedade para classes adicionais
  @Input() isLoading!:boolean;

  constructor (){
    
  }

  


  
}
