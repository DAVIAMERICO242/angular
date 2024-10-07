import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOutletComponent } from './page-outlet.component';

describe('PageOutletComponent', () => {
  let component: PageOutletComponent;
  let fixture: ComponentFixture<PageOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
