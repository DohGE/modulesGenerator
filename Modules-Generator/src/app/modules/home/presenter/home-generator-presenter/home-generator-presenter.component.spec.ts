import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGeneratorPresenterComponent } from './home-generator-presenter.component';

describe('HomeGeneratorPresenterComponent', () => {
  let component: HomeGeneratorPresenterComponent;
  let fixture: ComponentFixture<HomeGeneratorPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGeneratorPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGeneratorPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
