"use strict";

var numName,
    numNum,
    move = 0,
    player = 0,
    endgame = true;
var cross = 'cross';
var circle = 'circle';
var ttt = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
document.querySelector('.one').addEventListener('click', function () {
  numName = 'one';
  numNum = 1;
  print(numName, numNum);
});
document.querySelector('.two').addEventListener('click', function () {
  numName = 'two';
  numNum = 2;
  print(numName, numNum);
});
document.querySelector('.three').addEventListener('click', function () {
  numName = 'three';
  numNum = 3;
  print(numName, numNum);
});
document.querySelector('.four').addEventListener('click', function () {
  numName = 'four';
  numNum = 4;
  print(numName, numNum);
});
document.querySelector('.five').addEventListener('click', function () {
  numName = 'five';
  numNum = 5;
  print(numName, numNum);
});
document.querySelector('.six').addEventListener('click', function () {
  numName = 'six';
  numNum = 6;
  print(numName, numNum);
});
document.querySelector('.seven').addEventListener('click', function () {
  numName = 'seven';
  numNum = 7;
  print(numName, numNum);
});
document.querySelector('.eight').addEventListener('click', function () {
  numName = 'eight';
  numNum = 8;
  print(numName, numNum);
});
document.querySelector('.nine').addEventListener('click', function () {
  numName = 'nine';
  numNum = 9;
  print(numName, numNum);
});

function print(numName, numNum) {
  var check = 0;

  if (endgame == false) {
    setTimeout(function () {
      move = 0, player = 0, endgame = true;
      writeMoves(move, 0);
      ttt = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      var cells = document.querySelectorAll('.cell');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = cells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cell = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = cell.classList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var name = _step2.value;

              if (name == cross || name == circle) {
                cell.classList.remove(name);
                console.log('removed');
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return;
    }, 2000);
  } else {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = document.querySelector(".".concat(numName)).classList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var name = _step3.value;

        if (name != cross && name != circle) {
          check = 0;
        } else {
          check = 1;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    if (check != 1) {
      if (move % 2 == 0) document.querySelector(".".concat(numName)).classList.add(cross);else document.querySelector(".".concat(numName)).classList.add(circle);
      move++;
    }

    writeMoves(move, 0);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        player++;
        if (ttt[i][j] == 1) continue;else {
          if (player == numNum) {
            if (move % 2 == 0) {
              ttt[i][j] = 1;
            } else {
              ttt[i][j] = 2;
            }
          }
        }
      }
    }

    player = 0;
    var end = 0;

    if (move >= 5) {
      end = endGame(ttt);

      if (end == 1) {
        endgame = false;

        if (move % 2 == 0) {
          writeMoves(move, 1);
        } else {
          writeMoves(move, 2);
        }

        print('0', 0);
      }

      if (move == 9 || end == 0) {
        endgame = false;
        writeMoves(move, 3);
        print('0', 0);
      }
    }
  }
}

function endGame(arr) {
  var combination = 0;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (arr[i][j] == 1 || arr[i][j] == 2) {
        if (arr[i][j] == arr[0][j] && arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j] && (i == 0 || i == 1 || i == 2)) {
          combination++;
          console.log(1);
        } else if (arr[i][j] == arr[i][0] && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2] && (j == 0 || j == 1 || j == 2)) {
          combination++;
          console.log(2);
        } else if (arr[i][j] == arr[0][0] && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && (i == 0 && j == 0 || i == 1 && j == 1 || i == 2 && j == 2)) {
          combination++;
          console.log(3);
        } else if (arr[i][j] == arr[2][0] && arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2] && (i == 0 && j == 2 || i == 1 && j == 1 || i == 2 && j == 0)) {
          combination++;
          console.log(4);
        }

        ;
      }
    }
  }

  if (combination > 0) {
    console.log(combination);
    return 1;
  }
}

function writeMoves(currentmove, winner) {
  var move = document.querySelector('.move');
  move.innerHTML = 'Move: ' + currentmove;

  switch (winner) {
    case 0:
      move.innerHTML = 'Move: ' + currentmove;
      break;

    case 1:
      move.innerHTML = '\nEnd game! \nWinner: circles';
      break;

    case 2:
      move.innerHTML = '\nEnd game! \nWinner: crosses';
      break;

    case 3:
      move.innerHTML = '\nEnd game! \nDraw';
      break;

    default:
      alert('MoveBreak');
      break;
  }
}