$(function() {
  const TOKEN = 'pk_7c44967eb93a42fca437d356c5313387';
  const BASE_URL = 'https://cloud.iexapis.com';

  const mostActiveTemplate = Handlebars.compile(`
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Symbol</th>
      <th scope="col">Company name</th>
      <th scope="col">Exchange</th>
      <th scope="col">Volume</th>
    </tr>
  </thead>
  <tbody>
  {{#each rows}}
    <tr>
      <td>{{symbol}}</td>
      <td>{{companyName}}</td>
      <td>{{primaryExchange}}</td>
      <td>{{avgTotalVolume}}</td>
    </tr>
  {{/each}}
  </tbody>
</table>
  `);

  const historicalDataTemplate = Handlebars.compile(`
  <h2 class="text-center">{{symbol}}<button class="btn btn-outline-secondary float-left" id="back">Back</button></h2>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Open</th>
      <th scope="col">Close</th>
      <th scope="col">High</th>
      <th scope="col">Low</th>
      <th scope="col">Volume</th>
    </tr>
  </thead>
  <tbody>
  {{#each rows}}
    <tr>
      <td>{{date}}</td>
      <td>{{open}}</td>
      <td>{{close}}</td>
      <td>{{high}}</td>
      <td>{{low}}</td>
      <td>{{volume}}</td>
    </tr>
  {{/each}}
  </tbody>
</table>
  `);

  const rowClickHandler = function(event) {
    if (event.target.tagName !== 'TD') {
      return;
    }
    const symbol = event.target.parentElement.firstElementChild.textContent;

    $.getJSON(`${BASE_URL}/stable/stock/${symbol}/chart/1m?token=${TOKEN}`).
        done(function(data) {
          const results = historicalDataTemplate({rows: data, symbol});
          $('#most-active').hide();
          $('#historical-data').empty().html(results).show();
          $('#back').on('click', function() {
            $('#historical-data').hide();
            $('#most-active').show();
          });
        }).
        fail(console.warn);
  };

  $('#search').on('click', function() {
    $.getJSON(`${BASE_URL}/stable/stock/market/list/mostactive?token=${TOKEN}`).
        done(function(data) {
          const results = mostActiveTemplate({rows: data});
          $('#historical-data').hide();
          $('#most-active').empty().html(results).show();
          $('#most-active table').on('click', rowClickHandler);
        }).
        fail(console.warn);
  });

});