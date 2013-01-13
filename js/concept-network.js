$(document).ready(function() {
  var load = $('#load');
  var save = $('#save');
  var name = $('#name');

  // var ConceptNetwork = require('concept-network');
  var ConceptNetwork = require('/home/francois/dev/browser-concept-network/lib/concept-network').ConceptNetwork;
  cn = new ConceptNetwork();
  cn.addNode('Test');
  console.log(cn);

  load.on('click', function () {
    var cnSave = localStorage.ector;
    var newCN = Object.create(ConceptNetwork.prototype);
    Object.merge(newCN, JSON.parse(cnSave));
    cn = newCN;
    load.hide();
    alert('Concept Network loaded.');
    return false;
  });
});