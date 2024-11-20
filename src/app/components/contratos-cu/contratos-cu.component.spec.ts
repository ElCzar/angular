import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosCuComponent } from './contratos-cu.component';

describe('ContratosCuComponent', () => {
  let component: ContratosCuComponent;
  let fixture: ComponentFixture<ContratosCuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosCuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
