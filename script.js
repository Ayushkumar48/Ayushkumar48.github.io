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
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.querySelector('input[name="entry.16656168"]').value;
  const message = form.querySelector('textarea[name="entry.1309397841"]').value;
  const thankYouMessage = document.getElementById("thank-you-message");
  const hiddenIframe = document.getElementById("hidden_iframe");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  thankYouMessage.style.display = "none";
  if (!email || !message) {
    alert("Please fill in both the email and message fields.");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  hiddenIframe.onload = function () {
    thankYouMessage.style.display = "block";
    form.reset();
  };
  form.submit();
}
