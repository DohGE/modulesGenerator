import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGeneratorContainerComponent } from './home-generator-container.component';

describe('HomeGeneratorContainerComponent', () => {
  let component: HomeGeneratorContainerComponent;
  let fixture: ComponentFixture<HomeGeneratorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGeneratorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGeneratorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
