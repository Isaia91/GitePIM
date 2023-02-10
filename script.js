//Pour notifier que la résa est bien passée
function letspop() {
  window.alert("Réservation passée");
}

//Ajouter une resa randonée (activité)
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
  letspop();
}

//Ajouter une resa randonée (activité)
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
  letspop();
}

//Ajouter une resa plongée(activité)
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
  letspop();
}

//Ajouter une resa diner (activité)
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
  letspop();
}

//Ajouter une resa dejeuner (activité)
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
  letspop();
}

//Ajouter une resa bungalow
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
  letspop();
}

//Ajouter une resachambre
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
  letspop();
}

//Afficher les chambres
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

//Afficher les bungalow
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

//Afficher les resa activité
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
          "</td>" +
          '<td><button type="button"  class="btn btn-danger bttn" onclick="deleteitem(' +
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

//Afficher activité proposé
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

//check si l'on recupere bien l'id (juste informatif)
function loaddata(id) {
  console.log;
}

//Pour supprimer une resa Activité
function deleteitem(id) {
  const token = "D@lL@5Mùl!P@5S3";
  const action = "cancel";
  const service = "gite";
  const object = "activityreservation";
  console.log("welcome in function deleteitem for the id :" + id);
  var result = confirm("Vous allez supprimer l'élément " + id + " ?");
  if (result == true) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var x = this.responseText;
        var xparsed = JSON.parse(x);
        console.log("func to supp");
        //console.log(xparsed);
      } else {
      }
    };
    xhttp.open(
      "POST",
      "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=cancel",
      true
    );
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    console.log(token);
    console.log(id);
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
        "idActivityReservation=" +
        id
    );
    console.log("success for the function delete item," + id + " is deleted");
    //console.log(id);
  } else {
  }
  window.location.reload(true);
}
//Pour supprimer une resa chambre
function deleteroomresa(id) {
  const token = "D@lL@5Mùl!P@5S3";
  const action = "cancel";
  const service = "gite";
  const object = "roomreservation";
  console.log("welcome in function deleteitem for the id :" + id);
  var result = confirm("Vous allez supprimer l'élément " + id + " ?");
  if (result == true) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var x = this.responseText;
        var xparsed = JSON.parse(x);
        console.log("func to supp");
        //console.log(xparsed);
      } else {
      }
    };
    xhttp.open(
      "POST",
      "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=cancel",
      true
    );
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    console.log(token);
    console.log(id);
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
        "idRoomReservation=" +
        id
    );
    console.log("success for the function delete item," + id + " is deleted");
    //console.log(id);
  } else {
  }
  window.location.reload(true);
}

