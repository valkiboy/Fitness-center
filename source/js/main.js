const video = document.querySelector('.gym__video-wrapper');
const tabTitle = document.querySelectorAll('.season-tickets__nav-item');
const tabContent = document.querySelectorAll('.season-tickets__wrap');
const myName = document.getElementById('name');
const myPhone = document.getElementById('telephone');
const contactsForm = document.querySelector('.contacts__form');

const rephone = /([0-9]+)$/;
const rename = /^[a-zA-Zа-яА-Я'\s]+[a-zA-Zа-яА-Я'\s]{0,}$/u;

// Удаляю заставку и кнопку и меняю на айфрейм

if (typeof (video) !== 'undefined' && video !== null) {

  const media = video.querySelector('.gym__media'); // Картинка
  const button = video.querySelector('.gym__button'); // Кнопка

  if (typeof (media && button) !== 'undefined' && media && button !== null) {

    const setupVideo = () => {
      button.addEventListener('click', () => {
        const iframe = createIframe();
        media.remove();
        button.remove();
        video.appendChild(iframe);
      });
    };

    // Создаю айфрейм

    const createIframe = () => {
      const iframe = document.createElement('iframe');

      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', generateURL());
      iframe.classList.add('gym__ambed');

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

  // Удаляю класс с табов

  const getDeliteTabTitleCurrentStyle = () => {
    tabTitle.forEach(function (item) {
      item.classList.remove('season-tickets__nav-item--current');
    });
  };

  // Удаляю класс с контента

  const getDeliteTabContentCurrentStyle = () => {
    tabContent.forEach(function (item) {
      item.classList.remove('season-tickets__wrap--current');
    });
  };

  // Добавляю класс табу

  const getAddTabTitleCurrentStyle = (item) => {
    let numb = tabTitle.length;
    for (let i = 0; i < numb; i++) {
      if (i === item) {
        tabTitle[i].classList.add('season-tickets__nav-item--current');
      }
    }
  };

  // Добавляю класс контенту

  const getAddTabContentCurrentStyle = (item) => {
    let numb = tabContent.length;
    for (let i = 0; i < numb; i++) {
      if (i === item) {
        tabContent[i].classList.add('season-tickets__wrap--current');
      }
    }
  };

  // Навешиваю клик на табы для открытия нужного контента

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

// Сохранения данных в localStorage

function persist(event) {
  let thisArg = event.path[0];
  localStorage.setItem(thisArg.id, thisArg.value);
}

document.querySelectorAll('input').forEach((inputEl) => {
  inputEl.value = localStorage.getItem(inputEl.id);
  inputEl.addEventListener('change', persist);
});

// Валидация Имени

if (typeof (myName) !== 'undefined' && myName !== null) {
  const checkNameValidity = () => {
    const textName = myName.value;
    if (textName === '') {
      myName.setCustomValidity('поле обязательное');
    } else if (!rename.test(textName)) {
      myName.setCustomValidity('имя может содержать только буквы');
    } else {
      myName.setCustomValidity('');
    }
    myName.reportValidity();
  };
  myName.addEventListener('input', checkNameValidity);
}

// Валидация телефона

if (typeof (myPhone) !== 'undefined' && myPhone !== null) {
  const checkPhoneValidity = () => {
    const textPhone = myPhone.value;
    if (textPhone === '') {
      myPhone.setCustomValidity('поле обязательное');
    } else if (!rephone.test(textPhone)) {
      myPhone.setCustomValidity('номер телефона должен содержать только цифры');
    } else {
      myPhone.setCustomValidity('');
    }
    myPhone.reportValidity();
  };
  myPhone.addEventListener('input', checkPhoneValidity);
}

//  Отправка формы

if (typeof (contactsForm) !== 'undefined' && contactsForm !== null) {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
        'https://echo.htmlacademy.ru/',
        {
          method: 'POST',
          body: formData,
        }
    );
    evt.target.reset();
  };
  contactsForm.addEventListener('submit', handleFormSubmit);
}
