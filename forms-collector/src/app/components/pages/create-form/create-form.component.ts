import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormInfo } from 'src/app/models/form-info';
import { FormsInfoService } from 'src/app/services/forms-info.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
    addInfo:FormInfo={
      id:0,
      name:'',
      documents:'',
      deadline:'',
      link:''
    };
    constructor(private formInfoService:FormsInfoService,private router:Router){}
    addInformation(){
      this.formInfoService.addFormInfo(this.addInfo).subscribe({
        next:(res)=>{
          //console.log(res)
          this.router.navigate(['home/dashboard']);
        }
      })
    }
}
