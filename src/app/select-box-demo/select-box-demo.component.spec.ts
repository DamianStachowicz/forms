import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxDemoComponent } from './select-box-demo.component';

describe('SelectBoxDemoComponent', () => {
  let component: SelectBoxDemoComponent;
  let fixture: ComponentFixture<SelectBoxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBoxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
