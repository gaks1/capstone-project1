const speakers = [
    {
        name:'Prof John Gitau',
        position:'Professor of tourism and hospitality at Nairobi university',
        image: 'img/sp1.png',
        description:'John is a faculty member who teaches and conducts research in the fields of tourism .'
},
    {
        name:'Anne Mconnely',
        position:'CEO of Stanely Adventures',
        image:'img/sp2.png',
        description:'Anne is responsible for developing and implementing strategies to attract tourists'

    },
    {
        name:'Joseph Strathmore',
        position:'Marketing director of Hillary Hotels Internationals',
        image:'img/sp3.png',
        description:'Anne is responsible for developing and implementing strategies to attract tourists'
    },
    {
        name:'Lawrence Smith',
        position:'President of young adventures New York ',
        image:'img/sp4.png',
        description:'Anne is responsible for developing and implementing strategies to attract tourists'
    },
    {
        name:'Willfred Okietch',
        position:'Principal Secretary of Tourism Kenya',
        image:'img/sp5.png',
        description:'He is a principle secretary of Kenyas tourism industry and has great experience in the industry.'
    },
    {
        name:'Anne Liu',
        position:'CEO of daum Kakao',
        image:'img/sp6.png',
        description:'Anne is the CEO of kakao one of the sponsors of the conference with great insight in the industry.'
    }
];

const sp = document.querySelector('.div-speaker');

window.addEventListener('load', () => {
    for (let i = 0; i < speakers.length; i += 1) {
        let div1 = document.createElement('div');
        div1.classList.add("card", "d-flex","flex-row","margin","div-image");
        let div2 = document.createElement('div');
        let img1 = document.createElement('img');
        img1.src = speakers[i].image;
        img1.classList.add("card-image");
        let img2 = document.createElement('img');
        img2.classList.add("card-img-top","card-img-top1");
        img2.src = speakers[i].image;
        let div3 = document.createElement('div');
        div3.classList.add("card-body","card-body1");
        let hh5 = document.createElement('h5');
        hh5.classList.add("card-title");
        hh5.textContent = speakers[i].name;
        let p1 = document.createElement('i');
        p1.classList.add("card-text","card-text1");
        p1.textContent =speakers[i].position;
        let p2 = document.createElement('p');
        p2.classList.add("card-text");
        p2.textContent = speakers[i].description;


        sp.appendChild(div1);
        div1.appendChild(div2);
        div2.appendChild(img1);
        div2.appendChild(img2);
        div1.appendChild(div3);
        div3.appendChild(hh5);
        div3.appendChild(p1);
        div3.appendChild(p2);


    }});