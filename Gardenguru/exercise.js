let score = 0;

const begin_quiz = document.querySelector(".begin_quiz");
const timer_container = document.querySelector(".quizTimer_container");
const exercise_container = document.querySelector(".currentExercise_container");
const buttons_container = document.querySelector(".quizButtons");

const finalScore = document.querySelector(".finalScore");
const scoreObtained = document.querySelector(".scoreObtained");

//Referinte pentru quiz-uri
//exercise_number contine numarul si cerinta generala a exercitiului
const exercise1_number = document.getElementById("exercise1_number");
const exercise2_number = document.getElementById("exercise2_number");
const exercise3_number = document.getElementById("exercise3_number");
const exercise4_number = document.getElementById("exercise4_number");
const exercise5_number = document.getElementById("exercise5_number");
const exercise6_number = document.getElementById("exercise6_number");
//exercise_correctAnswer contine raspunsul asteptat pentru optinerea maximului de puncte
//exercise_answer contine raspunsul dat de utilizator
//ambele seturi de referinte sunt facute la submit
//exercise_question contine cerinta exacta a exercitiului
exercise1_question = document.getElementById("exercise1_quesiton");
exercise2_question = document.getElementById("exercise2_quesiton");
exercise3_question = document.getElementById("exercise3_quesiton");
exercise4_question = document.getElementById("exercise4_quesiton");
exercise5_question = document.getElementById("exercise5_quesiton");
exercise6_question = document.getElementById("exercise6_quesiton");

//Cronometru
var seconds = 00;
var minutes = 00;
var tens = 00;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendTens = document.getElementById("tens");
var buttonStop = document.getElementById("buton-stop");
var buttonReset = document.getElementById("buton-reset");
var interval;

function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }


}

begin_quiz.onclick = (() => {
    begin_quiz.style.display = "none";
    timer_container.style.display = "flex";
    exercise_container.style.display = "grid";
    buttons_container.style.display = "flex";
    setTimeout(() => {
        interval = setInterval(startTimer);
    }, 200);
});



//Matching
const draggableListItems = document.querySelectorAll('.draggable-list li');

const resetMatches = document.querySelector(".exercise6_resetMatches");
const submitQuiz = document.querySelector(".submitQuiz");
// current elements being dragged
let selectedId;

// target element
let dropTargetId;


addEventListeners();

