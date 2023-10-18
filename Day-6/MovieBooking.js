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
  constructor(screenNumber, rows, cols) {
    this.screenNumber = screenNumber;
    this.seats = this.generateSeats(rows, cols);
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

  getAvailableSeats() {
    return this.seats.filter((seat) => !seat.isBooked);
  }

  getOverlappingSeats(seatNames) {
    const overlappingSeats = [];
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat && seat.isBooked) {
        overlappingSeats.push(seat);
      }
    }

    return overlappingSeats;
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
    this.open = true;
  }

  selectSeats(seatNames) {
    if (this.open) {
      const overlappingSeats = this.screen.getOverlappingSeats(seatNames);
      // console.log("overlapping seats", overlappingSeats);

      if (overlappingSeats.length > 0) {
        console.log(
          "Some of your seat is already blocked by other user",
          overlappingSeats
        );
        return;
      }

      this.selectedSeats = seatNames;
      this.screen.bookSeats(seatNames);
    } else {
      console.log("Current session closed. Please login again");
    }
  }

  makePayment() {
    if (this.open) {
      // Assumption
      const paymentSuccess = false;
      if (paymentSuccess) {
        console.log(
          `Payment succeeded for ${this.user}. Selected Seats: ${this.selectedSeats}`
        );
        this.open = false;
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
          this.open = false;
          this.screen.releaseSeats(this.selectedSeats);
        }
      }
    }
  }
}

const pvr = new Theatre("PVR", "Chennai");
const screen1 = new Screen(1, 3, 3);
const morningShow = new Show(
  "Jawan",
  new Date("2023-10-18T10:00:00Z"),
  180,
  screen1
);

const afternoonShow = new Show(
  "Jawan",
  new Date("2023-10-18T16:00:00Z"),
  180,
  screen1
);

const midnightShow = new Show(
  "Jawan",
  new Date("2023-10-18T22:00:00Z"),
  180,
  screen1
);

pvr.addScreen(screen1);
pvr.addShow(morningShow);
pvr.addShow(afternoonShow);
pvr.addShow(midnightShow);

// console.log(pvr);
// console.log(pvr.getAvailableShows());

// console.log(screen1.getAvailableSeats());
// screen1.bookSeats(["A1", "A2"]);
// console.log(screen1.getAvailableSeats());
// screen1.releaseSeats(["A1", "A2"]);
// console.log(screen1.getAvailableSeats());
// console.log(screen1);

// console.log(morningShow);

const vasanth = new UserSession("Vasanth", morningShow.screen);
const kumar = new UserSession("Kumar", morningShow.screen);
// console.log(vasanth);
// console.log(kumar);

// const availableSeats = morningShow.screen.getAvailableSeats();
// console.log("availableSeats", availableSeats);

// vasanth.selectSeats(["A1", "A2"]);
// vasanth.makePayment();
// vasanth.makePayment();
// vasanth.makePayment();
// // console.log(morningShow.screen.getAvailableSeats());
// // console.log(vasanth);

// 2 users logging in and booking different seats
// console.log(morningShow.screen.getAvailableSeats());
// vasanth.selectSeats(["A1", "A2"]);
// console.log(`Seats selected by ${vasanth.user}: ${vasanth.selectedSeats}`);
// console.log("availableSeats", morningShow.screen.getAvailableSeats());

// kumar.selectSeats(["B1", "B2"]);
// console.log(`Seats selected by ${kumar.user}: ${kumar.selectedSeats}`);
// console.log("availableSeats", morningShow.screen.getAvailableSeats());

// 2 users logging in and booking same seats
console.log(morningShow.screen.getAvailableSeats());
vasanth.selectSeats(["A1", "A2"]);
console.log(`Seats selected by ${vasanth.user}: ${vasanth.selectedSeats}`);
console.log("availableSeats", morningShow.screen.getAvailableSeats());

kumar.selectSeats(["A1", "A2"]);
console.log(`Seats selected by ${kumar.user}: ${kumar.selectedSeats}`);
console.log("availableSeats", morningShow.screen.getAvailableSeats());
