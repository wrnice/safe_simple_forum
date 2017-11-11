const generateId = () => {
  const array = new Uint32Array(5);
  window.crypto.getRandomValues(array);
  return array.join('-');
};

export default class TopicModel {
  //constructor(title, author, op, date_created, last_modified, id = generateId()) {
  constructor(author, title, date, id = generateId()) {
    this.author = author;
    this.date = date;
    this.title = title;
    this.id = id;
  }
}
