import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCalenderComponent } from './github-calender.component';

describe('GithubCalenderComponent', () => {
  let component: GithubCalenderComponent;
  let fixture: ComponentFixture<GithubCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
