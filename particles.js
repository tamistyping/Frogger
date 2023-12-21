class Particle {
    constructor(x, y,){
        this.x = x
        this.y = y
        this.radius = Math.random() * 20 + 1
        this.opacity = 1
        this.directionX = Math.random() * 1 - 0.5
        this.directionY = Math.random() * 1 - 0.5
    }
    draw(){
        ctx3.fillStyle = 'rgba(150,150,150,1)'
        ctx3.beginPath()
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx3.fill()
        ctx3.closePath()
    }
    update(){
        this.x += this.directionX
        this.y += this.directionY
    }
}

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update()
        particlesArray[i].draw()
    }
    if (particlesArray.length > maxParticles){
        for (let i = 0; i < 30; i++)
        particlesArray.pop()
    }
    if (((keys[37] || keys[38] || keys[39] || keys[40])) && frogger.y > 100 && particlesArray.length < maxParticles + 10){
        console.log('inside if condition')
        for (let i = 0; i < 10; i++){
            console.log('adding particle')
            particlesArray.unshift(new Particle(frogger.x, frogger.y))
        }
    }
}