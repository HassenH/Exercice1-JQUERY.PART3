// jquery partie 3 - exercice 1
// Du code en jQuery va pouvoir être tapé ici !
var numberButton = 1;
//déclaration de la variable
$(document).ready(function(){
  //Après la déclaration de la méthode click on déclare une fonction
  // qui lors de chaque évenement click incrémentera la valeur de numberButton
  $('#clickMe').click(function(){
    $('#number').each(function(){
      $('#number').val(numberButton ++); // val permet de définir la valeur d'un iput
    });
  });
});
// SOLUTION 2
$(function(){
  var count = 0;
  $('#clickMe').click(function(){
    count++; //count=1 , Ajoute 1 au compteur 1 INCREMENTE += 10
    $('#number').val(count); //.val par exemple sur un formulaire déja construire un formulaire
  });
});
