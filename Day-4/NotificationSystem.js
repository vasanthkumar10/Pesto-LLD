// Observer Pattern

// The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between 
// objects so that when one object (the subject) changes state, all its dependents (observers) 
// are notified and updated automatically. 

class User {
  constructor(name) {
    this.name = name;
  }

  update(channelName, videoTitle) {
    console.log(
      `${this.name}: ${channelName} just uploaded a video ${videoTitle}`
    );
  }
}

class YoutubeChannel {
  constructor(channelName) {
    this.subscribers = [];
    this.channelName = channelName;
  }

  subscribe(user) {
    this.subscribers.push(user);
  }

  unsubscribe(user) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== user
    );
  }

  uploadVideo(videoTitle) {
    console.log(`New video uploaded by ${this.channelName}: ${videoTitle}`);
    console.log("-".repeat(50));
    this.notifySubscribers(videoTitle);
  }

  notifySubscribers(videoTitle) {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(this.channelName, videoTitle);
    });
  }
}

// Users
const aniket = new User("Aniket");
const deepak = new User("Deepak");
const vasanth = new User("Vasanth");

// Channel
const Pesto = new YoutubeChannel("Pesto");
Pesto.subscribe(aniket);
Pesto.subscribe(deepak);
Pesto.subscribe(vasanth);
Pesto.uploadVideo("LLD class");

Pesto.unsubscribe(deepak);
Pesto.uploadVideo("HLD class");

const EasyEngineering = new YoutubeChannel("Easy Engineering");
EasyEngineering.subscribe(vasanth);
EasyEngineering.uploadVideo("How to make Atom bomb in home");
EasyEngineering.subscribe(deepak);
EasyEngineering.uploadVideo("How earth become a spheroid shape?");
