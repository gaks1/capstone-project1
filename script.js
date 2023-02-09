const hamburger = document.querySelector('.mobile-menu');
const close1 = document.querySelector('.menu-container');
const sect = document.querySelectorAll('.section');
const closemenu = document.querySelector('.menu-close');
const nav = document.querySelector('nav');

function sectionFunc() {
  for (let i = 0; i < sect.length; i += 1) {
    sect[i].classList.add('blur');
  }
  close1.style.display = 'flex';
  hamburger.style.display = 'none';
  nav.classList.add('nav');
}

function sectionHide() {
  for (let i = 0; i < sect.length; i += 1) {
    sect[i].classList.remove('blur');
  }
  hamburger.style.display = 'block';
  close1.style.display = 'none';
  nav.classList.remove('nav');
}

hamburger.addEventListener('click', sectionFunc);

closemenu.addEventListener('click', sectionHide);

const speakers = [
  {
    name: 'Prof John Gitau',
    position: 'Professor of tourism',
    image: 'img/sp1.png',
    description: 'John teaches and conducts research in the fields of tourism .',
  },
  {
    name: 'Anne Mconnely',
    position: 'CEO of Stanely Adventures',
    image: 'img/sp2.png',
    description: 'Anne is responsible for attracting tourists',
  },
  {
    name: 'Joseph Strathmore',
    position: 'CEO of Hillary Hotels',
    image: 'img/sp3.png',
    description: 'Joseph is responsible for attracting tourists',
  },
  {
    name: 'Lawrence Smith',
    position: 'President of young adventures',
    image: 'img/sp4.png',
    description: 'Lawrence is responsible for attracting tourists',
  },
  {
    name: 'Willfred Okietch',
    position: 'Principal Secretary of Tourism',
    image: 'img/sp5.png',
    description: 'He is a principle secretary of Kenyas tourism industry.',
  },
  {
    name: 'Anne Liu',
    position: 'CEO of daum Kakao',
    image: 'img/sp6.png',
    description: 'Anne is the CEO of kakao  with great insight in the industry.',
  },
];

const sp = document.querySelector('.div-speaker');
const more = 'MORE';
const less = 'LESS';
const moreimg = 'img/down1.png';
window.addEventListener('load', () => {
  for (let i = 0; i < speakers.length; i += 1) {
    const div1 = document.createElement('div');
    div1.classList.add('border-0', 'card', 'flex-row', 'margin');
    const div2 = document.createElement('div');
    div2.classList.add('div-image');
    const img2 = document.createElement('img');
    img2.classList.add('card-img-top1');
    img2.src = speakers[i].image;
    const div3 = document.createElement('div');
    div3.classList.add('card-body', 'ps-4');
    const hh5 = document.createElement('h5');
    hh5.classList.add('card-title');
    hh5.textContent = speakers[i].name;
    const p1 = document.createElement('i');
    p1.classList.add('card-text', 'card-text1');
    p1.textContent = speakers[i].position;
    const line = document.createElement('hr');
    const p2 = document.createElement('p');
    p2.classList.add('card-text', 'speakers-text');
    p2.textContent = speakers[i].description;

    sp.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(img2);
    div1.appendChild(div3);
    div3.appendChild(hh5);
    div3.appendChild(p1);
    div3.appendChild(line);
    div3.appendChild(p2);
  }
  const butt = document.createElement('button');
  butt.textContent = more;
  butt.classList.add('butt1');
  const butt2 = document.createElement('button');
  butt2.textContent = less;
  butt2.classList.add('butt1');
  butt2.style.display = 'none';
  const img3 = document.createElement('img');
  img3.src = moreimg;
  img3.classList.add('more-img');
  butt.appendChild(img3);
  sp.appendChild(butt);
  sp.appendChild(butt2);

  const div1 = document.querySelectorAll('.margin');
  for (let i = 2; i < div1.length; i += 1) {
    div1[i].classList.add('none1');
  }

  butt.addEventListener('click', () => {
    for (let i = 2; i < div1.length; i += 1) {
      div1[i].classList.remove('none1');
    }
    butt.style.display = 'none';
    butt2.style.display = 'block';
    img3.style.transform = 'scaleY(-1)';
    butt2.appendChild(img3);
  });

  butt2.addEventListener('click', () => {
    for (let i = 2; i < div1.length; i += 1) {
      div1[i].classList.add('none1');
    }
    butt2.style.display = 'none';
    butt.style.display = 'block';
    img3.style.transform = 'scaleY(1)';
    butt.appendChild(img3);
  });
});