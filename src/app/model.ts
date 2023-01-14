import { v4 as uuid } from 'uuid';
export class User {
    id: string;
    constructor(public name: string,) {
      this.id = uuid();
    }
  }
  
  export class Thread {
    id: string;
    lastMessage: Message;
    name: string;
    constructor(id?: string,name?: string) {
      this.id = id || uuid();
      this.name = name;
    }
  }
  
  export class Message {
    id: string;
    sentAt: Date;
    isRead: boolean;
    author: User;
    text: string;
    thread: Thread;
    constructor(obj?: any) {
      this.id              = obj && obj.id              || uuid();
      this.isRead          = obj && obj.isRead          || false;
      this.sentAt          = obj && obj.sentAt          || new Date();
      this.author          = obj && obj.author          || null;
      this.text            = obj && obj.text            || null;
      this.thread          = obj && obj.thread          || null;
    }
  }