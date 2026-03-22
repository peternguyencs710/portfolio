import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ReactiveFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form.get('name')?.value).toBe('');
    expect(component.form.get('email')?.value).toBe('');
    expect(component.form.get('message')?.value).toBe('');
  });

  it('should validate required fields', () => {
    const form = component.form;
    expect(form.valid).toBeFalsy();

    form.get('name')?.setValue('John Doe');
    form.get('email')?.setValue('john@example.com');
    form.get('message')?.setValue('This is a test message');

    expect(form.valid).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBeTruthy();

    emailControl?.setValue('valid@example.com');
    expect(emailControl?.hasError('email')).toBeFalsy();
  });

  it('should validate name minimum length', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('ab');
    expect(nameControl?.hasError('minlength')).toBeTruthy();

    nameControl?.setValue('abc');
    expect(nameControl?.hasError('minlength')).toBeFalsy();
  });

  it('should validate message minimum length', () => {
    const messageControl = component.form.get('message');
    messageControl?.setValue('short');
    expect(messageControl?.hasError('minlength')).toBeTruthy();

    messageControl?.setValue('This is a longer message');
    expect(messageControl?.hasError('minlength')).toBeFalsy();
  });

  it('should reset form', () => {
    component.form.get('name')?.setValue('John');
    component.form.get('email')?.setValue('john@example.com');
    component.form.get('message')?.setValue('Test message content');

    component.resetForm();

    expect(component.form.get('name')?.value).toBeNull();
    expect(component.form.get('email')?.value).toBeNull();
    expect(component.form.get('message')?.value).toBeNull();
    expect(component.submitted).toBeFalsy();
  });

  it('should not submit invalid form', () => {
    const spy = spyOn(console, 'log');
    component.onSubmit();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should submit valid form', () => {
    const spy = spyOn(console, 'log');
    component.form.get('name')?.setValue('John Doe');
    component.form.get('email')?.setValue('john@example.com');
    component.form.get('message')?.setValue('This is a test message');

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith('Form Value:', {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message',
    });
  });
});
