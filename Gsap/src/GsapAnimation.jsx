import React, { useEffect, useRef } from 'react';

const GsapAnimation = ({children}) => {
    const canvasRef = useRef(null);
    const particlesArray = [];
    const colors = [
        'rgba(255, 0, 0, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(0, 0, 255, 0.2)',
        'rgba(255, 255, 0, 0.2)',
        'rgba(0, 255, 255, 0.2)'
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleParticles = () => {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw(ctx);
                if (particlesArray[i].size <= 0.5) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        };

        const createParticle = (x, y) => {
            const size = Math.random() * 20 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const speedX = Math.random() * 3 - 1.5;
            const speedY = Math.random() * 3 - 1.5;

            return {
                x,
                y,
                size,
                color,
                speedX,
                speedY,
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    this.size *= 0.95; // Gradually shrink the particle
                },
                draw(ctx) {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            };
        };

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            for (let i = 0; i < 5; i++) {
                particlesArray.push(createParticle(clientX, clientY));
            }
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

return(
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
            {children}
        </div>

)
}


export default GsapAnimation;
