import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Message } from './model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

   messages : Array<Message> = [];
   message = new Subject<Message[]>();

   onEmit(author:string,text:string )
   {
    let messageObj = new Message({author,text})
    this.messages.push(messageObj)
    this.message.next(this.messages)
   }

   clearAll() {
    this.messages.splice(0,this.messages.length);
    this.message.next(this.messages)
   }
}
