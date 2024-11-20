import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosActualizarComponent } from './contratos-actualizar.component';

describe('ContratosActualizarComponent', () => {
  let component: ContratosActualizarComponent;
  let fixture: ComponentFixture<ContratosActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosActualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
