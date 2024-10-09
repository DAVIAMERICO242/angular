import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inherited-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inherited-style.component.html',
  styleUrl: './inherited-style.component.css'
})
export class InheritedStyleComponent {
   @Input() styleTyped!:Partial<CSSStyleDeclaration>;
}



