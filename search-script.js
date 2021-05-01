var searchEl = document.querySelector('.form-input');




$('#searchBtn').on('click', function (event) {
    event.preventDefault();
    var qParamenter = $('#search').val();
    var formatParameter = $('option').data('choice');
    console.log(formatParameter)
    console.log(qParamenter)
    returnJson(qParamenter, formatParameter)
})

var responseJSON = [];
function returnJson(query, format) {
    var requestUrl = `https://www.loc.gov/${format}/?q=${query}&fo=json`;
    $.ajax({
        url: requestUrl,
        method: 'GET',
      })
        .then(function (response) { // runs if no error happens
          responseJSON = response;
        })
        .catch(function (error) { // runs if an error happens
          console.log('error:', error);
        });
}

