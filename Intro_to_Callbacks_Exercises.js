class Clock {
    constructor() {
        const date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        
        // fat arrow function
        // setInterval(() => {
        //   this._tick();
        // }, 1000);
        
        // old version
        // const that = this;
        // setInterval(function() {
        //   that._tick();
        // }, 1000);

        // bind version
        setInterval(this._tick.bind(this), 1000);
        
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds += 1
      this.printTime()

      if (this.seconds === 59) {
        this.minutes += 1
        this.seconds = -1
        if (this.minutes >= 59) {
          this.hours += 1
          this.minutes = 0
        }
      //   // if (this.hours > 24) {

        }
      }
    }
  
  const clock = new Clock();

  clock._tick();