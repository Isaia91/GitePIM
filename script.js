//Pour notifier que la résa est bien passée
function letspop() {
  window.alert("Réservation passée");
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
    } else {
      alert('Une erreur est survenue')
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
    } else {
      alert('Une erreur est survenue')
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
      alert('Une erreur est survenue')
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
      alert('Une erreur est survenue')
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
      alert('Une erreur est survenue')
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
      alert('Une erreur est survenue')
    }
  };
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activity&action=list",
    true
  ); // add id at the end of url to  located the good item
  xhttp.send();
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
        alert('Une erreur est survenue')
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
      } else {
        alert('Une erreur est survenue')
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
      alert('Une erreur est survenue')
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


//Ajouter une activitée (menu dynamique)

//function pour recharger la page a l'appel
function reloadpage() {
  window.location.reload(true);
}

/* Do not flame me for var names */

function reserverRepas() {
  // Récupérez la valeur sélectionnée dans le menu déroulant "repas"
  let repas = document.querySelector('#repas').value;

  // Récupérez les autres valeurs des champs de formulaire si nécessaire
  let repasDate = document.querySelector('#RepasDateReservation').value;
  let heureDeDebut = document.querySelector('#RepasHeureDeDebut').value;
  let heureDeFin = document.querySelector('#RepasHeureDeFin').value;

  // Utilisez une structure conditionnelle (if-else) pour déterminer le comportement en fonction de la valeur de l'option
  if (repas && repasDate && heureDeDebut && heureDeFin) {
    console.log("Vous avez choisi l'option Dîner.");
    const token = "D@lL@5Mùl!P@5S3";
    const service = "gite";
    const object = "activityreservation";
    const action = "create";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 201) {
        var x = this.responseText;
        var xparsed = JSON.parse(x);
      } else {
        alert('Une erreur est survenue')
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
        repasDate +
        "&" +
        "heureDebut=" +
        heureDeDebut +
        "&" +
        "heureFin=" +
        heureDeFin +
        "&" +
        "activite=" +
        repas
    );
    letspop();
  } 
  else {
    alert('Il manque des informations pour pouvoir réserver.')
  }
}

function reserverActivite() {
  // Récupérez la valeur sélectionnée dans le menu déroulant "repas"
  let activite = document.querySelector('#activite').value;

  // Récupérez les autres valeurs des champs de formulaire si nécessaire
  let activiteDate = document.querySelector('#ActivityDateReservation').value;
  let heureDeDebut = document.querySelector('#ActivityHeureDeDebut').value;
  let heureDeFin = document.querySelector('#ActivityHeureDeFin').value;

  // Utilisez une structure conditionnelle (if-else) pour déterminer le comportement en fonction de la valeur de l'option
  if ((activite === 'Kanoé' || activite === 'Randonnée' || activite === 'Plongée') && activiteDate && heureDeDebut && heureDeFin)
 {
    console.log("Vous avez choisi l'option Dîner.");
    const token = "D@lL@5Mùl!P@5S3";
    const service = "gite";
    const object = "activityreservation";
    const action = "create";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 201) {
        var x = this.responseText;
        var xparsed = JSON.parse(x);
      } else {
        alert('Une erreur est survenue')
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
        activiteDate +
        "&" +
        "heureDebut=" +
        heureDeDebut +
        "&" +
        "heureFin=" +
        heureDeFin +
        "&" +
        "activite=" +
        activite
    );
    letspop();
    // Ajoutez ici le code spécifique pour l'option Dîner
  }
  else {
    alert('Il manque des informations pour pouvoir réserver.')
  }
}