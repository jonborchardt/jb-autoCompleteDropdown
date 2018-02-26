window.onload = function () {
  getOptions(addDropdowns);
}

function addDropdowns(options) {
  const dd1 = document.getElementById("dropdown1");
  const sel1 = document.getElementById("selected1");
  // pass in options
  dd1.setAttribute('options', JSON.stringify(options));
  // register for selection event
  dd1.addEventListener('selection-changed', event => setSelectedDetails(sel1, event));

  // second example for reuse proof
  const dd2 = document.getElementById("dropdown2");
  const sel2 = document.getElementById("selected2");
  dd2.setAttribute('options', JSON.stringify(options));
  dd2.addEventListener('selection-changed', event => setSelectedDetails(sel2, event));
}

function setSelectedDetails(element, event) {
  const selected = event.detail;
  if (selected) {
    element.innerHTML = `label: ${selected.label}, value: ${selected.value}`;
  } else {
    element.innerHTML = "Nothing selected";
  }
}

// HTTP GET
function getOptions(success) {
  httpGET('MOCK_DATA_1000.json', function (response) {
    console.log(response);
    success(response);
  });
}
function httpGET(url, success) {
  var oReq = new XMLHttpRequest();
  oReq.onload = function () {
    success(oReq.response);
  };
  oReq.open('GET', url, true);
  oReq.responseType = 'json';
  oReq.send();
};
