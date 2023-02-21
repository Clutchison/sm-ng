import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ReferenceService {

  private readonly url = 'http://localhost:7000/api/block';

  constructor(private http: HttpClient) { }

  public getCRs = async (): Promise<string[]> => {
    return await firstValueFrom(this.http.get<string[]>(this.url + '/cr'));
  }

  public getSizes = async (): Promise<string[]> => {
    return await firstValueFrom(this.http.get<string[]>(this.url + '/size'));
  }

  public getAlignments = async (): Promise<string[]> => {
    return await firstValueFrom(this.http.get<string[]>(this.url + '/alignment'));
  }

}