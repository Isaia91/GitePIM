//reset fields
function letspop(){
  window.alert("Réservation passée")
}
//Reservation activité

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

function addRandonneeReservation() {
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
      document.querySelector("#randonneeDateReservation").value +
      "&" +
      "heureDebut=" +
      document.querySelector("#randonneeHeureDeDebut").value +
      "&" +
      "heureFin=" +
      document.querySelector("#randonneeHeureDeFin").value +
      "&" +
      "activite=" +
      document.querySelector("#randonnee").value
  );
}

function addPlongeeReservation() {
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
      document.querySelector("#plongeeDateReservation").value +
      "&" +
      "heureDebut=" +
      document.querySelector("#plongeeHeureDeDebut").value +
      "&" +
      "heureFin=" +
      document.querySelector("#plongeeHeureDeFin").value +
      "&" +
      "activite=" +
      document.querySelector("#plongee").value
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

//Reservation chambre
function addBungalowReservation() {
  const token = "D@lL@5Mùl!P@5S3";
  const service = "gite";
  const object = "roomreservation";
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
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=create",
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
      "idRoom=" +
      document.querySelector("#numberBungalow").value +
      "&" +
      "action=" +
      action +
      "&" +
      "dateEntree=" +
      document.querySelector("#DateDentreeBungalowReservation").value +
      "&" +
      "dateSortie=" +
      document.querySelector("#DateDeSortieBungalowReservation").value
  );
}

function addChambreReservation() {
  const token = "D@lL@5Mùl!P@5S3";
  const service = "gite";
  const object = "roomreservation";
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
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=create",
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
      "idRoom=" +
      document.querySelector("#numberChambre").value +
      "&" +
      "action=" +
      action +
      "&" +
      "dateEntree=" +
      document.querySelector("#DateDentreeChambreReservation").value +
      "&" +
      "dateSortie=" +
      document.querySelector("#DateDeSortieChambreReservation").value
  );
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
        info.innerHTML +=
          "<tr>" +
          //info.innerHTML +=
          "<td>" +
          element.id +
          "</td>" +
          "<td>" +
          element.type +
          "</td>" +
          "<td>" +
          element.landscape +
          "</td>" +
          '<td><button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#test" onclick="loaddata(' +
          element.id +
          ');"><i class="fas fa-pencil"></i></button></td>'; //recupere l'id par ligne avec le element.id que l'on passe en parametre de fonctions pour les suppressions
        info.innerHTML += "</tr>";
      });
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction lance");
    }
  };
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=room&action=list&type=chambre",
    true
  ); // add id at the end of url to  located the good item
  xhttp.send();
}

function getbungalow() {
  console.log("button getbungalow");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      console.log(xparsed);
      const info = document.getElementById("bungalowmodal");
      xparsed.forEach((element) => {
        info.innerHTML +=
          "<tr>" +
          //info.innerHTML +=
          "<td>" +
          element.id +
          "</td>" +
          "<td>" +
          element.type +
          "</td>" +
          "<td>" +
          element.landscape +
          "</td>" +
          '<td><button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#test" onclick="deleteroomresa(' +
          element.id +
          ');"><i class="fas fa-pencil"></i></button></td>'; //recupere l'id par ligne avec le element.id que l'on passe en parametre de fonctions pour les suppressions
        info.innerHTML += "</tr>";
      });
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction lance");
    }
  };
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=room&action=list&type=bungalow",
    true
  ); // add id at the end of url to  located the good item
  xhttp.send();
}

