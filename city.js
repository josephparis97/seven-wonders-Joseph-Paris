const {Divinity} = require('./divinity');
const {Army}=require('./army');

class City {
    constructor(name, divinityName) {
        this.name_ = name || 'UNKCITY';
        this.divinity_ = new Divinity(divinityName);
        this.corn_ = 1000;
        this.gold_ = 1000;
        this.life=100;
        this.army=new Army('paladins',50);
        this.init();
    }

    init() {
        this.divinity_.init();
        this.divinity_.worldEvents.on('favor', shit => this.getShit(shit));
        this.divinity_.worldEvents.on('blessing', shit => this.getShit(shit));
    }
    acheter(city, cost,corn){
        this.gold-=cost;
        city.gold+=cost;
        this.corn_+=corn;
        if(Math.random()<0.5)
        {
            console.log("un commerçant s'est fait attaqué !")
            this.gold-=100;
        }
    }


    getShit(s) {
        this.corn_ += Math.floor(s.corn);
        this.gold_ += Math.floor(s.gold);
    }

    giveShit() {
        this.divinity_.offeringCorn(this.corn_);
        this.divinity_.offeringGold(this.gold_);
        this.corn_ = 0;
        this.gold_ = 0;
    }

    showShit() {
        console.log(`${this.name_}: C ${this.corn_}, G ${this.gold_}`);
    }

    toString()
    {
        console.log(" name :"+this.name_+" divinity : "+this.divinity_.name_+" gold : "+this.gold+" corn :"+this.corn_)
    }
}

module.exports = {City};