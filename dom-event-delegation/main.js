
var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (e) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  var $button = document.querySelector('button');
  if (e.target && e.target.tagName === 'BUTTON') {
    var closestTaskItem = $button.closest('.task-list-item');
    console.log('closest. task-list item', closestTaskItem);
    closestTaskItem.remove();
  }

});
