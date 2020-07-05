import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsViewComponent } from './proyects-view.component';

describe('ProyectsViewComponent', () => {
  let component: ProyectsViewComponent;
  let fixture: ComponentFixture<ProyectsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
