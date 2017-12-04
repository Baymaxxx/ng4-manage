import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosideLayoutComponent } from './noside-layout.component';

describe('NosideLayoutComponent', () => {
  let component: NosideLayoutComponent;
  let fixture: ComponentFixture<NosideLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosideLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
