import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
  @Input()message!: string;
  @Output()tryAgain=new EventEmitter();

  getAllPosts():void{
    this.tryAgain.emit();
  }
}
