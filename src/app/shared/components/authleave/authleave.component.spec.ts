import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthleaveComponent } from './authleave.component';

describe('AuthleaveComponent', () => {
  let component: AuthleaveComponent;
  let fixture: ComponentFixture<AuthleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
