let numName, numNum, move = 0, c = 0;
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
    let check = 0, end;
    for (let name of document.querySelector(`.${numName}`).classList) {
        if((name != cross) && (name != circle)){
            check = 0;
        }else{
            check = 1;
            console.log(check);
        }
    }
    if(check != 1){
        if(move % 2 == 0) document.querySelector(`.${numName}`).classList.add(cross);
        else document.querySelector(`.${numName}`).classList.add(circle);  
        move++;  
    }
    document.querySelector('.move').innerHTML = ('Move: ' + move);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            c++;
            if(ttt[i][j] == 1)
                continue;
            else{
                if(c == numNum){
                    if(move % 2 == 0){
                        ttt[i][j] = 1;
                    }else{
                        ttt[i][j] = 2;
                    }
                }
            }
        }
    }
    c = 0;
    if(move >= 5){
        end = endGame(ttt);
        if(end == 1){
            let winner;
            if(move % 2 == 0){
                winner = 'circles'
            }else{
                winner = 'crosses'
            }
            document.querySelector('.move').innerHTML = ('Move: ' + move + '\nEnd game!' + '\nWinner: ' + winner);
        }
        if(move == 9)
        document.querySelector('.move').innerHTML = ('Move: ' + move + '\nEnd game!' + '\nDraw');
    }
}

function endGame(arr){
    let c = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(arr[i][j] == 1 || arr[i][j] == 2){
                if(arr[i][j] == arr[1][j] && arr[1][j] == arr[2][j] && arr[2][j] == arr[0][j]){
                    c++;
                    console.log('1');
                }else if(arr[i][j] == arr[i][1] && arr[i][1] == arr[i][2] && arr[i][2] == arr[i][0]){
                    c++;
                    console.log('2');
                }else if(arr[i][j] == arr[1][1] && arr[1][1] == arr[2][2] && arr[2][2]== arr[0][0]){
                    c++;
                    console.log('3');
                }else if(arr[i][j] == arr[2][0] && arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2]){
                    c++;
                    console.log('4');
                };
            }
        }
    }
    console.log(c);
    if(c > 0){
        return 1;
    }
}