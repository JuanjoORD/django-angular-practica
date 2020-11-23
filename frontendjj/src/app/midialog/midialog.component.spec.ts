import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidialogComponent } from './midialog.component';

describe('MidialogComponent', () => {
  let component: MidialogComponent;
  let fixture: ComponentFixture<MidialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
