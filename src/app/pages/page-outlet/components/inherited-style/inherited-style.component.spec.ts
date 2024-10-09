import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritedStyleComponent } from './inherited-style.component';

describe('InheritedStyleComponent', () => {
  let component: InheritedStyleComponent;
  let fixture: ComponentFixture<InheritedStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritedStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritedStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
