import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInfo } from './dropdown-info';

describe('DropdownInfo', () => {
  let component: DropdownInfo;
  let fixture: ComponentFixture<DropdownInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
