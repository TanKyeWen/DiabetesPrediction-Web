import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictPage } from './predict-page';

describe('PredictPage', () => {
  let component: PredictPage;
  let fixture: ComponentFixture<PredictPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
