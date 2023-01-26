function addKanoeReservation() {
  const token = "D@lL@5Mùl!P@5S3";
  const service = "gite";
  const object = "activityreservation";
  const action = "create";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
    }
  };
  xhttp.open(
    "POST",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=create",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send(
    "token=" +
      token +
      "&" +
      "service=" +
      service +
      "&" +
      "object=" +
      object +
      "&" +
      "action=" +
      action +
      "&" +
      "date=" +
      document.querySelector("#kanoeDateReservation").value +
      "&" +
      "heureDebut=" +
      document.querySelector("#kanoeHeureDeDebut").value +
      "&" +
      "heureFin=" +
      document.querySelector("#kanoeHeureDeFin").value +
      "&" +
      "activite=" +
      document.querySelector("#kanoe").value
  );
}

function addDinerReservation() {
  const token = "D@lL@5Mùl!P@5S3";
  const service = "gite";
  const object = "activityreservation";
  const action = "create";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
    }
  };
  xhttp.open(
    "POST",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=create",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send(
    "token=" +
      token +
      "&" +
      "service=" +
      service +
      "&" +
      "object=" +
      object +
      "&" +
      "action=" +
      action +
      "&" +
      "date=" +
      document.querySelector("#dinerDateReservation").value +
      "&" +
      "heureDebut=" +
      document.querySelector("#dinerHeureDeDebut").value +
      "&" +
      "heureFin=" +
      document.querySelector("#dinerHeureDeFin").value +
      "&" +
      "activite=" +
      document.querySelector("#diner").value
  );
}

function addDejeunerReservation() {
  const token = "D@lL@5Mùl!P@5S3";
  const service = "gite";
  const object = "activityreservation";
  const action = "create";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
    }
  };
  xhttp.open(
    "POST",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=create",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send(
    "token=" +
      token +
      "&" +
      "service=" +
      service +
      "&" +
      "object=" +
      object +
      "&" +
      "action=" +
      action +
      "&" +
      "date=" +
      document.querySelector("#dejeunerDateReservation").value +
      "&" +
      "heureDebut=" +
      document.querySelector("#dejeunerHeureDeDebut").value +
      "&" +
      "heureFin=" +
      document.querySelector("#dejeunerHeureDeFin").value +
      "&" +
      "activite=" +
      document.querySelector("#dejeuner").value
  );
}

function getbungalow() {
  console.log("button test");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      console.log(xparsed);
      const info = document.getElementById("bungalowmodal");
      xparsed.forEach((element) => {
        info.innerHTML += "<tr>";
      });
    }
    xhttp.open(
      "GET",
      "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=room&action=list&type=bungalow",
      true
    ); // add id at the end of url to  located the good item    xhttp.send();
  };
}

function getroom() {
  console.log("button test");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      console.log(xparsed);
      const info = document.getElementById("roommodal");
      xparsed.forEach((element) => {
        info.innerHTML += "<tr>";
      });
    }
    xhttp.open(
      "GET",
      "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=room&action=list&type=chambre",
      true
    );
  };
}
