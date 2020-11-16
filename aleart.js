let quiz = prompt('日本の首都は？');
let correct = '正解です！';
let incorrect = '不正解です！';
while(quiz) {
  if(quiz == '東京') {
    alert(correct);
  } else {
    alert(incorrect);
  }
  quiz = prompt('日本の首都は？');
}