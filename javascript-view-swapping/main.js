var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

// $tabContainer.addEventListener('click', function (e) {
//   if (event.target.matches('.tab') === false) {
//     return;
//   }
//   for (var i = 0; i < $tab.length; i++) {
//     if ($tab[i] === event.target) {
//       $tab[i].className = 'tab active';
//     } else {
//       $tab[i].className = 'tab';
//     }
//   }

//   var dataView = event.target.getAttribute('data-view');
//   for (var j = 0; j < $view.length; j++) {
//     if ($view[j].getAttribute('data-view') === dataView) {
//       $view[j].className = ' view ';
//     } else {
//       $view[j].className = ' view hidden';
//     }
//   }
// });

$tabContainer.addEventListener('click', event => {
  if (event.target.matches('.tab') === false) {
    return;
  }

  for (let i = 0; i < $tab.length; i++) {
    if ($tab[i] === event.target) {
      $tab[i].className = 'tab active';

    } else {
      $tab[i].className = 'tab';
    }
  }

  for (let i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === event.target.getAttribute('data-view')) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
});
