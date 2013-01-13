$(document).ready(function() {
  // Add id to h2 in the document.
  $('h2').each(function (index, header) {
    // console.log(index, header.innerText);
    $('h2:nth-of-type('+ Number(index+1) +')')
      .attr('id',
        header.innerText.replace(' ','')
      );
  });

  // hero-unit to the first paragraphs
  var globalSel = 'h1, h1+p';
  var sel = 'h1+p';
  var p = $(sel);
  var content = '<div class="hero-unit"><h1>' + $('h1').html() + "</h1><p>" + p.html() + "</p>";
  while (p.length) {
    sel = sel + '+p';
    p = $(sel);
    if (p.length) {
      globalSel = globalSel + ', ' + sel;
      content += "<p>" + p.html() + "</p>";
    }
  }
  content += '</div>';
  sel = sel.replace('+p','');
  p = $(sel);
  while(p.length) {
    p.remove();
    sel = sel.replace('+p', '');
    p = $(sel);
  }
  
  $('div.container:nth-of-type(2)').prepend(content);

  // Buttonize some links
  $('h2#Demonstration+p a').addClass('btn btn-primary');
  $('h2#Demonstration+p+p a').addClass('btn');
});