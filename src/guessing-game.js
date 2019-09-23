class GuessingGame {
    constructor() {}

    setRange(min, max) {

        this.min = min;
        this.max = max;        
    }

    guess() {        
        return Math.round( ( (this.max + this.min) / 2.0 ) );        
    }

    lower() {
        this.max = Math.round( ( (this.max + this.min) / 2.0 ) ) ;
    }

    greater() {
        this.min = Math.round( ( (this.max + this.min)/ 2.0 ) ) ;
    }
}

module.exports = GuessingGame;
