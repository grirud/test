document.getElementById("text_input").value = document.getElementById("selector").options[0].label;

function changeOpinion() {
  let option_value = document.getElementById("selector").options.selectedIndex;
  let option_text = document.getElementById("selector").options[option_value].label;
  document.getElementById("text_input").value = option_text;
}

function addOption() {
  let user_text = document.getElementById("text_input").value;
  user_text = user_text.trim();

  if (!user_text) {
    document.getElementById("text_input").classList.add("redBorder");
    return;
  }

  let option_value = document.getElementById("selector").options.selectedIndex;
  let option_parent = document.getElementById("selector");
  option_parent.options[option_value].setAttribute("label", user_text);
}

function changeText() {
  document.getElementById("text_input").classList.remove("redBorder");
}

document.getElementById("buttonChange").addEventListener("click", addOption);
document.getElementById("selector").addEventListener("change", changeOpinion);
document.getElementById("text_input").addEventListener("input", changeText);
