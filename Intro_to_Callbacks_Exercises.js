class Clock {
    constructor() {
        const date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        
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
      
      setInterval(() => {
        Date.setSeconds(this.seconds += 1);
      }, 1000);
      this.printTime();
    }
  }
  
  const clock = new Clock();

  clock._tick();