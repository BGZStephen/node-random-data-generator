import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDataGeneratorComponent } from './object-data-generator.component';

describe('ObjectDataGeneratorComponent', () => {
  let component: ObjectDataGeneratorComponent;
  let fixture: ComponentFixture<ObjectDataGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDataGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDataGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
