import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosEliminarComponent } from './contratos-eliminar.component';

describe('ContratosEliminarComponent', () => {
  let component: ContratosEliminarComponent;
  let fixture: ComponentFixture<ContratosEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosEliminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
