import { Component } from '@angular/core';
import { PipePipe } from '../../../../../pipes/pipe.pipe';

@Component({
  selector: 'app-example-component',
  standalone: true,
  imports: [PipePipe],
  templateUrl: './example-component.component.html',
  styleUrl: './example-component.component.css'
})
export class ExampleComponentComponent {

}
