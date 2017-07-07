import { Component, Input } from '@angular/core';

import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  constructor(private messageService: MessageService){}

  @Input() message: Message;
  // @Output() editClicked = new EventEmitter<string>();
  onEdit() {
    this.messageService.editMessage(this.message);
    // this.editClicked.emit('A new value');
  }


  onDelete() {
    this.messageService.deleteMessage(this.message)
      .subscribe(
        result => console.log(result)
      );
  }

  belongsToUser() {
    return localStorage.getItem('userId') == this.message.userId;
  }
}
