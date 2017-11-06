import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroCreateComponent } from './rubro-create.component';

describe('RubroCreateComponent', () => {
  let component: RubroCreateComponent;
  let fixture: ComponentFixture<RubroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
