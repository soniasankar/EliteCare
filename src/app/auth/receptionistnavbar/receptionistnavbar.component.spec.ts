import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistnavbarComponent } from './receptionistnavbar.component';

describe('ReceptionistnavbarComponent', () => {
  let component: ReceptionistnavbarComponent;
  let fixture: ComponentFixture<ReceptionistnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
