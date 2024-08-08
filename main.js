const advSliderItems = document.querySelectorAll('.advantages__item');
const aboutSliderItems = document.querySelectorAll('.about__item');

const advArrowRight = document.querySelector('.advantages__button--right');
const advArrowLeft = document.querySelector('.advantages__button--left');

const aboutArrowRight = document.querySelector('.about__button--right');
const aboutArrowLeft = document.querySelector('.about__button--left');

const advDots = document.querySelector('.dots--advantages').querySelectorAll('.dot');
const aboutDots = document.querySelector('.dots--about').querySelectorAll('.dot');

let activeAdvantageItem = 0;
let activeAboutItem = 0;

const dotsUpdate = (index, dots) => {
    dots.forEach(item => item.classList.remove('dot--active'));

    dots[index].classList.add('dot--active');
};

let sliderAction;

if (window.innerWidth <= 700) {
  const setActiveSliderElement = (elements) => {
    elements.forEach((item ,index, array) => {
      if (index === 0) {
        item.classList.add('slider__item--center');
      } else if (index === array.length - 1) {
        item.classList.add('slider__item--left');
      } else {
        item.classList.add('slider__item--right');
      };
    });
  };
  
  sliderAction = (index, elements, dots, isForward) => {
    const elem = elements[index];

    if (isForward) {
      index++;

      if (index === elements.length) index = 0;

      const newElem = elements[index];

      elem.classList.remove('slider__item--center');
      elem.classList.add('slider__item--left');
  
      newElem.classList.remove('slider__item--right');
      newElem.classList.add('slider__item--center');
    } else {
      index--;

      if (index < 0) {
        index = elements.length - 1;
      };

      const newElem = elements[index];

      elem.classList.remove('slider__item--center');
      elem.classList.add('slider__item--right');
  
      newElem.classList.remove('slider__item--left');
      newElem.classList.add('slider__item--center');
    };
  
    dotsUpdate(index, dots);
  
    let nextElem;
    let prevElem;

    if (index + 1 === elements.length) {
      nextElem = elements[0];
    } else {
      nextElem = elements[index + 1];
    }
  
    if (index - 1 < 0) {
      prevElem = elements[elements.length - 1];
    } else {
      prevElem = elements[index - 1];
    };

    nextElem.classList.remove('slider__item--left');
    nextElem.classList.add('slider__item--right');

    prevElem.classList.remove('slider__item--right');
    prevElem.classList.add('slider__item--left');
  };

  setActiveSliderElement(advSliderItems);
  setActiveSliderElement(aboutSliderItems);
};

if (window.innerWidth > 700 && window.innerWidth <= 1020) {
  const setActiveSliderElement = (elements) => {
    elements.forEach((item, index, array) => {
      if (index === 0) {
        item.classList.add('slider__item--first');
      } else if (index === 1) {
        item.classList.add('slider__item--second');
      } else if (index === array.length - 1) {
        item.classList.add('slider__item--left');
      } else {
        item.classList.add('slider__item--right');
      };
    });
  };

  sliderAction = (index, elements, dots, isForward) => {
    const elem = elements[index];

    if (isForward) {
      index++;

      if (index === elements.length) index = 0;

      const secondElem = elements[index];

      elem.classList.remove('slider__item--first');
      elem.classList.add('slider__item--left');
  
      secondElem.classList.remove('slider__item--second');
      secondElem.classList.add('slider__item--first');

      let newIndex = index + 1;

      if (newIndex === elements.length) newIndex = 0;

      const newElem = elements[newIndex];

      newElem.classList.remove('slider__item--right');
      newElem.classList.add('slider__item--second');
    } else {
      elem.classList.remove('slider__item--first');
      elem.classList.add('slider__item--second');

      let newIndex = index + 1;

      if (newIndex === elements.length) newIndex = 0;

      const newElem = elements[newIndex];

      newElem.classList.remove('slider__item--second');
      newElem.classList.add('slider__item--right');

      index--;

      if (index < 0) {
        index = elements.length - 1;
      };

      const secondElem = elements[index];
  
      secondElem.classList.remove('slider__item--left');
      secondElem.classList.add('slider__item--first');
    };
  
    dotsUpdate(index, dots);

    let nextElem;
    let prevElem;

    if (index + 2 === elements.length) {
      nextElem = elements[0];
    } else if (index + 1 === elements.length) {
      nextElem = elements[1];
    } else {
      nextElem = elements[index + 2];
    }
  
    if (index - 1 < 0) {
      prevElem = elements[elements.length - 1];
    } else {
      prevElem = elements[index - 1];
    };

    console.log(nextElem);

    nextElem.classList.remove('slider__item--left');
    nextElem.classList.add('slider__item--right');

    prevElem.classList.remove('slider__item--right');
    prevElem.classList.add('slider__item--left');
  };

  setActiveSliderElement(advSliderItems);
  setActiveSliderElement(aboutSliderItems);
};

advArrowRight.addEventListener('click', () => {
  sliderAction(activeAdvantageItem ,advSliderItems, advDots, true);
  activeAdvantageItem++;

  if (activeAdvantageItem === advSliderItems.length) {
    activeAdvantageItem = 0;
  };
});

advArrowLeft.addEventListener('click', () => {
  sliderAction(activeAdvantageItem ,advSliderItems, advDots, false);
  activeAdvantageItem--;

  if (activeAdvantageItem < 0) {
    activeAdvantageItem = advSliderItems.length - 1;
  };
});

aboutArrowRight.addEventListener('click', () => {
  sliderAction(activeAboutItem, aboutSliderItems, aboutDots, true);
  activeAboutItem++;

  if (activeAboutItem === aboutSliderItems.length) {
    activeAboutItem = 0;
  };
});

aboutArrowLeft.addEventListener('click', () => {
  sliderAction(activeAboutItem, aboutSliderItems, aboutDots, false);
  activeAboutItem--;

  if (activeAboutItem < 0) {
    activeAboutItem = aboutSliderItems.length - 1;
  };
});

/* Expanding tet in advantages section */

const advButtons = document.querySelectorAll('.advantages__button--expand');

const toggleText = (element) => {
  if (element.classList.contains('advantages__button--open')) {
    element.classList.remove('advantages__button--open');

    element.parentElement.previousElementSibling.classList.remove('advantages__description--open');
  } else {
    element.classList.add('advantages__button--open');

    element.parentElement.previousElementSibling.classList.add('advantages__description--open');
  };
};

advButtons.forEach(element => {
  element.addEventListener('click', () => {
    toggleText(element);
  });
})