'use strict'
alert('Hello User welcome to my webpage')

let UserName = prompt('Please write your name here so we can know each other better')
alert('Hello ' + UserName + ' It\'s an honor to meet you')
alert('I want to play with you a guessing game about my personalization hope you enjoy it')

let MyAge = prompt('Am I older than 25 \(y/n\)').toLowerCase()
switch (MyAge) {
    case MyAge = 'y':
    case MyAge = 'yes':
        alert('You are wrong I\'m actaully 24 years old it\'s okay lets move on to another question')
        break;
    case MyAge = 'n':
    case MyAge = 'no':
        alert('Wow you guessed it right I\'m actually 24 years old')
        break;
    default:
        alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever lets move on to next question')

}
let MyHobby1 = prompt('Am I a gamer? \(y/n\)').toLowerCase()
if (MyHobby1 == 'y' || MyHobby1 == 'yes') {
    alert('Wow you guessed it right I am a gamer')
} else if (MyHobby1 == 'n' || MyHobby1 == 'no') {
    alert('You are wrong I\'m actually a gamer it\'s okay lets move on to another question')
} else {
    alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever lets move on to next question')
}

let MyHobby2 = prompt('Am I into programming? \(y/n\)').toLowerCase()
switch (MyHobby2) {
    case MyHobby2 = 'y':
    case MyHobby2 = 'yes':
        alert('Wow you guessed it right I am into porgramming.')
        break;
    case MyHobby2 = 'n':
    case MyHobby2 = 'no':
        alert('You are wrong I\'m actaully into programming it\'s okay lets move on to another question.')
        break;
    default:
        alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever lets move on to next question.')
}
let MyHobby3 = prompt('Am I into Sport exercises? \(y/n\)').toLowerCase()
if (MyHobby3 == 'y' || MyHobby3 == 'yes') {
    alert('Wow you guessed it right I am into Sport exercises.')
} else if (MyHobby3 == 'n' || MyHobby3 == 'no') {
    alert('You are wrong I\'m actually into Sport exercises it\'s okay.')
} else {
    alert('Really ' + UserName + '... it was a yes or no question u suppose to answer it with y for yes or n for no okay whatever.')
}
alert('Oh we came to the end of the guessing journey ' + UserName + ' If you still wondering about who am I, Im Rami Zregat')

alert('It was an honor to meet you ' + UserName)

document.write('Good bye ' + UserName + ' hope you have a great day')