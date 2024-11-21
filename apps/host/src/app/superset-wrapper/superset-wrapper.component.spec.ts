import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersetWrapperComponent } from './superset-wrapper.component';

describe('SupersetWrapperComponent', () => {
  let component: SupersetWrapperComponent;
  let fixture: ComponentFixture<SupersetWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupersetWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupersetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
