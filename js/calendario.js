document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Sabin',
                start: '2020-12-04',
                end:'2020-12-06'
            },
            {
                title: 'Neumococo conjugada',
                start: '2021-01-15',
                end:'2021-01-19'
            },
            {
                title: 'Quíntuple',
                start: '2020-11-25'
            }
        ]
    }); 

    calendar.render();
  });