shooteffect = new Audio('assets/Gunfire And Voices.mp3');

class Main {

    background;
    crosshair;
    numOfEnemies = 3;
    numOfHitedEnemies = 0;
    enemies = [];
    gameended = -1;
    winningmusik = new Audio('assets/Hero Theme.mp3');
    backgroundmusic = new Audio('assets/backgroundmusic.mp3');
    waitingmusic = new Audio('assets/waiting music.mp3');

    constructor() {
        this.init();
    }

    init() {
        this.addBackground();
        this.loadcrosshair();
        this.reset();
        this.begin()
       // this.timer();
    }

    addBackground() {
        this.background = new Background('assets/mohrhuhnhaus2.png');
            this.background.show();
        //confirm("musik wird gestartet")
    }

    addEnemies() {
        for (let i = 0; i < this.numOfEnemies; i++) {
            this.enemies.push(new Enemy(enemy => {
                    this.hits(enemy);
                },
                'assets/mohrhuhn.png'));
        }
        console.log(this.enemies);
        this.backgroundmusic.play();
    }

    loadcrosshair(){
        this.crosshair = new Crosshair('assets/crosshair1.svg')
        this.crosshair.show();
    }


    hits(enemy) {
        this.numOfHitedEnemies++;
        console.count('hit');
        this.hitcount();
        if ( this.numOfHitedEnemies !== 0 && (this.numOfHitedEnemies % 3) === 0  ) {
            this.reset();
            console.log('new chicken');
        }
        else {
            console.log('weiter spielen');
        }
        if (this.numOfHitedEnemies === 10) {
            console.log('ich habe fertig')
            this.won();
        }
    }

    pause() {
        this.enemies.forEach(enemy => enemy.stopMove());
    }

    reset() {
        this.enemies.forEach(enemy => enemy.removeFromStage());
        this.enemies = [];
        this.addEnemies();
    }
    won() {
        this.backgroundmusic.pause();
        console.log('backgroundmusic stop');
        clearInterval(this.gameended);
        this.winningmusik.play();
        console.log('winning music starts')
        if (confirm('SUPER du hast gewonnen... willst du nochmal?')) {
            this.begin();
            this.reset();
            this.winningmusik.pause();
            this.backgroundmusic.play();
            console.log('winningmusic stop');
            console.log('backgroundmusic start');
            this.numOfHitedEnemies = 0;
        }
        else{
            this.waitingmusic.play();
            this.winningmusik.pause();
            this.backgroundmusic.pause();
            this.enemies.forEach(enemy => enemy.removeFromStage());
        }
    }


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
                document.getElementById('timer').innerHTML = `<p1>${count} seconds</p1>`;
            }
        }, 1000)
    }
    hitcount() {
        let hitcount = this.numOfHitedEnemies;
        {
            document.getElementById('hitcounter').innerHTML =
                `<p1>${hitcount} hits</p1>`;
        }
    }
}