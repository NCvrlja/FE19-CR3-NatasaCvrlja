import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
contact = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('', Validators.required),
  yourtext: new FormControl('', Validators.required),
});

  onSubmit(){
    if(this.contact.valid){
      alert("Thank you!")
      console.log(this.contact.value);
      this.contact.reset();
    }
  }
  constructor(){}
  ngOnInit(): void {
    
  }
}