//Afficher les resa des chambres
function getResaroom() {
  console.log("button getresaactivite");
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
          "</td>" +
          '<td><button type="button"  class="btn btn-danger bttn" onclick="deleteroomresa(' +
          element.id +
          ')" data-toggle="modal" data-target="#myModaltodelete" title="Delete"><i class="fas fa-trash fa-inverse "></i></button></td>'; //recupere l'id par ligne avec le element.id que l'on passe en parametre de fonctions pour les suppressions
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

//Appel pour avoir toutes les activités (pour les afficher plus tard dans le menu déroulant) 
function callactivity() {
  //on la charge dans le chargement de la page
  console.log("hallo wurld");
  const k = document.getElementById("selactivity");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      console.log(x);
      console.log(typeof x);
      console.log(xparsed);
      console.log(typeof xparsed);
      xparsed.forEach((element) => {
        const tesbete = document.createElement("option"); //creer une "balise" option pour le menu déroulant
        console.log(element);
        tesbete.value = element;
        const val = tesbete.value;
        tesbete.text = element;
        console.log("val  = " + val);
        k.add(tesbete, element);
      });
      /*for(let i in xparsed ){
        let option = document.createElement('option');
        option.setAttribute('value',xparsed[i]);
        let optiontxt = document.createTextNode(i);
        option.appendChild(optiontxt);
        k.appendChild(option)
        }*/
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

//Ajouter une activitée (menu dynamique)
function addActivityReservation() {
  let x = document.getElementById("selactivity").value;
  let y = document.getElementById("ActivityDateReservation").value;
  let k = document.getElementById("ActivityHeureDeDebut").value;
  let z = document.getElementById("ActivityHeureDeFin").value;
  if (formchecker(x, y, k, z) === true) {
    console.log("n'est pas vide");
    const token = "D@lL@5Mùl!P@5S3";
    const service = "gite";
    const object = "activityreservation";
    const action = "create";
    var xhttp = new XMLHttpRequest();
    formchecker();
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
        document.querySelector("#ActivityDateReservation").value +
        "&" +
        "heureDebut=" +
        document.querySelector("#ActivityHeureDeDebut").value +
        "&" +
        "heureFin=" +
        document.querySelector("#ActivityHeureDeFin").value +
        "&" +
        "activite=" +
        document.querySelector("#selactivity").value
    );
    letspop();
  } else {
    window.alert("Il faut remplir tout les champs");
  }
  /*
  const token = "D@lL@5Mùl!P@5S3";
  const service = "gite";
  const object = "activityreservation";
  const action = "create";
  var xhttp = new XMLHttpRequest();
  formchecker();
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
      document.querySelector("#ActivityDateReservation").value +
      "&" +
      "heureDebut=" +
      document.querySelector("#ActivityHeureDeDebut").value +
      "&" +
      "heureFin=" +
      document.querySelector("#ActivityHeureDeFin").value +
      "&" +
      "activite=" +
      document.querySelector("#selactivity").value
  )letspop();*/
}

//function pour recharger la page a l'appel
function reloadpage() {
  window.location.reload(true);
}

//Pour le popup lors du survol du 'i' dans la modal formulaire pour la résa plongée
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//verrouiller button reserver plongée si <12 du formulaire reservé a plongée
document.getElementById("ageplonge").addEventListener("change", function () {
  if (this.checked) {
    console.log("Peut pratiquer la plongée");
    const p = document.getElementById("young");
    p.classList.remove("disabled"); //enleve la class bootsrap qui 'desactive' le button
  } else {
    console.log("Bah peut pas pratiquer la plongée");
    console.log("Peut pratiquer la plongée");
    const p = document.getElementById("young");
    p.classList.add("disabled"); // met-remet la class bootsrap permettant de desactiver le boutton
  }
});

//Pour la case a cocher de "Reserver mon activité"
document.getElementById("ageactivite").addEventListener("change", function () {
  if (this.checked) {
    console.log("Peut pratiquer la plongée");
    const p = document.getElementById("youngac");
    p.classList.remove("disabled"); //enleve la class bootsrap qui 'desactive' le button
  } else {
    console.log("Bah peut pas pratiquer la plongée");
    console.log("Peut pratiquer la plongée");
    const p = document.getElementById("youngac");
    p.classList.add("disabled"); // met-remet la class bootsrap permettant de desactiver le boutton
  }
});

//Si l'activitée choisit est 'Plongée'
document.getElementById("selactivity").addEventListener("change", function () {
  console.log(document.getElementById("selactivity").value);
  if (document.getElementById("selactivity").value == "Plongée") {
    //si l'activité choisi est "plongée" alors on check l'age
    console.log("afficher la case a cocher");
    document.getElementById("youngac").classList.add("disabled");

    document.getElementById("tohide").style.display = "block"; //on affiche la case a cocher
  } else {
    console.log("pas besoin de case a cocher");
    document.getElementById("youngac").classList.remove("disabled");
    document.getElementById("tohide").style.display = "none"; //on cache-recache la case a cocher si l'activité n'est pas 'Plongée'
  }
});

//Faire en sorte que le formulaire soit remplis pour pouvoir le soumettre
function formchecker(x, y, k, z) {
  if (x == "" || y == "" || k == "" || z == "") {
    return false;
  } else {
    return true;
  }
  /*en parametres les champs/input du formulaire (on verifie que chaque input ne soit pas vides)
    PS:pas d'idées pour le noms des variables
    */
}

/* Do not flame me for var names */