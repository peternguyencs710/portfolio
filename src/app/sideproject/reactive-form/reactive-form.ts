import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject, takeUntil, take, Observable } from 'rxjs';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AsyncPipe, JsonPipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitted = false;
  loadData = false;
  http = inject(HttpClient);
  //memomery managment of subscribe
  // option 1
  private subscription!: Subscription;
  private subscriptionList: Subscription[] = [];

  //option 2
  private subTakenUntill!: Subject<void>;

  //option 3
  // uses take operator

  //option 4 async ussing Observable
  public formData$ = new Observable<any | null>;

  constructor(private fb: FormBuilder) {
    // subscription! or this.subscription = Subscription.EMPTY;
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  loadForm() {
    // //option 1
    //this.subscription = this.http.get('./assets/download/mockFormData.json').subscribe((response => {
    
    // const sub = this.http.get('./assets/download/mockFormData.json').subscribe((response) => {
    //   if (response) {
    //     this.form.setValue(response);
    //   }
    // });
    // this.subscriptionList.push(sub);

    // //------------------------------------------

    // //option 2 uses pipe and takenUntill
    // this.http.get('./assets/download/mockFormData.json').pipe(
    //   takeUntil(this.subTakenUntill)
    // ).subscribe(response => { 
    //   if (response) {
    //     this.form.setValue(response);
    //   }
    // });
    
    //option 3 uses take
    this.http.get('./assets/download/mockFormData.json').pipe(
      take(1)
    ).subscribe(response => { 
      if (response) {
        this.form.setValue(response);
      }
    });

    //option 4 uses Observable
    this.formData$ = this.http.get('./assets/download/mockFormData.json')
    this.loadData = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Form Value:', this.form.value);
      this.form.reset();
      this.submitted = false;
    }
  }

  resetForm() {
    this.form.reset();
    this.loadData = false;
    this.submitted = false;
  }

  ngOnDestroy() {
    // option 1
    //this.subscription.unsubscribe();
    //this.subscriptionList.forEach(sub => { sub.unsubscribe});

    //option 2 
    //this.subTakenUntill.next();
  }
}
