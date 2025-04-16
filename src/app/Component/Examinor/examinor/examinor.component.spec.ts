import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminorComponent } from './examinor.component';

describe('ExaminorComponent', () => {
  let component: ExaminorComponent;
  let fixture: ComponentFixture<ExaminorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExaminorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
