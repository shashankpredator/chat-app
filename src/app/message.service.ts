import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Message } from './model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

   message = new BehaviorSubject<Message>(null);

   onEmit(author:string,message:string )
   {
    let messageObj = new Message({author,message})
    this.message.next(messageObj)
   }
}
