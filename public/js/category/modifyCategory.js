// JavaScript Document
var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

const txtCategoryID = document.querySelector('#txtCategoryID');
const txtCategoryName = document.querySelector('#txtCategoryName');
const txtDescription = document.querySelector('#txtDescription');
const txtUrlImage = document.querySelector('#txtUrlImage');
const btnLoad  = document.querySelector('#btnLoad');

// Evento que se dispara cuando el contenido del DOM está cargado y listo para interactuar.
document.addEventListener('DOMContentLoaded', function() {
// Captura el ID del documento desde la URL.
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('cod'); // 'cod' es el nombre del parámetro en la URL.
console.log(docId);

// Referencia al documento en Firebase.
var docRef = firebase.firestore().collection('Categories').doc(docId);

// Recupera los datos actuales del documento.
docRef.get().then(function(doc) {
    if (doc.exists) {
    // Muestra los datos actuales en el formulario.
    document.getElementById('txtCategoryID').value = doc.data().CategoryID;
    document.getElementById('txtCategoryName').value = doc.data().CategoryName;
    document.getElementById('txtDescription').value = doc.data().Description;
    document.getElementById('txtUrlImage').value = doc.data().urlImage;
    // Repite para otros elementos como descripción, etc.
    } else {
    // El documento no existe.
    console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

// Agrega un evento al botón de carga o al evento de envío del formulario.
btnLoad.addEventListener('click', function() {
    // Recoge los datos actualizados del formulario.
    const updatedData = {
    categoryID : document.getElementById('txtCategoryID').value = doc.data().CategoryID,
    categoryName: document.getElementById('txtCategoryName').value,
    txtDescription: document.getElementById('txtDescription').value = doc.data().Description
    

    // ... otros datos del formulario
    };

    // Actualiza los datos en Firebase.
    docRef.update(updatedData).then(function() {
    console.log("Document successfully updated!");
    }).catch(function(error) {
    // El documento no se actualizó correctamente.
    console.error("Error updating document: ", error);
    });
});
});
    

