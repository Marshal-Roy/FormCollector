import { Injectable } from '@angular/core';
import { FormInfo } from '../models/form-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsInfoService {

  apiUrl="https://localhost:7034/api"
  private url="formsInfo";
  constructor(private http:HttpClient) { }
    
  public getformsInformation():Observable<FormInfo[]>
    {
    return this.http.get<FormInfo[]>(`${this.apiUrl}/${this.url}`);
    }
    

    //edit-form-service
    getCurrentData(id:any):Observable<FormInfo>{
      return this.http.get<FormInfo>(`${this.apiUrl}/${this.url}`+'/'+id)
    }

    updateForm(inputData:FormInfo, dataId:any):Observable<FormInfo>{
      return this.http.put<FormInfo>(`${this.apiUrl}/${this.url}`+'/'+dataId,inputData);
    }

    //add-info service
    addFormInfo(addInfoRequest:FormInfo):Observable<FormInfo>{
      return this.http.post<FormInfo>(`${this.apiUrl}/${this.url}`,addInfoRequest)
    }

    //delete info

    deleteInfo(id:any):Observable<FormInfo>
    {
      return this.http.delete<FormInfo>(`${this.apiUrl}/${this.url}`+'/'+id);
    }
  }

