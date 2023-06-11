document.addEventListener('DOMContentLoaded', () => {
  // Otwarcie menu mobilnego
  const headerHamburger = document.querySelector(".header__hamburger"),
    mobileOverlay = document.querySelector(".mobile"),
    mobileClose = document.querySelector(".mobile__close")

  headerHamburger.addEventListener("click", () => {
    mobileOverlay.style.cssText = "display: block";
  });

  mobileClose.addEventListener("click", () => {
    mobileOverlay.style.cssText = "display: none";
  });

  // Zmiany tekstowe
  const priceToChange = document.getElementById("price"),
    deliveryToChange = document.getElementById("delivery"),
    imageOffirstProductToChange = document.getElementById('delonghi-image'),
    titleOffirstProductToChange = document.getElementById('delonghi-subtitle'),
    priceOffirstProductToChange = document.getElementById('delonghi-price'),
    imageOfsecondProductToChange = document.getElementById('philips-image'),
    titleOfsecondProductToChange = document.getElementById('philips-subtitle'),
    priceOfsecondProductToChange = document.getElementById('philips-price'),
    firstBlogDateToChange = document.getElementById('first-blog-date'),
    secondBlogDateToChange = document.getElementById('second-blog-date'),
    thirdBlogDateToChange = document.getElementById('third-blog-date'),
    newsletterLabelToChange = document.querySelector('.newsletter__label'),
    newsletterTitle = document.querySelector(".newsletter__title"),
    footerEmail = document.querySelector(".footer__email"),
    footerTime = document.querySelector(".footer__time"),
    headerInfo = document.querySelector(".header__info-cart");

  if (screen.width < 435) {
    priceToChange.innerHTML = "Okazyjne ceny";
    deliveryToChange.innerHTML = "Darmowa dostawa od 50zł";
    imageOffirstProductToChange.src = "assets/images/filtr_do_ekspresow_delonghi.jpg",
      titleOffirstProductToChange.innerHTML = "ZESTAW! Filtr do ekspresów DeLonghi + Odkamieniacz DeLonghi 500ml+szczoteczka",
      priceOffirstProductToChange.innerHTML = "78,90 PLN",
      imageOfsecondProductToChange.src = "assets/images/DWUPAK_Filtr_wody_Saeco.jpg",
      titleOfsecondProductToChange.innerHTML = "DWUPAK ! - Filtr wody Saeco AquaClean CA6903/00 x2",
      priceOfsecondProductToChange.innerHTML = "88,00 PLN",
      firstBlogDateToChange.innerHTML = "2.02.2022",
      secondBlogDateToChange.innerHTML = "15.01.2022",
      thirdBlogDateToChange.innerHTML = "4.01.2022",
      newsletterLabelToChange.innerHTML = '<input type="checkbox" class="newsletter__checkbox" name="subscribe" required>Wyrażam zgodę na przetwarzanie moich danych zgodnie z polityką prywatności',
      newsletterTitle.innerHTML = 'Zyskaj <span class="newsletter__span">15% zniżki</span> na pierwsze zakupy',
      footerEmail.innerHTML = 'kontakt@filtreo.pl',
      footerTime.innerHTML = 'Od poniedziałku do piątku w godzinach 09:00-17:00',
      headerInfo.innerHTML = "1";
  }

  //Otwarcie nawigacji w stopce
  if (screen.width < 768) {
    const buttons = document.querySelectorAll('.footer__button');
    const lists = document.querySelectorAll('.footer__list');
    const arrows = document.querySelectorAll('.feature__transform');

    lists.forEach((list, index) => {
      if (index !== 0) {
        list.style.display = 'none';
      }
    });

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const isListVisible = lists[index].style.display !== 'none';

        if (isListVisible) {
          lists[index].style.display = 'none';
        } else {
          lists[index].style.display = 'block';
        }

        arrows[index].style.transform = isListVisible ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });

    //wyszukiwarka mobilna
    const headerForm = document.querySelector(".header__form"),
    headerInput = document.querySelector(".header__input");

    headerForm.addEventListener('click', (event) => {
    event.preventDefault;
    headerInput.style.cssText = `display: block;
          position: absolute;
          left: 10px;
          max-width: 200px;
          border: 1px solid #eceef3;`;
    });
  }

  //Rozwijanie listy menu mobilnego
  const spans = document.querySelectorAll('.mobile__span');
  const subs = document.querySelectorAll('.mobile__sub');
  const arrow = document.querySelectorAll('.mobile__arrow');

  spans.forEach((span, index) => {
  span.addEventListener('click', () => {
    const isSubVisible = subs[index].style.display !== 'none';

    if (isSubVisible) {
      subs[index].style.display = 'none';
    } else {
      subs[index].style.display = 'block';
    }

    arrow[index].style.transform = isSubVisible ? 'rotate(0deg)' : 'rotate(90deg)';
  });
  });

  subs.forEach((sub) => {
    sub.style.display = 'none';
  });
});


// promo slider
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});


// products slider
$(document).ready(function() {
  $('.products__slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-arrow slick-next"><img src="assets/icons/left.svg" alt="author"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-prev"><img src="assets/icons/right.svg" alt="author"></button>',
    dots: false,
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
        slidesToShow: 3,
      }
      },
      {
      breakpoint: 460,
      settings: {
        arrows: false,
        slidesToShow: 1.6,
      }
    },
    ]
  });
});