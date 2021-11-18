function showDivLog() {
    document.getElementById('log').style.display = 'block';
    document.getElementById('inscription').style.display = 'none'

}

function showDivInscription() {
    document.getElementById('inscription').style.display = 'block';
    document.getElementById('log').style.display = 'none'

}
// a revoir la validation ne marche pas corectement
function validateForm() {
    let email = document.forms["myForm"]["email"].value;
    let pass = document.forms["myForm"]["password"].value;
    console.log(email);
    console.log(pass);

    if (email == "" || email == null) {
        document.getElementById("errorEmail").innerHTML = "Email est obligatoire!!";

    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }

    if (pass == "" || pass == null) {
        document.getElementById("errorPass").innerHTML = "Le mot de passe est obligatoire!!";


    } else {
        document.getElementById("errorPass").innerHTML = "";
    }
    document.getElementById("sub").addEventListener("click", function(event) {
        event.preventDefault()
        document.getElementById("su").addEventListener("click", function(event) {
            event.preventDefault()
        });
    });
}

function showBox() {
    document.getElementById('chatBox').style.display = 'block';
}

function showHelp() {
    document.getElementById('help').style.display = 'block';
}

function hideBox() {
    document.getElementById('chatBox').style.display = 'none';
    showHelp();
}

function hideHelp() {
    document.getElementById('help').style.display = 'none';


    showBox();
}

function hideMenu() {
    // quand getElementsByClassName return une liste on devait parcourire la liste pour modifier le comportement
    var elems = document.getElementsByClassName('nav responsive');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].className = "nav";
    }
}

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";

    } else {
        x.className = "nav";
    }
}


function removeResponsive() {
    let na = document.getElementById("myNav");
    if (na.className === "nav responsive") {
        na.className = "nav";
    }
}

function sendText() {

    let textVal = document.getElementById("message").value;
    if (textVal === "" || textVal === null) {
        return;
    } else {
        let para = document.createElement("P");
        let newPar = " >> " + textVal;
        para.innerHTML = newPar;
        document.getElementById("bodyBox").appendChild(para);
    }

}