var settings = {
  "url": "http://localhost:3000/viaje/c81d",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje/bdfc",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje/9b3e",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "A1": "vinland",
    "camino": "DK-83",
    "vida": "paz",
    "descricion": "Copernicus Wrocław Airport",
    "codigo": "ODE",
    "timepo": "11:30",
    "id": "c81d"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "A1": "Afton Municipal Airport",
    "camino": "reflexivo",
    "vida": "Afton",
    "descricion": "Hólmavík Airport",
    "codigo": "AFO",
    "timepo": "2semanas",
    "id": "bdfc"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje/c81d",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "A1": "Odense Airport",
    "camino": "DK-83",
    "vida": "Odense",
    "descricion": "Copernicus Wrocław Airport",
    "codigo": "ODE",
    "timepo": "1f-22",
    "id": "c81d"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje/e77f",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "A1": "Afonso Pena Airport",
    "camino": "BR-PR",
    "vida": "F-22",
    "descricion": "Donegal Airport",
    "codigo": "CWB",
    "timepo": "09:45",
    "id": "e77f"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje/cca1",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje/c81d",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/viaje/e77f",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});