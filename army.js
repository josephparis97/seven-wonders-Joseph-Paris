const EventEmitter = require('events');
const {Soldier}=require('./soldier');
class Army{
    constructor(name,cost){
        var soldiers = [];

        this._position='defence'
        this._name = name;
        this._cost = cost;
        this.index=0;
    }

    attack(city){

        if(city.life===0)
        {
            console.log("La cité" + city.name +"a été détruite")
        }
        else
        {
            if(city.army._position==='defend')
            {
                city.life-=10;
            }
            else
            {
                city.life-=50;
            }
        }

    }

    recruter(id,index)
    {
        this.soldiers[index]=new Soldier(id);
        this.index++;
    }

    defend()
    {
        this._position='defend'
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get cost() {
        return this._cost;
    }

    set cost(value) {
        this._cost = value;
    }

    get nbSoldiers() {
        return this._nbSoldiers;
    }

    set nbSoldiers(value) {
        this._nbSoldiers = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }
}
module.exports = {Army};