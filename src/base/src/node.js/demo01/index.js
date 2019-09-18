var playerAction = Number(process.argv[process.argv.length - 1])

var random = Math.floor(Math.random() * 3)

var arr = ['rock', 'scissor', 'paper']

console.log(random, playerAction)

if (playerAction === random) {
    console.log('平局')
    return
} 
if ((playerAction === 0 && random === 1 )||(playerAction === 1 && random === 2) || (playerAction === 2 && random === 0)) {
    console.log('you win!')
} else {
    console.log('you lose')
}



