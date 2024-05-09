import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormInfo } from 'src/app/models/form-info';
import { FormsInfoService } from 'src/app/services/forms-info.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  formData:FormInfo={
    id:0,
    name:'',
    documents:'',
    deadline:'',
    link:''
  };
  dataId:any;
  constructor(private router:ActivatedRoute,private formsInfoService:FormsInfoService,private route:Router){
    
  }

  ngOnInit(){
    this.dataId=this.router.snapshot.paramMap.get('id')
    this.formsInfoService.getCurrentData(this.dataId).subscribe(res=>{
      console.log(res)
      this.formData=res;
    })
    console.log(this.formData)
  }
  updateInformation(){
    this.formsInfoService.updateForm(this.formData,this.formData.id).subscribe({
      next:(response)=>{
        this.route.navigate(['home/dashboard']);
      }
    })
  }

}
