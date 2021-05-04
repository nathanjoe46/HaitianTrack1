const questions = [
    {
        question: "Qui est le createur d'AKATSUKI ?\n1. Ernst\n2. Maxime\n3 James",
        reponse: 1

    },
    {
        question: "En quelle annee debuta l'occupation d'Haiti par les USA?\n1. 1915\n2. 1934\n3. 1997",
        reponse : 1
    },
    {
        question: "Qui est le createur de Facebook?\n1. Jonathan\n2. James\n3. Marc Zuckerberg",
        reponse: 3
    },
    {
        question: "Quelle est la capitale d'Haiti?\n1. Mexico\n2. Port au Prince\n3. Chile",
        reponse : 2
    },
    {
        question: "De qui est cette theorie:la relativite restreinte?\n1. Albert Camus\n2. Albert Einstein\n3.Isaac Newton",
        reponse : 2
    }
    
];


// console.log(questions[0].question);

 

// Debut du Jeu

let userName = prompt('Quel est votre nom ?');
alert(`Hello ${userName}, Bienvenue sur HaitianTrack vous venez enrichir votre connaissance et gagner un peu d'argent du meme coup..`)
let phoneNumber = prompt("Quel est votre numero de telephone ?")


alert('Si vous reussissez le test, nous allons vous payer par mon cash...')

let nbBonneReponse = 0;

   

for(let i = 0; i <questions.length;i++){
    let repUser = prompt(questions[i].question)
    // console.log(repUser)
    
    

    if(repUser == questions[i].reponse){
        alert("Bonne Reponse!")
        nbBonneReponse += 1
    }else{
        alert("Mauvaise Reponse")
    }
}





if(nbBonneReponse <=1){
    alert(`Vous avez ${nbBonneReponse} bonne reponse sur ${questions.length}`)
}else if(nbBonneReponse<=2){
    alert(`Vous avez ${nbBonneReponse} bonnes reponses sur ${questions.length}`)
}else{
    alert(`Waww!! Felicitation ${userName} vous etes un genie, vous avez gagne le gros lot et vous allez recevoir un montant de 1 000 000 💲 sur votre compte et merci d'avoir accepté de passer le test...`)
}



