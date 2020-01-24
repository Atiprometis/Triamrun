import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RunShowMissChallengePage } from './run-show-miss-challenge.page';

describe('RunShowMissChallengePage', () => {
  let component: RunShowMissChallengePage;
  let fixture: ComponentFixture<RunShowMissChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunShowMissChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunShowMissChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
