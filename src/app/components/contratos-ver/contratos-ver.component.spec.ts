import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosVerComponent } from './contratos-ver.component';

describe('ContratosVerComponent', () => {
  let component: ContratosVerComponent;
  let fixture: ComponentFixture<ContratosVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosVerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
