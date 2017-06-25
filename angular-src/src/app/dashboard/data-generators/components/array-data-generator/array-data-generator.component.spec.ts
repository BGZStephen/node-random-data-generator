import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDataGeneratorComponent } from './array-data-generator.component';

describe('ArrayDataGeneratorComponent', () => {
  let component: ArrayDataGeneratorComponent;
  let fixture: ComponentFixture<ArrayDataGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayDataGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayDataGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
