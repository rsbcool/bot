import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare const Pusher: any;

@Injectable()
export class PusherProvider {
  public _pusher : any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('3a6ac93365211015639f', {
      cluster: 'ap2',
      encrypted: true
    });
  }


  getPusher(){
    return this._pusher;
  }

}
