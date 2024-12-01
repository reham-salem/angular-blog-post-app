import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  imports: [CommonModule],
  templateUrl: './pagination-controls.component.html',
  styleUrl: './pagination-controls.component.scss'
})
export class PaginationControlsComponent {
  @Input()currentPage: number=1;
  @Input()totalPages: number=1;
  @Output()pageChange=new EventEmitter();

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  goToPage(page: number) {
    this.pageChange.emit(page);
  }

}