function getResaActivite() {
  console.log("button getresaactivite");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      console.log(xparsed);
      const info = document.getElementById("TableResaActivite");
      xparsed.forEach((element) => {
        info.innerHTML +=
          "<tr>" +
          //info.innerHTML +=
          "<td>" +
          element.id +
          "</td>" +
          "<td>" +
          element.activite +
          "</td>" +
          "<td>" +
          element.date +
          "</td>" +
          "<td>" +
          element.heureDebut +
          "</td>" +
          "<td>" +
          element.heureFin +
          "</td>"+
          '<td><button type="button"  class="btn btn-danger" onclick="deleteitem(' +
          element.id +
          ')" data-toggle="modal" data-target="#myModaltodelete" title="Delete"><i class="fas fa-trash fa-inverse"></i></button></td>'; //recupere l'id par ligne avec le element.id que l'on passe en parametre de fonctions pour les suppressions
        info.innerHTML += "</tr>";
      });
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction lance");
    }
  };
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=list",
    true
  ); // add id at the end of url to  located the good item
  xhttp.send();
}

function getActivite() {
  console.log("button getresaactivite");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      console.log(xparsed);
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction lance");
    }
  };
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activity&action=list",
    true
  ); // add id at the end of url to  located the good item
  xhttp.send();
}

 function loaddata (id){
  console.log
 }
 function deleteitem(id) {
  const token = "D@lL@5Mùl!P@5S3"
  const action = "cancel"
  const service ="gite"
  const object = "activityreservation"
  console.log("welcome in function deleteitem for the id :" + id);
  var result = confirm("Vous allez supprimer l'élément "+ id +" ?");
  if (result == true) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var x = this.responseText;
        var xparsed = JSON.parse(x);
        console.log("func to supp")
        //console.log(xparsed);
      } else {
      }
    };
    xhttp.open("POST",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=cancel",
    true
  );xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  console.log(token)
  console.log(id)
    xhttp.send(
    "token=" +
    token +
    "&"+
    "service="+
    service+
    "&"+
    "object=" +
    object+
    "&"+ 
    "action="+
    action+
    "&"+
    "idActivityReservation="+ 
    id
    ,)
    console.log("success for the function delete item," + id + " is deleted");
    //console.log(id);
  } else {
  }
}
function deleteroomresa(id) {
  const token = "D@lL@5Mùl!P@5S3"
  const action = "cancel"
  const service ="gite"
  const object = "roomreservation"
  console.log("welcome in function deleteitem for the id :" + id);
  var result = confirm("Vous allez supprimer l'élément "+ id +" ?");
  if (result == true) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var x = this.responseText;
        var xparsed = JSON.parse(x);
        console.log("func to supp")
        //console.log(xparsed);
      } else {
      }
    };
    xhttp.open("POST",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=cancel",
    true
  );xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  console.log(token)
  console.log(id)
    xhttp.send(
    "token=" +
    token +
    "&"+
    "service="+
    service+
    "&"+
    "object=" +
    object+
    "&"+ 
    "action="+
    action+
    "&"+
    "idRoomReservation="+ 
    id
    ,)
    console.log("success for the function delete item," + id + " is deleted");
    //console.log(id);
  } else {
  }
}

function getResaroom(){
  console.log('button getresaactivite')
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
       var x = this.responseText;
       var xparsed = JSON.parse(x);
       console.log(xparsed);
       const info = document.getElementById("TableResaroom");
       xparsed.forEach((element) => {
         info.innerHTML +=
         "<tr>" +
           //info.innerHTML +=
           "<td>" +
           element.number +
           "</td>" +
           "<td>" +
           element.type +
           "</td>" +
           "<td>" +
           element.landscape +
           "</td>" +
           "<td>" +
           element.dateEntree +
           "</td>" +
           "<td>" +
           element.dateSortie +
           "</td>"+
           '<td><button type="button"  class="btn btn-danger" onclick="deleteroomresa(' +
           element.id +
           ')" data-toggle="modal" data-target="#myModaltodelete" title="Delete"><i class="fas fa-trash fa-inverse"></i></button></td>'; //recupere l'id par ligne avec le element.id que l'on passe en parametre de fonctions pour les suppressions
         info.innerHTML += "</tr>";
       });
     } else {
       //document.getElementById("adress-output").innerHTML="error";
       //console.log("dans le else de la fonction lance");
     }
   };
   xhttp.open(
     "GET",
     "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=list",
     true
   ); // add id at the end of url to  located the good item
   xhttp.send();
 }
 