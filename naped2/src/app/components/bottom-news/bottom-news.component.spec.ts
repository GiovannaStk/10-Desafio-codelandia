import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNewsComponent } from './bottom-news.component';

describe('BottomNewsComponent', () => {
  let component: BottomNewsComponent;
  let fixture: ComponentFixture<BottomNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
