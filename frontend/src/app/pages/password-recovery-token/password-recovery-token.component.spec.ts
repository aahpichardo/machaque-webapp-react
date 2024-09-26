import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryTokenComponent } from './password-recovery-token.component';

describe('PasswordRecoveryTokenComponent', () => {
  let component: PasswordRecoveryTokenComponent;
  let fixture: ComponentFixture<PasswordRecoveryTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordRecoveryTokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordRecoveryTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
