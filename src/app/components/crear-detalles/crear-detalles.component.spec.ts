import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDetallesComponent } from './crear-detalles.component';

describe('CrearDetallesComponent', () => {
  let component: CrearDetallesComponent;
  let fixture: ComponentFixture<CrearDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
