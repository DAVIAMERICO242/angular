import { Component } from '@angular/core';
import { ChildrenComponent } from "../children/children.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildrenComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  toBeInherited:string = "Oi";

  public intermediator(value:string){
    this.toBeInherited = value;
  }

}
