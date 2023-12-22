function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height)
    ctx2.clearRect(0, 0, canvas.width, canvas.height)
    ctx3.clearRect(0, 0, canvas.width, canvas.height)
    ctx4.clearRect(0, 0, canvas.width, canvas.height)
    ctx5.clearRect(0, 0, canvas.width, canvas.height)

    handleRipples()
    ctx2.drawImage(background_lvl2, 0, 0)
    handleParticles()
    frogger.draw()
    frogger.update()

    handleObstacles()
    handleScoreBoard()
    ctx4.drawImage(grass, 0 , 0)
    frame++
    requestAnimationFrame(animate)
}
animate()

//event listeners
window.addEventListener('keydown', function(e){
    keys = []
    keys[e.keyCode] = true
    if(keys[37] || keys[38] || keys[39] || keys[40])
        frogger.jump()
})

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode]
    frogger.moving = false
    frogger.frameX = 0
})

function scored(){
    score++
    gameSpeed += 0.1
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    console.log('hi')
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black'
    ctx4.strokeStyle = 'black'
    ctx4.font = '15px Verdana'
    ctx4.strokeText('score', 265, 15)
    ctx4.font = '60px Verdana'
    ctx4.fillText(score, 266, 65)
    ctx4.font = '15px Verdana'
    ctx4.strokeText('Collisions: ' + collisionsCount, 10, 175)
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10, 195)
}

// collision detectiom between two rectangles

function collision(first, second){
    return !(first.x > second.x + second.width ||
            first.x + first.width < second.x ||
            first.y > second.y +second.height ||
            first.y + first.height < second.y)
}

function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0
    collisionsCount++
    gameSpeed = 1
}