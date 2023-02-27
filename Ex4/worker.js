var i;

function timedCount() {
  i = new Date();
  postMessage(i);
  setTimeout("timedCount()", 1000);
}

timedCount();