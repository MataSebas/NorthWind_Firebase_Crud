// JavaScript Document
var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

var DOCid = ""

// Evento que se dispara cuando el contenido del DOM está cargado y listo para interactuar.
document.addEventListener('DOMContentLoaded', function() {
// Captura el ID del documento desde la URL.
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('cod'); // 'cod' es el nombre del parámetro en la URL.

DOCid = docId


})

function erraseData(DOCid){   
    // Referencia al documento en Firebase.
    var docRef = firebase.firestore().collection('Categories').doc(docId);
    console.log(DOCid)
    }
