'use strict';
let quiz = prompt('日本の首都は？');
const correct = '正解です！';
const incorrect = '不正解です！';
while(quiz) {
  if(quiz === '東京') {
    alert(correct);
    break;
  } else {
    alert(incorrect);
    quiz = prompt('日本の首都は？');
  }
}