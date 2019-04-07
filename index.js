const {City} = require('./city');
const readline = require('readline');
var macité= new City('joville','jojo');
var macité2=new City('salut','jojo2');
var reponse1='';
var reponse2='';

macité.acheter(macité2,500,500);

macité.toString();

console.log("Salut ! t'a cité s'appelle "+macité.name_+" et voici les ressources dont tu  disposes")
macité.toString();



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Mais malheureusement tu n'est pas seul, de l'autre coté des montagnes, par delà le Mordor, une gentille cité résistant encore et toujours à l'envaillisseur menace de prendre tes terres" );


rl.question('vouleza vous attaquer la ville ?  oui ou non ', (answer) => {

    this.reponse1=answer;
    console.log(`réponse : ${answer}`);
    if(this.reponse1=='oui')
    {
        console.log("ça marche, pour cela il vous faudra une armée de paladins qui vous coutera 5 de gold par paladin recruté. A l'attaque !!!");
        console.log("l'armé adverse est ")
        for (var i=0;1<10;i++)
        {
            macité.army.recruter(i,macité.army.index)

        }
        macité.army.attack(macité2);

    }
    else
    {
        r1.setPrompt('je comprends, voulez vous commercer avec cette ville ?  oui ou non ', (answer) => {

            this.reponse2=answer;
            console.log(`réponse : ${answer}`);
            if (this.reponse2=='oui') {
                macité.acheter(macité2,50,50);
            }
        });
    }

    rl.close();
});







