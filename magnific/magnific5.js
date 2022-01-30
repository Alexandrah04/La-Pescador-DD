$(document).ready(function() { //pentru a face o funcție disponibilă după încărcarea documentului
  $('#gallery-center5').magnificPopup({ //parintele
    delegate: 'a', // selector de elemente de tip copil, dand click se va deschide popup
    type: 'image',
    // alte optiuni
    gallery: {
  // optiuni pentru galerie
  enabled: true
  }
  });
});
