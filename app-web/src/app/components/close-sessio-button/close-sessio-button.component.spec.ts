import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSessioButtonComponent } from './close-sessio-button.component';

describe('CloseSessioButtonComponent', () => {
  let component: CloseSessioButtonComponent;
  let fixture: ComponentFixture<CloseSessioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseSessioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseSessioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
