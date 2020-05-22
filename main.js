// Nell'ottica di quanto visto a lezione, produrre una lista in HTML con stato e prezzo di tutti i pagamenti. I files saranno quindi 3:
// - index.html [che importa il JS]
// - main.js [che fa ajax su getPagamenti.php]
// - getPagamenti.php [che legge i dati da db come visto a lezione, attraverso il mysqli]
// Naturalmente importanza 0 alla grafica, basta riuscire a stampare in pagina i dati in qualche modo.
function getPagamenti() {
  $.ajax({
    url: 'getPagamenti.php',
    method: 'GET',
    success: function(data) {
      var target = $('#target');
      target.html('<h1>Pagamenti</h1>');

      for (var pagamento of data) {
        console.log(pagamento);
        target.append('<li>' + pagamento + '</li>');
      }
    },
    error: function(err) {
      console.error(err);
    }
  });
}

function init() {
  getPagamenti();
}

$(document).ready(init);
