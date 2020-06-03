let d = new Date();
let today = document.querySelector('.td');

today.innerHTML = `Date: ` + d;

// F E T C H  A P I

//Fetch global
fetch('https://api.covid19api.com/summary')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let totalCase = document.getElementById('tcases');
    let totalDeaths = document.getElementById('tdeaths');
    let totalRecovered = document.getElementById('trecovered');

    let tcdata = data.Global.TotalConfirmed.toLocaleString();
    let tddata = data.Global.TotalDeaths.toLocaleString();
    let trdata = data.Global.TotalRecovered.toLocaleString();

    let cases = [tcdata, tddata, trdata]

    totalCase.innerText = cases[0];
    totalDeaths.innerText = cases[1];
    totalRecovered.innerText = cases[2];
  })
  .catch(function (err) {
    console.log(err);
  });
