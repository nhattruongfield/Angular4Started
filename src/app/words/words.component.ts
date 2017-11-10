import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  english = '';
  vietnam = '';
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  arrOrigin = this.arrWords;
  Status = 0;
  arrStatus = ["Xem tất cả", "Xem từ đã nhớ", "Xem từ chưa nhớ"];
  constructor() { }

  ngOnInit() {
  }
  addNewWord() {
    var obj = {
      id: this.arrWords.length + 1,
      en: this.english,
      vn: this.vietnam,
      memorized: false
    };
    this.arrWords.push(obj); //this.arrWords.unshift: them dau mang
    this.english = '';
    this.vietnam = '';
  }
  deleteItem(id: number) {
    var self = this;
    var index = this.arrWords.findIndex(e => e.id === id);
    this.arrWords.splice(index, 1);
  }

  // changeStatus() {
  //   switch (parseInt(this.Status.toString())) {
  //     case 1:
  //       this.arrWords = this.arrOrigin.filter(function (item) {
  //         return item.memorized;
  //       });
  //       break;
  //     case 2:
  //       this.arrWords = this.arrOrigin.filter(function (item) {
  //         return !item.memorized;
  //       });
  //       break;
  //     default:
  //       this.arrWords = this.arrOrigin;
  //       break;
  //   }
  // }
}
