setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "green";
    setTimeout(function () {
      document.body.style.backgroundColor = "blue";
      setTimeout(function () {
        document.body.style.backgroundColor = "yellow";
        setTimeout(function () {
          document.body.style.backgroundColor = "black";
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}, 3000);
