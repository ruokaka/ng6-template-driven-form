import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // not the best solution since it's on the whole form, and some overriden can happen unfavorly
    // and have to send the whole form
    // this.signUpForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: 'suggested@name.test',
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'suggested answer',
    //   gender: 'male'
    // });

    // on the form of the signUpForm!!! just patch the ones specified
    this.signUpForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }



  // (click) is not the best place to trigger this method, since the default html will submit the form
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // this way (use view child is easier if need the form not just after the form is submitted)
  onSubmit() {
    this.user.userName = this.signUpForm.value.userData.userName;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.submitted = true;
    // not only empty the form, also clean the state!
    this.signUpForm.reset();
  }
}
