import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaScanQrPage } from './pagina-scan-qr.page';

describe('PaginaScanQrPage', () => {
  let component: PaginaScanQrPage;
  let fixture: ComponentFixture<PaginaScanQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaScanQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
