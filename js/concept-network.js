$(document).ready(function() {
  var load = $('#load');
  var save = $('#save');
  var name = $('#name');

  // var ConceptNetwork = require('concept-network').ConceptNetwork; // FIXME
  var ConceptNetwork = require('/home/francois/dev/browser-concept-network/lib/concept-network').ConceptNetwork;
  cn = new ConceptNetwork();

  if (!localStorage) {
    load.remove();
    save.remove();
  }
  else {
    save.hide();
    if (typeof localStorage.ector === 'undefined') {
      load.hide();
    }
  }

  var alertTpl = $('#alerts').html();
  $('#alerts div').remove();
  /**
   *
   * @param {string} type 'success', 'warning', 'error', or 'info'
   * @param {string} message
   **/
  var showAlert = function(type, message) {
    var inform = {
      type: type,
      message: message
    };
    $('#alerts').append(Mustache.render(alertTpl, inform));
  };

  var infoTpl = $('#infos').html();
  $('#infos').html('');
  /**
   * Display information on the Concept Network (cn)
   **/
  var showInfos = function() {
    var status = {
      nodes_number: cn.nodeLastId,
      links_number: Object.size(cn.link)
    };
    // status.nodes = [
    //   {id: 1, label: "sSalut, comment ça va?", occ: 1}
    // ];
    status.nodes = [];
    // for(var i in cn.node) {
    //   status.nodes.push(cn.node[i]);
    // }
    $('#infos').append(Mustache.render(infoTpl, status));

    // Create data table for DataTable
    aaData = [];
    var aoColumns = [
      {"sTitle": "id", "sClass": "right", "sType": "numeric"},
      {"sTitle": "label", "sWidth": "80%"},
      {"sTitle": "occurrence", "sClass": "right", "sType": "numeric", "sWidth": "10%"}
    ];
    for(var i in cn.node) {
      var node = cn.node[i];
      var a = [node.id, node.label, node.occ];
      aaData.push(a);
    }
    // Display DataTable
    $('#infos').append('<table cellpadding="0" cellspacing="0" border="0" class="display" id="cntable"></table>');
    $('#cntable').DataTable({"aaData": aaData, "aoColumns": aoColumns, "sPaginationType": "full_numbers"});
  };

  load.on('click', function () {
    var cnSave = localStorage.ector;
    var newCN = Object.create(ConceptNetwork.prototype);
    Object.merge(newCN, JSON.parse(cnSave));
    cn = newCN;
    load.hide();
    showAlert('success', 'Concept Network loaded.');
    showInfos();
    return false;
  });

  save.on('click', function () {
    localStorage.setItem('ector', JSON.stringify(cn));
    load.hide();
    save.hide();

    showAlert('success', 'Concept Network saved.');
    return false;
  });

});