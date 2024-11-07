import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() className: string = '';
  @Output() handleClick: EventEmitter<any> = new EventEmitter();
  clickHandler() {
    this.handleClick.emit();
  }
}
