import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCloseSessionComponent } from './header-close-session.component';

describe('HeaderCloseSessionComponent', () => {
  let component: HeaderCloseSessionComponent;
  let fixture: ComponentFixture<HeaderCloseSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCloseSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCloseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
