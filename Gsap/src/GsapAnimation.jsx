import React, { useEffect, useRef } from "react";

const GsapAnimatiom = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w,
      h,
      balls = [];
    let mouse = { x: undefined, y: undefined };
    let rgb = [
      "rgba(26, 188, 156, 0.5)",
      "rgba(46, 204, 113, 0.5)",
      "rgba(52, 152, 219, 0.5)",
      "rgba(155, 89, 182, 0.5)",
      "rgba(241, 196, 15, 0.5)",
      "rgba(230, 126, 34, 0.5)",
      "rgba(231, 76, 60, 0.5)",
    ];

    const resizeReset = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const animationLoop = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      drawBalls();

      let temp = [];
      for (let i = 0; i < balls.length; i++) {
        if (balls[i].time <= balls[i].ttl) {
          temp.push(balls[i]);
        }
      }
      balls = temp;

      requestAnimationFrame(animationLoop);
    };

    const drawBalls = () => {
      for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
      }
    };

    const mousemove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;

      for (let i = 0; i < 3; i++) {
        balls.push(new Ball());
      }
    };

    const mouseout = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    const getRandomInt = (min, max) => {
      return Math.round(Math.random() * (max - min)) + min;
    };

    const easeOutQuart = (x) => {
      return 1 - Math.pow(1 - x, 4);
    };

    class Ball {
      constructor() {
        this.start = {
          x: mouse.x + getRandomInt(-20, 20),
          y: mouse.y + getRandomInt(-20, 20),
          size: getRandomInt(110, 120),
        };
        this.end = {
          x: this.start.x + getRandomInt(-300, 300),
          y: this.start.y + getRandomInt(-300, 300),
        };

        this.x = this.start.x;
        this.y = this.start.y;
        this.size = this.start.size;

        this.style = rgb[getRandomInt(0, rgb.length - 1)];

        this.time = 0;
        this.ttl = 100;
      }
      draw() {
        ctx.fillStyle = this.style;
        ctx.shadowBlur = 15;
        ctx.shadow = this.style;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        if (this.time <= this.ttl) {
          let progress = 1 - (this.ttl - this.time) / this.ttl;

          this.size = this.start.size * (1 - easeOutQuart(progress));
          this.x = this.x + (this.end.x - this.x) * 0.01;
          this.y = this.y + (this.end.y - this.y) * 0.01;
          this.style = this.style.replace(
            /[\\.]+\)$/g,
            `${0.5 * (1 - progress)})`
          );
        }
        this.time++;
      }
    }

    const init = () => {
      resizeReset();
      animationLoop();
    };

    window.addEventListener("resize", resizeReset);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseout", mouseout);
    init();

    return () => {
      window.removeEventListener("resize", resizeReset);
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseout", mouseout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed hidden lg:block inset-0 -z-10 bg-transparent w-full h-full"
    />
  );
};

export default GsapAnimatiom;