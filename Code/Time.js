class Time {
  constructor() {}

  static onEveryFrame(callBack) {
    setInterval(callBack, 30);
  }
}

console.log(Time.prototype);