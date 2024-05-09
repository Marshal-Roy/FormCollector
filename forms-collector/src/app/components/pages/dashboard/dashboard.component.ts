import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormInfo } from 'src/app/models/form-info';
import { FormsInfoService } from 'src/app/services/forms-info.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    forms:FormInfo[]=[];
    today = new Date();
    dd = String(this.today.getDate()).padStart(2, '0');
    mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = this.today.getFullYear();

    todayD = this.dd + '/' + this.mm + '/' + this.yyyy;

    constructor(private formInfoService:FormsInfoService,private route:Router,private user:UserService){}

    ngOnInit():void{
      this.formInfoService.getformsInformation().subscribe({ next:(result:FormInfo[])=>{(this.forms=result,this.sendMail(this.forms))}})
      // console.log(this.todayD);
      // console.log(this.getDiffDays('07-01-2021', '08-10-2021'));
    }

    getDiffDays(sDate:any, eDate:any) {
      // var startDate = new Date(sDate);
      // var endDate = new Date(eDate);
      // console.log(startDate,endDate)
      // var Time = endDate.getTime() - startDate.getTime();
      // return Time / (1000 * 3600 * 24);
      var todays = sDate
      todays = new Date(todays.split('/')[2],todays.split('/')[1]-1,todays.split('/')[0]);
      var date2 = eDate
      console.log(sDate)
      date2 = new Date(date2.split('/')[2],date2.split('/')[1]-1,date2.split('/')[0]);
      var timeDiff = Math.abs(date2.getTime() - todays.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays
    }

    deleteInfo(id:any){
      this.formInfoService.deleteInfo(id).subscribe({
        next:(response)=>{
          location.reload()
        }
      })
    }

    sendMail(data:FormInfo[]){
      for(var item of data)
      {
        var timeDiff=this.getDiffDays(this.todayD,item.deadline)
        console.log(timeDiff)
        console.log(this.todayD)
        console.log(item.deadline)
        if(timeDiff==1)
        {
          this.user.sendEmail(item.name)
          console.log('sent')
        }

      }
      
    }

}
