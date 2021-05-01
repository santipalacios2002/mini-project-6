var searchEl = document.querySelector('.form-input');



$('#searchBtn').on('click', function (event) {
    event.preventDefault();
    var qParamenter = $('#search').val();
    var formatParameter = $('option').data('choice');
    console.log(formatParameter)
    console.log(qParamenter)
    returnJson(qParamenter, formatParameter)
    $('#search-term').text(`${qParamenter}`)
    buildResults();
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

function buildResults() {
    for (var i = 0; i < 10; i++) {
        var repoName = repos[i].owner.login + '/' + repos[i].name;
    
        var repoEl = document.createElement('a');
        repoEl.classList = 'list-item flex-row justify-space-between align-center';
        repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);
    
        var titleEl = document.createElement('span');
        titleEl.textContent = repoName;
    
        repoEl.appendChild(titleEl);
    
        var statusEl = document.createElement('span');
        statusEl.classList = 'flex-row align-center';
    
        if (repos[i].open_issues_count > 0) {
          statusEl.innerHTML =
            "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
        } else {
          statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }
    
        repoEl.appendChild(statusEl);
    
        repoContainerEl.appendChild(repoEl);
      }
}

