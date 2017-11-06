import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroListComponent } from './rubro-list.component';

describe('RubroListComponent', () => {
  let component: RubroListComponent;
  let fixture: ComponentFixture<RubroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
