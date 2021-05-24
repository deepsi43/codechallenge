import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductsbycompanyComponent } from './viewproductsbycompany.component';

describe('ViewproductsbycompanyComponent', () => {
  let component: ViewproductsbycompanyComponent;
  let fixture: ComponentFixture<ViewproductsbycompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductsbycompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductsbycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
