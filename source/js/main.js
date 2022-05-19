function setupVideo() {
  let video = document.querySelector('.video'); // Контейнер
  let media = video.querySelector('.video__media'); // Картинка
  let button = video.querySelector('.video__button'); // Кнопка

  button.addEventListener('click', () => {
    let iframe = createIframe();
    media.remove();
    button.remove();
    video.appendChild(iframe);
  });
}


function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL());
  iframe.classList.add('video__ambed');

  return iframe;
}

function generateURL() {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/9TZXsZItgdw' + query;
}
setupVideo();
