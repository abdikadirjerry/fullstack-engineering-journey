export class Movie {
  constructor(title, status) {
    this.id = Date.now();
    this.title = title;
    this.status = status;
  }
}
