import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:number):Observable<IProperty[]>
  {
    return this.http.get('data/properties.json').pipe(
      map(data=>{
          const propertiesAarray:Array<IProperty>=[]
          for(const id in data)
          {
            if(data.hasOwnProperty(id)&& data[id].SellRent===SellRent)
            propertiesAarray.push(data[id]);
          }
          return propertiesAarray


      })
    );
  }
}
