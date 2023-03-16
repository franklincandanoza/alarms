import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmToggleComponent } from './alarm-toggle.component';

describe('AlarmToggleComponent', () => {
  let component: AlarmToggleComponent;
  let fixture: ComponentFixture<AlarmToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
