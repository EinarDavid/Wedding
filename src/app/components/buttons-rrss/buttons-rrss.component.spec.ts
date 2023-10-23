import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsRRSSComponent } from './buttons-rrss.component';

describe('ButtonsRRSSComponent', () => {
  let component: ButtonsRRSSComponent;
  let fixture: ComponentFixture<ButtonsRRSSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsRRSSComponent]
    });
    fixture = TestBed.createComponent(ButtonsRRSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
