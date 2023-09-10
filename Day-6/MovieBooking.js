// movie booking app
// 1. timing of movie on which theatre
// 2. seat
// 3. payment
// 4. book tickets
// 5. User
// 6. temporarily lock the seat
// 7. booked seats should not be shown
// 8. release locked seats after 3 tries of payment
// 9. theatre
// 10. screen

class Seat {
  constructor(name) {
    this.name = name;
    this.isBooked = false;
  }

  book() {
    this.isBooked = true;
  }

  unbook() {
    this.isBooked = false;
  }
}

class Screen {
  constructor(screenNumber, rows, columns) {
    this.screenNumber = screenNumber;
    this.seats = this.generateSeats(rows, columns);
  }

  generateSeats(rows, cols) {
    const seats = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        const seat = new Seat(`${String.fromCharCode(64 + i)}${j}`);
        seats.push(seat);
      }
    }
    return seats;
  }

  getOverlappingSeats(seatNames) {
    const overlappingSeats = [];

    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat && seat.isBooked) {
        overlappingSeats.push(seatName);
      }
    }

    return overlappingSeats;
  }

  getAvailableSeats() {
    return this.seats.filter((seat) => !seat.isBooked);
  }

  bookSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.book();
    }
  }

  releaseSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.unbook();
    }
  }
}

class Show {
  constructor(movie, startTime, duration, screen) {
    this.movie = movie;
    this.startTime = startTime;
    this.duration = duration;
    this.screen = screen;
  }
}

class Theatre {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.screens = [];
    this.shows = [];
  }

  addScreen(screen) {
    this.screens.push(screen);
  }

  addShow(show) {
    this.shows.push(show);
  }

  getAvailableShows() {
    const currentTime = new Date();
    // console.log("current time", currentTime);
    const availableShows = this.shows.filter(
      (show) => new Date(show.startTime) > currentTime
    );
    return availableShows;
  }
}

class UserSession {
  constructor(user, screen) {
    this.user = user;
    this.screen = screen;
    this.selectedSeats = [];
    this.paymentAttempt = 0;
    this.MAX_PAYMENT_ATTEMPTS = 3;
    this.closed = false;
  }

  selectSeats(seatNames) {
    if (!this.closed) {
      const overLappingSeats = this.screen.getOverlappingSeats(seatNames);
      //   console.log("overlapping seats", overLappingSeats);

      if (overLappingSeats.length > 0) {
        console.log(
          "Some of your seat is already blocked by other user",
          overLappingSeats
        );
        return;
      }
      this.selectedSeats = seatNames;
      this.screen.bookSeats(seatNames);
    }
  }

  makePayment() {
    if (!this.closed) {
      // Assumption
      const paymentSuccess = false;

      if (paymentSuccess) {
        console.log(
          `Payment succeeded for ${this.user}. Selected Seats: ${this.selectedSeats}`
        );
        this.closed = true;
      } else {
        this.paymentAttempt++;
        console.log(
          `payment failed for ${this.user}. Remaining attempts - ${
            this.MAX_PAYMENT_ATTEMPTS - this.paymentAttempt
          }`
        );

        if (this.paymentAttempt >= this.MAX_PAYMENT_ATTEMPTS) {
          console.log(
            `Maximum payment retries reached. Releasing seats ${this.selectedSeats}`
          );
          this.closed = true;
          this.screen.releaseSeats(this.selectedSeats);
        }
      }
    }
  }
}

const pvr = new Theatre("PVR", "Delhi");
const screen1 = new Screen(1, 3, 3);
const morningShow = new Show(
  "Jawan",
  new Date("2023-09-10T10:00"),
  180,
  screen1
);

const afterNoonShow = new Show(
  "Jawan",
  new Date("2023-09-10T16:00"),
  180,
  screen1
);

const midNightShow = new Show(
  "Jawan",
  new Date("2023-09-10T23:00"),
  180,
  screen1
);

// console.log(morningShow);
pvr.addScreen(screen1);
pvr.addShow(morningShow);
pvr.addShow(afterNoonShow);
pvr.addShow(midNightShow);

// console.log(pvr);
// console.log(pvr.getAvailableShows());

// const session = new UserSession("vasanth", screen1);
// // console.log(screen1.getAvailableSeats());
// session.selectSeats(["A1", "A2", "B1"]);
// session.makePayment();
// session.makePayment();
// session.makePayment();

// // console.log(session);
// console.log(screen1.getAvailableSeats());
// // console.log(screen1.seats);

const sourav = new UserSession("Sourav", midNightShow.screen);
const sampath = new UserSession("Sampath", midNightShow.screen);
// console.log(sourav);
// console.log(sampath);

// 2 users are logging in and try to book
let availableSeats = midNightShow.screen.getAvailableSeats();
console.log("available seats", availableSeats);

sourav.selectSeats(["A1", "A2"]);
console.log(`Seats selected by ${sourav.user}: ${sourav.selectedSeats}`);
console.log("available seats", midNightShow.screen.getAvailableSeats());

sampath.selectSeats(["A1", "A2"]);
console.log(`Seats selected by ${sampath.user}: ${sampath.selectedSeats}`);
