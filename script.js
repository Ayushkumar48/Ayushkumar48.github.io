let changingWordFunc = async () => {
  let changingWord = document.getElementById("body02");
  let words = [
    "Data Structures",
    "Algorithms",
    "Web Development",
    "SQL",
    "C++ with STL",
    "JavaScript",
    "Python",
  ];

  let displayWord = async (word) => {
    for (let j = 0; j <= word.length; j++) {
      changingWord.innerText = word.substring(0, j);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
  };

  let removeWord = async (word) => {
    for (let j = word.length; j >= 0; j--) {
      changingWord.innerText = word.substring(0, j);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
  };

  while (true) {
    for (let i = 0; i < words.length; i++) {
      await displayWord(words[i]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await removeWord(words[i]);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
};

changingWordFunc();

let blinkingCursor = document.getElementById("body03");
let flag1 = false;
let blinkingCursorFunc = () => {
  if (flag1) {
    blinkingCursor.style = "display: none";
    flag1 = false;
  } else {
    blinkingCursor.style = "display: inline";
    flag1 = true;
  }
};

setInterval(blinkingCursorFunc, 500);
