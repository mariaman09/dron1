ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [53.720976, 91.442410],
    zoom: 13
  });

  var rentalPoints = [
    { name: "Спортивный комплекс «Абакан»", coordinates: [53.720976, 91.442410] },
    { name: "Краеведческий музей", coordinates: [53.720976, 91.462410] },
    { name: "Спортивный комплекс «Саяны»", coordinates: [53.730976, 91.452410] }
  ];

  rentalPoints.forEach(function(point) {
    var placemark = new ymaps.Placemark(point.coordinates, {
      hintContent: point.name
    }, {
      preset: 'islands#blueCircleDotIcon'
    });

    placemark.events.add('click', function() {
      showAvailableDrones(point.name);
    });

    map.geoObjects.add(placemark);
  });
}

function showAvailableDrones(rentalPoint) {
  // Здесь можно реализовать логику отображения доступных квадрокоптеров для бронирования
  // Например, путем отправки запроса на сервер и отображения списка квадрокоптеров
  alert("Отображение доступных квадрокоптеров для точки проката: " + rentalPoint);
}