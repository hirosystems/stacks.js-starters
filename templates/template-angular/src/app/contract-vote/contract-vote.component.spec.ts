import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractVoteComponent } from './contract-vote.component';

describe('ContractVoteComponent', () => {
  let component: ContractVoteComponent;
  let fixture: ComponentFixture<ContractVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
