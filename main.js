

var humbarger_menu = document.querySelector(".humbarger_menu");
var li = document.querySelectorAll(".tab_nav li");
var show_div = document.querySelectorAll(".profile-content");
var side_left = document.querySelector(".mobile_side_left");
var accordion_show_hide = document.querySelector(".accordion_show_hide");
var accordion_div = document.querySelector(".accordion_div");
var add_state = document.querySelector(".add_state");
var add_state_2 = document.querySelector(".add_state_2");
var accordion_show_hide = document.querySelector(".accordion_show_hide");
var main_box=document.querySelector(".main_box");
var body=document.querySelector("body");

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    li.forEach(function (new_li) {
      new_li.classList.remove("active");
    });
    this.classList.add("active");
    var attr = this.getAttribute("data-li");
    show_div.forEach(function (item) {
      item.classList.remove("active");
    });
    if (attr == "first") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    } else if (attr == "second") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    } else if (attr == "third") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    }
  });
}
// for setting tab 

var setting_tab_li = document.querySelectorAll(".setting_tab_nav li");
var setting_content_box = document.querySelectorAll(".setting_content_box");
for (var i = 0; i < setting_tab_li.length; i++) {
  setting_tab_li[i].addEventListener("click", function () {
    setting_tab_li.forEach(function (setting_li) {
      setting_li.classList.remove("active");
    });
    this.classList.add("active");
    var attr = this.getAttribute("data-li");
    setting_content_box.forEach(function (item) {
      item.classList.remove("active");
    });
    if (attr == "first") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    } else if (attr == "second") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    } else if (attr == "third") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    } else if (attr == "fourth") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    }
  });
}


// for card tab 
var Card_li = document.querySelectorAll(".card_no_li");
var show_card = document.querySelectorAll(".card_details");
for (var i = 0; i < Card_li.length; i++) {
  Card_li[i].addEventListener("click", function () {
    Card_li.forEach(function (new_li) {
      new_li.classList.remove("active");
    });
    this.classList.add("active");
    var attr = this.getAttribute("data-li");
    show_card.forEach(function (item) {
      item.classList.remove("active");
    });
    if (attr == "card_system_one") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    } else if (attr == "card_system_two") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    } else if (attr == "card_system_three") {
      var item = document.querySelector("." + attr);
      item.classList.add("active");
    }
  });
}



function ShowMenu(){
  side_left.classList.toggle("active");
  main_box.classList.toggle("active");
}
main_box.addEventListener("click" ,function(){
  side_left.classList.remove("active");
  main_box.classList.remove("active");
});
      var dateVal = document.querySelector(".days_value");
var inputRange = document.querySelector("#input_range");
inputRange.oninput = () => {
  let rangeVal = inputRange.value;
  dateVal.textContent = rangeVal + " day left";
  dateVal.style.left = rangeVal / 1 + "%";
};
humbarger_menu.onclick = () => {
  side_left.classList.toggle("active");
};
accordion_show_hide.onclick = () => {
  accordion_div.classList.toggle("active");
  add_state.classList.toggle("active");
  add_state_2.classList.toggle("active");
  accordion_show_hide.classList.toggle("active");
};



