// Pentru fiecare categorie din meniul principal exista un buton care intra pe meniul categoriei respective, un buton pentru a ne reintoarce la meniul principal, si cate un buton pentru fiecare optiune posibila din meniul accesat: ex pentru tools avem buton_tools, buton_tools_back, si buton_tools_quiz[1..5].
//Pentru primele doua avem mai jos codul js pentru navigarea meniului iar pentru fiecare buton care schimba topul o sa preluam date din database

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


//Functionarea butoanelor inainte
buton_tools.onclick = (() => {
  meniu_principal.style.marginLeft = x;
  setTimeout(() => {
    meniu_tools.style.display = "block";
  }, 200);
});
buton_water.onclick = (() => {
  meniu_principal.style.marginLeft = x;
  setTimeout(() => {
    meniu_water.style.display = "block";
  }, 200);
});
buton_soil.onclick = (() => {
  meniu_principal.style.marginLeft = x;
  setTimeout(() => {
    meniu_soil.style.display = "block";
  }, 200);
});
buton_weather.onclick = (() => {
  meniu_principal.style.marginLeft = x;
  setTimeout(() => {
    meniu_weather.style.display = "block";
  }, 200);
});
buton_trees.onclick = (() => {
  meniu_principal.style.marginLeft = x;
  setTimeout(() => {
    meniu_trees.style.display = "block";
  }, 200);
});
buton_flowers.onclick = (() => {
  meniu_principal.style.marginLeft = x;
  setTimeout(() => {
    meniu_flowers.style.display = "block";
  }, 200);
});
buton_vegetables.onclick = (() => {
  meniu_principal.style.marginLeft = x;
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


//Functionarea butoanelor ce schimba continut
let string = document.querySelector(".currentTop");
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

const header = document.querySelector(".header");
let x;
let y;
const observer = new ResizeObserver((entires) => {
  const headerWidth = entires[0];
  const isSmall = headerWidth.contentRect.width < 700
  const isResized = headerWidth.contentRect.width < 1200
  x = isSmall ? "-300px" : "-500px"
  y = isResized ? true : false
})
observer.observe(header)

//Butoane specifice paginii top

const meniuSelect = document.querySelector(".TSM_topSelection");
const topDisplay = document.querySelector(".Top_displayContainer");
const currentTop = document.querySelector(".TSM_currentTop");
const backButton = document.querySelector(".resize_backButton_container");

backButton.onclick = (() => {
  if (y) {
    currentTop.style.margin = "20px";
    topDisplay.style.margin = "20px";
    meniuSelect.style.display = "flex";
    setTimeout(() => {
      meniuSelect.style.margin = "20px";
      topDisplay.style.display = "none";
      backButton.style.display = "none";
    }, 200);
  }
});

buton_tools_quiz1.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Tools Section - Quiz 1";
  if (y) {
    if (x){
      meniuSelect.style.marginLeft = "-650px";
      currentTop.style.marginTop = "-10px";
      currentTop.style.marginBottom = "55px";
      topDisplay.style.display = "grid";
      setTimeout(() => {
        topDisplay.style.marginTop = "-670px";
        meniuSelect.style.display = "none";
        backButton.style.display = "grid";
      }, 200);
    }
    else{
      meniuSelect.style.marginLeft = "-650px";
      currentTop.style.marginTop = "-10px";
      currentTop.style.marginBottom = "55px";
      topDisplay.style.display = "grid";
      setTimeout(() => {
        topDisplay.style.marginLeft = "-30px";
        topDisplay.style.marginTop = "-670px";
        meniuSelect.style.display = "none";
        backButton.style.display = "grid";
      }, 200);
    }
    }


});

buton_tools_quiz2.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Tools Section - Quiz 2";
});
buton_tools_quiz3.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Tools Section - Quiz 3";
});
buton_tools_quiz4.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Tools Section - Quiz 4";
});
buton_tools_quiz5.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Tools Section - Quiz 5";
});
buton_water_quiz1.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Water Section - Quiz 1";
});
buton_water_quiz2.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Water Section - Quiz 2";
});
buton_water_quiz3.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Water Section - Quiz 3";
});
buton_water_quiz4.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Water Section - Quiz 4";
});
buton_water_quiz5.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Water Section - Quiz 5";
});
buton_soil_quiz1.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Soil Section - Quiz 1";
});
buton_soil_quiz2.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Soil Section - Quiz 2";
});
buton_soil_quiz3.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Soil Section - Quiz 3";
});
buton_soil_quiz4.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Soil Section - Quiz 4";
});
buton_soil_quiz5.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Soil Section - Quiz 5";
});
buton_weather_quiz1.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Weather Section - Quiz 1";
});
buton_weather_quiz2.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Weather Section - Quiz 2";
});
buton_weather_quiz3.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Weather Section - Quiz 3";
});
buton_weather_quiz4.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Weather Section - Quiz 4";
});
buton_weather_quiz5.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Weather Section - Quiz 5";
});
buton_trees_quiz1.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Trees Section - Quiz 1";
});
buton_trees_quiz2.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Trees Section - Quiz 2";
});
buton_trees_quiz3.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Trees Section - Quiz 3";
});
buton_trees_quiz4.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Trees Section - Quiz 4";
});
buton_trees_quiz5.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Trees Section - Quiz 5";
});
buton_flowers_quiz1.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Flowers Section - Quiz 1";
});
buton_flowers_quiz2.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Flowers Section - Quiz 2";
});
buton_flowers_quiz3.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Flowers Section - Quiz 3";
});
buton_flowers_quiz4.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Flowers Section - Quiz 4";
});
buton_flowers_quiz5.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Flowers Section - Quiz 5";
});
buton_vegetables_quiz1.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Vegetables Section - Quiz 1";
});
buton_vegetables_quiz2.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Vegetables Section - Quiz 2";
});
buton_vegetables_quiz3.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Vegetables Section - Quiz 3";
});
buton_vegetables_quiz4.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Vegetables Section - Quiz 4";
});
buton_vegetables_quiz5.onclick = (() => {
  string.innerHTML = "Viewing Top 5 for Vegetables Section - Quiz 5";
});

