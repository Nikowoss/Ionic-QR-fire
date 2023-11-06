import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScancorrectoPage } from './scancorrecto.page';

describe('ScancorrectoPage', () => {
  let component: ScancorrectoPage;
  let fixture: ComponentFixture<ScancorrectoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScancorrectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