function dragStart() {
    selectedId = this.id;
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(ev) {
    ev.preventDefault();
}


function dragDrop() {
    dropTargetId = this.id;
    if (document.getElementById(dropTargetId).draggable == true) {
        document.getElementById(selectedId).classList.add('matched');
        document.getElementById(selectedId).draggable = false;
        document.getElementById(dropTargetId).classList.add('matched');
        document.getElementById(dropTargetId).draggable = false;
        if (checkForMatch(selectedId, dropTargetId)) {
            score = score + 2;
        } else if (checkForMatch2(selectedId, dropTargetId)) {
            score = score + 2;
        }
    }
}

resetMatches.onclick = (() => {
    score = 0;
    draggableListItems.forEach(item => {
        document.getElementById(item.id).classList.remove('matched');
        document.getElementById(item.id).draggable = true;
    })
});

//scoring
submitQuiz.onclick = (() => {

    const exercise1_correctAnswer = document.getElementById('exercise1_correctAnswer');
    const exercise1_answer = document.getElementById('exercise1_answer').value;
    const exercise2_correctAnswer = document.getElementById('exercise2_correctAnswer');
    const exercise2_answer = document.getElementById('exercise2_answer').value;
    const exercise3_correctAnswer = document.getElementById('exercise3_correctAnswer');
    const exercise3_answer = document.getElementById('exercise3_answer').value;
    const exercise4_correctAnswer = document.getElementById('exercise4_correctAnswer');
    const exercise4_answer = document.question4.question4.value;
    const exercise5_correctAnswer = document.getElementById('exercise5_correctAnswer');
    const exercise5_answer = document.question5.question5.value;


    if (exercise1_answer == exercise1_correctAnswer.innerHTML) {
        score = score + 3;
    }
    if (exercise2_answer == exercise2_correctAnswer.innerHTML) {
        score = score + 3;
    }
    if (exercise3_answer == exercise3_correctAnswer.innerHTML) {
        score = score + 3;
    }
    if (exercise4_answer == exercise4_correctAnswer.innerHTML) {
        score = score + 3;
    }
    if (exercise5_answer == exercise5_correctAnswer.innerHTML) {
        score = score + 3;
    }
    draggableListItems.forEach(item => {
        document.getElementById(item.id).classList.remove('matched');
        document.getElementById(item.id).draggable = true;

    })
    clearInterval(interval);

    if (minutes < 03)
        score = score * 4;
    else if (minutes < 04)
        score = score * 3;
    else if (minutes < 05)
        score = score * 2;

    timer_container.style.display = "none";
    exercise_container.style.display = "none";
    buttons_container.style.display = "none";
    finalScore.style.display = "grid";
    scoreObtained.innerHTML = score;

});

function checkForMatch(selected, dropTarget) {
    switch (selected) {
        case 'a1':
            return dropTarget === 'b1' ? true : false;

        case 'a2':
            return dropTarget === 'b2' ? true : false;

        case 'a3':
            return dropTarget === 'b3' ? true : false;

        case 'a4':
            return dropTarget === 'b4' ? true : false;

        case 'a5':
            return dropTarget === 'b5' ? true : false;

        default:
            return false;
    }
}



function checkForMatch2(selected, dropTarget) {
    switch (selected) {
        case 'b1':
            return dropTarget === 'a1' ? true : false;

        case 'b2':
            return dropTarget === 'a2' ? true : false;

        case 'b3':
            return dropTarget === 'a3' ? true : false;

        case 'b4':
            return dropTarget === 'a4' ? true : false;

        case 'b5':
            return dropTarget === 'a5' ? true : false;

        default:
            return false;
    }
}


function addEventListeners() {
    draggableListItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}




//Navigarea meniului de categorii
// Referinta pentru meniul principal

const meniu_principal = document.querySelector(".meniu_principal");
//Butoanele care intra in meniurile respective
const buton_tools = document.querySelector(".buton_tools");
const buton_water = document.querySelector(".buton_water");
const buton_soil = document.querySelector(".buton_soil");
const buton_weather = document.querySelector(".buton_weather");
const buton_trees = document.querySelector(".buton_trees");
const buton_flowers = document.querySelector(".buton_flowers");
const buton_vegetables = document.querySelector(".buton_vegetables");
//Referintele pentru meniurile secundare
const meniu_tools = document.querySelector(".meniu_tools");
const meniu_water = document.querySelector(".meniu_water");
const meniu_soil = document.querySelector(".meniu_soil");
const meniu_weather = document.querySelector(".meniu_weather");
const meniu_trees = document.querySelector(".meniu_trees");
const meniu_flowers = document.querySelector(".meniu_flowers");
const meniu_vegetables = document.querySelector(".meniu_vegetables");
//Referintele pentru butoanele de refenire la meniul principal
const buton_tools_back = document.querySelector(".buton_tools_back");
const buton_water_back = document.querySelector(".buton_water_back");
const buton_soil_back = document.querySelector(".buton_soil_back");
const buton_weather_back = document.querySelector(".buton_weather_back");
const buton_trees_back = document.querySelector(".buton_trees_back");
const buton_flowers_back = document.querySelector(".buton_flowers_back");
const buton_vegetables_back = document.querySelector(".buton_vegetables_back");

const header = document.querySelector(".header");
let y;
const observer = new ResizeObserver((entires) => {
    const headerWidth = entires[0];
    const isResized = headerWidth.contentRect.width < 1600
    y = isResized ? true : false
})
observer.observe(header);


//Functionarea butoanelor inainte
buton_tools.onclick = (() => {
    meniu_principal.style.marginLeft = "-500px";
    setTimeout(() => {
        meniu_tools.style.display = "block";
    }, 200);
});
buton_water.onclick = (() => {
    meniu_principal.style.marginLeft = "-500px";
    setTimeout(() => {
        meniu_water.style.display = "block";
    }, 200);
});
buton_soil.onclick = (() => {
    meniu_principal.style.marginLeft = "-500px";
    setTimeout(() => {
        meniu_soil.style.display = "block";
    }, 200);
});
buton_weather.onclick = (() => {
    meniu_principal.style.marginLeft = "-500px";
    setTimeout(() => {
        meniu_weather.style.display = "block";
    }, 200);
});
buton_trees.onclick = (() => {
    meniu_principal.style.marginLeft = "-500px";
    setTimeout(() => {
        meniu_trees.style.display = "block";
    }, 200);
});
buton_flowers.onclick = (() => {
    meniu_principal.style.marginLeft = "-500px";
    setTimeout(() => {
        meniu_flowers.style.display = "block";
    }, 200);
});
buton_vegetables.onclick = (() => {
    meniu_principal.style.marginLeft = "-500px";
    setTimeout(() => {
        meniu_vegetables.style.display = "block";
    }, 200);
});


//Functionarea butoanelor inapoi

buton_tools_back.onclick = (() => {
    meniu_tools.style.display = "none";
    meniu_principal.style.marginLeft = "0px";
});
buton_water_back.onclick = (() => {
    meniu_water.style.display = "none";
    meniu_principal.style.marginLeft = "0px";
});
buton_soil_back.onclick = (() => {
    meniu_soil.style.display = "none";
    meniu_principal.style.marginLeft = "0px";
});
buton_weather_back.onclick = (() => {
    meniu_weather.style.display = "none";
    meniu_principal.style.marginLeft = "0px";
});
buton_trees_back.onclick = (() => {
    meniu_trees.style.display = "none";
    meniu_principal.style.marginLeft = "0px";
});
buton_flowers_back.onclick = (() => {
    meniu_flowers.style.display = "none";
    meniu_principal.style.marginLeft = "0px";
});
buton_vegetables_back.onclick = (() => {
    meniu_vegetables.style.display = "none";
    meniu_principal.style.marginLeft = "0px";
});


//butoane ce schimba continut
let string = document.querySelector(".currentQuiz");
const buton_tools_quiz1 = document.querySelector(".buton_tools_quiz1");
const buton_tools_quiz2 = document.querySelector(".buton_tools_quiz2");
const buton_tools_quiz3 = document.querySelector(".buton_tools_quiz3");
const buton_tools_quiz4 = document.querySelector(".buton_tools_quiz4");
const buton_tools_quiz5 = document.querySelector(".buton_tools_quiz5");
const buton_water_quiz1 = document.querySelector(".buton_water_quiz1");
const buton_water_quiz2 = document.querySelector(".buton_water_quiz2");
const buton_water_quiz3 = document.querySelector(".buton_water_quiz3");
const buton_water_quiz4 = document.querySelector(".buton_water_quiz4");
const buton_water_quiz5 = document.querySelector(".buton_water_quiz5");
const buton_soil_quiz1 = document.querySelector(".buton_soil_quiz1");
const buton_soil_quiz2 = document.querySelector(".buton_soil_quiz2");
const buton_soil_quiz3 = document.querySelector(".buton_soil_quiz3");
const buton_soil_quiz4 = document.querySelector(".buton_soil_quiz4");
const buton_soil_quiz5 = document.querySelector(".buton_soil_quiz5");
const buton_weather_quiz1 = document.querySelector(".buton_weather_quiz1");
const buton_weather_quiz2 = document.querySelector(".buton_weather_quiz2");
const buton_weather_quiz3 = document.querySelector(".buton_weather_quiz3");
const buton_weather_quiz4 = document.querySelector(".buton_weather_quiz4");
const buton_weather_quiz5 = document.querySelector(".buton_weather_quiz5");
const buton_trees_quiz1 = document.querySelector(".buton_trees_quiz1");
const buton_trees_quiz2 = document.querySelector(".buton_trees_quiz2");
const buton_trees_quiz3 = document.querySelector(".buton_trees_quiz3");
const buton_trees_quiz4 = document.querySelector(".buton_trees_quiz4");
const buton_trees_quiz5 = document.querySelector(".buton_trees_quiz5");
const buton_flowers_quiz1 = document.querySelector(".buton_flowers_quiz1");
const buton_flowers_quiz2 = document.querySelector(".buton_flowers_quiz2");
const buton_flowers_quiz3 = document.querySelector(".buton_flowers_quiz3");
const buton_flowers_quiz4 = document.querySelector(".buton_flowers_quiz4");
const buton_flowers_quiz5 = document.querySelector(".buton_flowers_quiz5");
const buton_vegetables_quiz1 = document.querySelector(".buton_vegetables_quiz1");
const buton_vegetables_quiz2 = document.querySelector(".buton_vegetables_quiz2");
const buton_vegetables_quiz3 = document.querySelector(".buton_vegetables_quiz3");
const buton_vegetables_quiz4 = document.querySelector(".buton_vegetables_quiz4");
const buton_vegetables_quiz5 = document.querySelector(".buton_vegetables_quiz5");



//miscarea meniului/testului in screen de width redus
const quiz_selectMenu = document.querySelector(".Quiz_selectMenu");
const meniuSelect = document.querySelector(".QSM_quizSelection");
const currentQuiz = document.querySelector(".QSM_currentQuiz");
const quizDisplay = document.querySelector(".selectedQuiz_container");
const backButtonQuiz = document.querySelector(".resize_backButton_container");

buton_tools_quiz1.onclick = (() => {
    string.innerHTML = "Solving the quiz for Tools Section - Quiz 1";
    begin_quiz.style.display = "block";
    timer_container.style.display = "none";
    exercise_container.style.display = "none";
    buttons_container.style.display = "none";
    finalScore.style.display = "none";

    if (y) {
        backButtonQuiz.style.marginRight = "280px";
        backButtonQuiz.style.display = "grid";
        quizDisplay.style.display = "block";


        // meniuSelect.style.marginLeft = "-650px";
        // currentTop.style.marginTop = "-10px";
        // currentTop.style.marginBottom = "55px";
        // topDisplay.style.display = "grid";
        // setTimeout(() => {
        //   topDisplay.style.marginTop = "-670px";
        //   meniuSelect.style.display = "none";
        //   backButton.style.display = "grid";
        // }, 200);
    }


});

backButtonQuiz.onclick = (() => {
    if (y) {

        quiz_selectMenu.style.display = "grid";
        quizDisplay.style.display = "none";
        backButtonQuiz.style.display = "none";


        //clock reset
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
        // currentQuiz.style.margin = "20px";
        // quizDisplay.style.margin = "20px";
        // meniuSelect.style.display = "flex";
        // setTimeout(() => {
        //     meniuSelect.style.margin = "20px";
        //     quizDisplay.style.display = "none";
        //     backButtonQuiz.style.display = "none";
        // }, 200);
    }
});
