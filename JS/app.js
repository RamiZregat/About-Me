'use strict'
alert('Hello User welcome to my webpage')
let score=1
let UserName = prompt('Please write your name here so we can know each other better')
alert('Hello ' + UserName + ' It\'s an honor to meet you')
alert('I want to play with you a guessing game about my personalization hope you enjoy it')

function age()
{
let MyAge = prompt('Am I older than 25 \(y/n\)').toLowerCase()
switch (MyAge) {
    case MyAge = 'y':
    case MyAge = 'yes':
        alert('You are wrong I\'m actaully 24 years old it\'s okay lets move on to another question')
        score++
        break;
    case MyAge = 'n':
    case MyAge = 'no':
        alert('Wow you guessed it right I\'m actually 24 years old')

        break;
    default:
        alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever lets move on to next question')
}
}

function MyHobby1() {
let MyHobby1 = prompt('Am I a gamer? \(y/n\)').toLowerCase()
if (MyHobby1 == 'y' || MyHobby1 == 'yes') {
    alert('Wow you guessed it right I am a gamer')
    score++
} else if (MyHobby1 == 'n' || MyHobby1 == 'no') {
    alert('You are wrong I\'m actually a gamer it\'s okay lets move on to another question')
} else {
    alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever lets move on to next question')
}
}

function MyHobby2 () {
let MyHobby2 = prompt('Am I into programming? \(y/n\)').toLowerCase()
switch (MyHobby2) {
    case MyHobby2 = 'y':
    case MyHobby2 = 'yes':
        alert('Wow you guessed it right I am into porgramming.')
        score++
        break;
    case MyHobby2 = 'n':
    case MyHobby2 = 'no':
        alert('You are wrong I\'m actaully into programming it\'s okay lets move on to another question.')
        break;
    default:
        alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever lets move on to next question.')
}
}

function MyHobby3 () {
let MyHobby3 = prompt('Am I into Sport exercises? \(y/n\)').toLowerCase()
if (MyHobby3 == 'y' || MyHobby3 == 'yes') {
    alert('Wow you guessed it right I am into Sport exercises.')
    score++
} else if (MyHobby3 == 'n' || MyHobby3 == 'no') {
    alert('You are wrong I\'m actually into Sport exercises it\'s okay.')
} else {
    alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever.')
}
}

function MyBornDate (){
let MyBornDate=Number(prompt('When was i born?','Hint: you have only 4 tries, its in 199#'))

for(let i=1;i<=3;i++){
    if(MyBornDate>1997){
        alert(MyBornDate +' is too high try again, you have '+ (4-i) +' tries remaining')
        MyBornDate=Number(prompt('When was i born?','Hint: you have only'+ (4-i) +'tries, its in 199#'))
    } else if(MyBornDate<1997){
        alert(MyBornDate +' is too low try again, you have '+ (4-i) +' tries remaining')
        MyBornDate=Number(prompt('When was i born?','Hint: you have only'+ (4-i) +'tries, its in 199#'))
    }else if(MyBornDate==1997){
        alert('Wow you guessed it right')
        score++
        break;
    }else{
        alert('Wrong entry you suppose to enter only numbers you\'ve wasted 1 try '+(4-i)+' tries remaining')
        MyBornDate=Number(prompt('When was i born?','Hint: you have only'+ (4-i) +'tries, its in 199#'))
    }
}
}


function UserInputVistedCities () {
let UserInputVistedCities=prompt('which cities did i vist?','type here which city u think i have visited, you have 6 tries').toLowerCase()

let MyVistedCities=['turky','london','dubai','rome','tokyo','mexico']

for(let i=1;i<=5;i++){
    if(UserInputVistedCities==MyVistedCities[0] || UserInputVistedCities==MyVistedCities[1] || UserInputVistedCities==MyVistedCities[2] || UserInputVistedCities==MyVistedCities[3] || UserInputVistedCities==MyVistedCities[4] || UserInputVistedCities==MyVistedCities[5] ){
            alert('Wow you guessed it right i have visited '+UserInputVistedCities)
            score++
            break;
    }else if(UserInputVistedCities!=MyVistedCities){
        alert('No i didn\'t visit this city yet, you have '+(6-i)+' tries remaining')
        UserInputVistedCities=prompt('which cities did i vist?','type here which city u think i have visited, you have '+(6-i)+' tries remaining').toLowerCase()
    }
}
}
 age();
 MyHobby1();
 MyHobby2();
 MyHobby3();
 MyBornDate();
 alert('i was born in 1997')
 UserInputVistedCities();


alert('I have visited Turky ,London ,Dubai ,Rome ,Tokyo and Mexico')
alert('Oh we came to the end of the guessing journey ' + UserName)
alert('congratulations you have answered '+score+'/6 questions')
alert('If you still wondering about who am I, Im Rami Zregat')

alert('It was an honor to meet you ' + UserName)

document.write('Good bye ' + UserName + ' hope you have a great day')

