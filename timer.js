class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startBtn.addEventListener("click", this.start);
        this.pauseBtn.addEventListener("click", this.pause);
    }

    start = () => {
        clearInterval(this.interval);
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 100);
        document.body.style.backgroundColor = "#c2eef4";
        document.body.querySelector("#duration").style.backgroundColor = "#c2eef4";
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.1;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            } 
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(1);
    }
}

// tick version 1:
        // if (durationInput.value < 1) {
        //     this.pause();
        //     document.body.style.backgroundColor = "#d400933d";
        //     durationInput.value = "000000";
        // } else {
        //     durationInput.value -= 1;
        // }