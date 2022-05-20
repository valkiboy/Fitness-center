const video = document.querySelector('.video');
const tabTitle = document.querySelectorAll('.season-tickets__nav-item');
const tabContent = document.querySelectorAll('.season-tickets__wrap');


if (typeof (video) !== 'undefined' && video !== null) {

  const media = video.querySelector('.video__media'); // Картинка
  const button = video.querySelector('.video__button'); // Кнопка

  if (typeof (media && button) !== 'undefined' && media && button !== null) {

    const setupVideo = () => {
      button.addEventListener('click', () => {
        const iframe = createIframe();
        media.remove();
        button.remove();
        video.appendChild(iframe);
      });
    };


    const createIframe = () => {
      const iframe = document.createElement('iframe');

      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', generateURL());
      iframe.classList.add('video__ambed');

      return iframe;
    };

    const generateURL = () => {
      const query = '?rel=0&showinfo=0&autoplay=1';

      return 'https://www.youtube.com/embed/9TZXsZItgdw' + query;
    };
    setupVideo();
  }
}

if (typeof (tabTitle && tabContent) !== 'undefined' && tabTitle && tabContent !== null) {

  const getDeliteTabTitleCurrentStyle = () => {
    tabTitle.forEach(function (item) {
      item.classList.remove('season-tickets__nav-item--current');
    });
  };

  const getDeliteTabContentCurrentStyle = () => {
    tabContent.forEach(function (item) {
      item.classList.remove('season-tickets__wrap--current');
    });
  };

  const getAddTabTitleCurrentStyle = (item) => {
    let numb = tabTitle.length;
    for (let i = 0; i < numb; i++) {
      if (i === item) {
        tabTitle[i].classList.add('season-tickets__nav-item--current');
      }
    }
  };

  const getAddTabContentCurrentStyle = (item) => {
    let numb = tabContent.length;
    for (let i = 0; i < numb; i++) {
      if (i === item) {
        tabContent[i].classList.add('season-tickets__wrap--current');
      }
    }
  };

  tabTitle.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      let numb = tabTitle.length;

      for (let i = 0; i < numb; i++) {
        if (evt.currentTarget === tabTitle[i]) {
          getDeliteTabTitleCurrentStyle();
          getDeliteTabContentCurrentStyle();
          getAddTabTitleCurrentStyle(i);
          getAddTabContentCurrentStyle(i);
          break;
        }
      }
    });
  });
}
