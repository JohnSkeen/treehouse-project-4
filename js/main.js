const search = document.getElementById('search');
const image = document.querySelectorAll('a[data-caption]');

search.addEventListener('keyup', function (event) {
  let result = search.value.toUpperCase();
  for (let i = 0; i < image.length; i++) {
    let title = image[i].getAttribute('data-caption');
    if (title.toUpperCase().includes(result)) {
      // image[i].style.display = '';
      image[i].classList.add('selected');
      image[i].classList.remove('not-selected');
    } else {
      // image[i].style.display = 'none';
      image[i].classList.remove('selected');
      image[i].classList.add('not-selected');
    }
  }
});
