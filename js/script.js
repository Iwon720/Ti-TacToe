let numName, numNum, move = 0, player = 0, endgame = true;
let cross = 'cross';
let circle = 'circle';
let ttt = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
document.querySelector('.one').addEventListener('click', () => {
    numName = 'one';
    numNum = 1;
    print(numName, numNum);
});
document.querySelector('.two').addEventListener('click', () => {
    numName = 'two';
    numNum = 2;
    print(numName, numNum);

});
document.querySelector('.three').addEventListener('click', () => {
    numName = 'three';
    numNum = 3;
    print(numName, numNum);

});
document.querySelector('.four').addEventListener('click', () => {
    numName = 'four';
    numNum = 4;
    print(numName, numNum);

});
document.querySelector('.five').addEventListener('click', () => {
    numName = 'five';
    numNum = 5;
    print(numName, numNum);

});
document.querySelector('.six').addEventListener('click', () => {
    numName = 'six';
    numNum = 6;
    print(numName, numNum);

});
document.querySelector('.seven').addEventListener('click', () => {
    numName = 'seven';
    numNum = 7;
    print(numName, numNum);

});
document.querySelector('.eight').addEventListener('click', () => {
    numName = 'eight';
    numNum = 8;
    print(numName, numNum);

});
document.querySelector('.nine').addEventListener('click', () => {
    numName = 'nine';
    numNum = 9;
    print(numName, numNum);
});

function print(numName, numNum){
    let check = 0;
    
    if(endgame == false){ 
        setTimeout(() => {
            move = 0, player = 0, endgame = true;
            writeMoves(move, 0);
            ttt = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];
            let cells = document.querySelectorAll('.cell');
            for (let cell of cells) {
                for (let name of cell.classList) {
                    if((name == cross) || (name == circle)){
                        cell.classList.remove(name);
                    }
                }
            }
            return;
        }, 5000);
    }else{
        for (let name of document.querySelector(`.${numName}`).classList) {
            if((name != cross) && (name != circle)){
                check = 0;
            }else{
                check = 1;
            }
        }
        if(check != 1){
            if(move % 2 == 0) document.querySelector(`.${numName}`).classList.add(cross);
            else document.querySelector(`.${numName}`).classList.add(circle);  
            move++;  
        }
        writeMoves(move, 0);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                player++;
                if(ttt[i][j] == 1)
                    continue;
                else{
                    if(player == numNum){
                        if(move % 2 == 0){
                            ttt[i][j] = 1;
                        }else{
                            ttt[i][j] = 2;
                        }
                    }
                }
            }
        }
        player = 0;
        let end = 0;
        console.log(end);
        if(move >= 5){
            end = endGame(ttt);
            console.log(end + ' >=5');
            if(end == 1){
                endgame = false;
                if(move % 2 == 0){
                    writeMoves(move, 1);
                }else{
                    writeMoves(move, 2);
                }
                print('0', 0);
            }
            if(move == 9 && end != 1){
                console.log(end + ' == 9');
                endgame = false;
                writeMoves(move, 3);
                print('0', 0);
            }
        }
    }
}

function endGame(arr){
    let combination = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(arr[i][j] == 1 || arr[i][j] == 2){
                if(arr[i][j] == arr[0][j] && arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j]  && ((i == 0) || (i == 1) || (i == 2))){
                    combination++;
                }else if(arr[i][j] == arr[i][0] && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]  && ((j == 0) || (j == 1) || (j == 2))){
                    combination++;
                }else if(arr[i][j] == arr[0][0] && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]  && ((i == 0 && j == 0) || (i == 1 && j == 1) || (i == 2 && j == 2))){
                    combination++;
                }else if(arr[i][j] == arr[2][0] && arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2] && ((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0))){
                    combination++;
                };
            }
        }
    }
    if(combination > 0){
        return 1;
    }
}

function writeMoves(currentmove, winner){
    let move = document.querySelector('.move');
    move.innerHTML = ('Move: ' + currentmove);
    switch (winner) {
        case 0:
            move.innerHTML = ('Move: ' + currentmove);
            break;
        case 1:
            move.innerHTML = ('End game! <p>Winner: circles</p>');
            break;
        case 2:
            move.innerHTML = ('End game! <p>Winner: crosses</p>');
            break;
        case 3:
            move.innerHTML = ('End game! <br>Draw');
            break;
        default:
            alert('MoveBreak');
            break;
    }
}
