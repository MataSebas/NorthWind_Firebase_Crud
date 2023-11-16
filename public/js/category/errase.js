// JavaScript Document
var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

var DOCid = ""

// Evento que se dispara cuando el contenido del DOM está cargado y listo para interactuar.
document.addEventListener('DOMContentLoaded', function() {
// Captura el ID del documento desde la URL.
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('cod'); // 'cod' es el nombre del parámetro en la URL.

if (docId) {
    // Encuentra el botón Aceptar y asigna el evento click.
    var acceptButton = document.getElementById('acceptButton');
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Llamamos a erraseData aquí, pasando DOCid como argumento.
            erraseData(docId);
        });
    }
} else {
    console.error("No se encontró 'cod' en la URL o es undefined.");
}
})

function erraseData(docId){   
    // Referencia al documento en Firebase.
    //var docRef = firebase.firestore().collection('Categories').doc(docId);
    db.collection('Categories').doc(docId).delete().then(function(){
        console.log("Document Successfully deleted!!.")
    }).catch(function(error){
        console.error("Error Removing document: ", error)
    })
    }
