import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books=["c","cpp","ds","java","python","win32sdk"];
  constructor() { }

  ngOnInit() {
  }

}
