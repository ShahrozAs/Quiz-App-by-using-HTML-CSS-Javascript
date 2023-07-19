const questions = [
  {
    que: "HTML is considered as ______ ?",
    a: "Programming language",

    b: "OOP language",

    c: "High level language",

    d: "Markup language",

    correct: "d",
  },

  {
    que: "If we want to set the style for just one element, which css selector will we use?",
    a: "ID",

    b: "Text",

    c: "Class",

    d: "Name",

    correct: "a",
  },

  {
    que: " A stricter type of HTML document is known as ______?",
    a: "DHTML",

    b: "XHTML",

    c: "XML",

    d: "HTML",

    correct: "b",
  },

  // {
  //      que :  " A stricter type of HTML document is known as ______?",
  //      a : "DHTML",

  //      b : "XHTML",

  //      c : "XML",

  //      d : "HTML",

  //      correct : 'b'
  // },
];

let index = 0;
let len = questions.length;
let right = 0,
  wrong = 0;
questionbox = document.getElementById("questionbox");
options = document.querySelectorAll(".options");

const loadingquestion = () => {
  if (index === len) {
    return end();
  } else {
    reset();
    const data = questions[index];
    questionbox.innerHTML = `${index + 1}) ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
  }
};

const submit = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadingquestion();
  return;
};

const getAnswer = () => {
  let answer;
  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};

const end=()=>{

    document.getElementById('box').innerHTML=`
    <div style="text-align:center">
    <h3>Thank you for playing</h3><br><h2>${right}/${len}
    are correct </h2> </div>`

}
loadingquestion();
