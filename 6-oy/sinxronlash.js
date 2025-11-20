class Clock {
    start() {
        this.timer = setInterval(() => {
            this.showTime();
        }, 1000);
    }

    showTime() {
        const now = new Date();

        let h = this.format(now.getHours());
        let m = this.format(now.getMinutes());
        let s = this.format(now.getSeconds());

        console.clear();
        console.log(`${h}:${m}:${s}`);
    }

    format(num) {
        return num < 10 ? "0" + num : num;
    }
}

const clock = new Clock();
clock.start();
