import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobodyComponent } from './infobody.component';

describe('InfobodyComponent', () => {
  let component: InfobodyComponent;
  let fixture: ComponentFixture<InfobodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfobodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
