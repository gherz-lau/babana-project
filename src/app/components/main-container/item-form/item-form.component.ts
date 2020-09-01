import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  imageOptions = [
    '/assets/1up.png',
    '/assets/bellota.jpg',
    '/assets/star.jpg',
    '/assets/Dcherry.png',
    '/assets/fireflower.jpg',
    '/assets/leaf.jpg',
    '/assets/Turnip.jpg',
  ];
  form = {
    image: '',
    title: '',
    description: '',
  };
  interval;
  @Output()
  saveResult = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.startInterval();
  }
  startInterval() {
    this.interval = setInterval(() => {
      let index = Math.floor(Math.random() * this.imageOptions.length);
      this.form.image = this.imageOptions[index];
    }, 110);
  }
  stopInterval() {
    clearInterval(this.interval);
    this.interval = this.imageOptions.indexOf(this.form.image);
  }

  save() {
    this.saveResult.emit(this.form);
    console.log('enviado', this.form);
  }

  prev() {
    clearInterval(this.interval);

    if (this.interval >= this.imageOptions.length - 1) {
      this.interval--;
    } else if (this.interval == 0) {
      this.interval = this.imageOptions.length -1;
    } else {
      this.interval--;
    }
    this.form.image = this.imageOptions[this.interval];
  }
  next() {
    clearInterval(this.interval);
    if (this.interval >= this.imageOptions.length - 1) {
      this.interval = 0;
    } else {
      this.interval++;
    }
    this.form.image = this.imageOptions[this.interval];
  }
}
