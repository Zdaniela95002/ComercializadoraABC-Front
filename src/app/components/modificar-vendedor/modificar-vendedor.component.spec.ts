import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVendedorComponent } from './modificar-vendedor.component';

describe('ModificarVendedorComponent', () => {
  let component: ModificarVendedorComponent;
  let fixture: ComponentFixture<ModificarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
