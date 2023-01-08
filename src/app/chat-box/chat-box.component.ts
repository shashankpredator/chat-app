import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  constructor(
    private msgSvc : MessageService
  ) { }

  ngOnInit(): void {
  }

  author = new FormControl('');
  message = new FormControl('');
  
  onSubmit() {
    this.msgSvc.onEmit(this.author.value,this.message.value)
  }
}
