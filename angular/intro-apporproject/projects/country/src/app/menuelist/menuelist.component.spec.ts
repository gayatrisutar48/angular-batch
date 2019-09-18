import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuelistComponent } from './menuelist.component';

describe('MenuelistComponent', () => {
  let component: MenuelistComponent;
  let fixture: ComponentFixture<MenuelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
