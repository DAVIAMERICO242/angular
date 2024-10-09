import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
  @Input() inheritedProp!:string;
  @Output() propagator = new EventEmitter<string>();

  public propagate(value:string){
    this.propagator.emit(value);
  }

}
