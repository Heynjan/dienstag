/*
class timer {

    begin() {
        this.backgroundmusic.play();
        clearInterval()
        let count = 0;
        this.gameended = setInterval(() => {
            console.log(count);
            count++

            if (count >= 21) {
                console.log("game ended");
                clearInterval(this.gameended);
                this.gameended = -1;
                this.enemies.forEach(enemy => enemy.removeFromStage());
                if (confirm('Deine Zeit ist leider abgelaufen... willst du trotzdem nochmal?')) {
                    this.reset();
                    this.begin();
                    this.numOfHitedEnemies = 0;
                }
                else{
                    this.waitingmusic.play();
                    this.winningmusik.pause();
                    this.backgroundmusic.pause();
                }
            } else {
                document.getElementById('timerdiv').innerHTML = `<p1>${count} seconds</p1>`;
            }
        }, 1000)
    }

}
*/
