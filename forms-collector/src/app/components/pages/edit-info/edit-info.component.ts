import { Component, Input } from '@angular/core';
import { FormInfo } from 'src/app/models/form-info';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent {
  @Input() form?: FormInfo;
  constructor(){}

}
