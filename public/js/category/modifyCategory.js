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


// Referencia al documento en Firebase.
var docRef = firebase.firestore().collection('Categories').doc(docId);

// Recupera los datos actuales del documento.
docRef.get().then(function(doc) {
    if (doc.exists) {
    // Muestra los datos actuales en el formulario.
    document.getElementById('txtCategoryID').value = doc.data().CategoryID;
    document.getElementById('txtCategoryName').value = doc.data().CategoryName;
    document.getElementById('txtDescription').value = doc.data().Description;
    //document.getElementById('txtUrlImage').value = doc.data().urlImage;
    
    var acceptButton = document.getElementById('acepModif');
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Llamamos a erraseData aquí, pasando DOCid como argumento.
            modifyCat(docId);
        });
    }
    } else {
    // El documento no existe.
    console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

// Agrega un evento al botón de carga o al evento de envío del formulario.
function modifyCat(id){
    var docRef = firebase.firestore().collection('Categories').doc(id);
    return docRef.update({
        CategoryID: document.getElementById('txtCategoryID').value,
        CategoryName: document.getElementById('txtCategoryName').value,
        Description: document.getElementById('txtDescription').value
    }).then(function(){
        console.log("Document Successfully updated!")
    }).catch(function(error){
        console.log('Error updating the info', error)
    })
}






// btnLoad.addEventListener('click', function() {
//     // Recoge los datos actualizados del formulario.
//     const updatedData = {
//     categoryID : document.getElementById('txtCategoryID').value = doc.data().CategoryID,
//     categoryName: document.getElementById('txtCategoryName').value = doc.data().CategoryName,
//     txtDescription: document.getElementById('txtDescription').value = doc.data().Description
    

//     // ... otros datos del formulario
//     };

// });
});
    

