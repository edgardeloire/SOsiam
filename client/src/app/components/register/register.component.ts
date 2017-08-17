import { Component, OnInit } from '@angular/core';


import { FormGroup, FormArray, FormBuilder,
          Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.form=this.formBuilder.group({
      username:['',Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(30),
                this.validateUsername
              ])],
      email:['',Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(30),
                this.validateEmail
                ])],
      password:['',Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(30),
                this.validatePassword])],
      confirm:['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(30)])]
    },
  {validator:this.matchingPasswords('password','confirm')})
  }

  matchingPasswords(password,confirm){
    return(group:FormGroup)=>{
        if(group.controls[password].value===group.controls[confirm].value){
          return null;
        }else{
          return{'matchingPasswords':true}
        }
    }

  }
  validateUsername (controls){
    const regExp = new RegExp(/^[a-z0-9_-]{3,16}$/);
    if(regExp.test(controls.value)){
      return null;
    }else{
      return{'validateUsername':true}
    }
  }
  validatePassword(controls){
    const regExp = new RegExp(/^[a-z0-9_-]{6,18}$/);
    if(regExp.test(controls.value)){
      return null;
    }else{
      return{'validatePassword':true}
    }
  }


  validateEmail(controls){
    const regExp = new RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)){
      return null;
    }else {
        return {'validateEmail':true }
      }
  }

  onRegisterSubmit(){
    console.log(this.form);
  }

  ngOnInit() {
  }

}
