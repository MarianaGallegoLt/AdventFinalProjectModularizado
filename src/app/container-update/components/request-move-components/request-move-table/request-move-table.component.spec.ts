import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMoveTableComponent } from './request-move-table.component';

describe('RequestMoveTableComponent', () => {
  let component: RequestMoveTableComponent;
  let fixture: ComponentFixture<RequestMoveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMoveTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestMoveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
