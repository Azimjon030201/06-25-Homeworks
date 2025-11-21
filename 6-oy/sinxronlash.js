class Clock {
    start() {
        this.timer = setInterval(() => {
            this.showTime();
        }, 1000);
    }

    showTime() {
        const now = new Date();

        let hours = this.format(now.getHours());
        let minut = this.format(now.getMinutes());
        let second = this.format(now.getSeconds());

        console.clear();
        console.log(`${hours}:${minut}:${second}`);
    }

    format(num) {
        return num < 10 ? "0" + num : num;
    }
}

const clock = new Clock();
clock.start();