const canvas = document.querySelector('.root');

const width = 1920;
const height = 1080;
const arcColor = '#fff';

canvas.width = width;
canvas.height = height;

const view = canvas.getContext('2d');
const dots = [];

class SlideUp {
    constructor(x, y, radius, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dy = dy;
    };

    draw() {
        view.beginPath();
        view.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        view.fillStyle = arcColor;
        view.fill();
        this.move();
    };

    move() {
        this.y += -this.dy;

        if (this.y < 0 - this.radius) {
            this.x = Math.random() * (width - this.radius * 2) + this.radius;
            this.y = height + this.radius;
        };
    };
};

const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 1000; i++) {
    let radius = Math.random() * 2;
    let x = Math.random() * (width - radius * 2) + radius;
    let y = Math.random() * (height - radius * 2) + radius;
    let dy = rndInt(1, 3);

    dots.push(new SlideUp(x, y, radius, dy));
};

const animate = () => {
    requestAnimationFrame(animate);

    view.clearRect(0, 0, width, height);

    for (let i = 0; i < dots.length; i++) {
        dots[i].draw();
    };
};

animate();
