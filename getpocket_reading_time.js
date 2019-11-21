javascript: (function () {
  var elements = document.querySelectorAll("div.css-zcv04z");
  var minCount = 0;
  for (i in elements) {
    try {
      minCount += parseInt(elements[i].innerHTML.split(" min")[0]);
    }
    catch (e) { /* do nothing */ }
  }
  alert("There is " + minCount + " minutes to read, which is " + Math.floor(minCount / 60) + ":" + (minCount % 60) + " hours.");
})();