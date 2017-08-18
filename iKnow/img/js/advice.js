var advice = document.createElement("p");
var adviceContent = document.createTextNode(localStorage.getItem("pContent"));
var attribute = document.createAttribute("name");
attribute.value = localStorage.getItem("pId");
advice.setAttributeNode(attribute);
advice.appendChild(adviceContent);
var div = document.getElementsByClassName("panel-body");
div[0].insertBefore(advice, null);

var answer = document.getElementById("answerTab");
var action = document.createAttribute("action");
action.value = "/advice?questionId="+localStorage.getItem("pId");
answer.setAttributeNode(action);
