const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

// const ulLiImg = document.querySelector('.gallery');
// const fragment = document.createDocumentFragment();
// const colorImages = images.map(element => {
//   const newListItem = document.createElement('li');
//   newListItem.style.height = 'auto';
//   newListItem.style.width = '100px';
//   newListItem.classList.add('li-item');

//   const img = document.createElement('img');
//   img.src = element.url;
//   img.alt = element.alt;

//   newListItem.appendChild(img);
//   fragment.appendChild(newListItem);
// });
// ulLiImg.appendChild(fragment);

const ulLiImg = document.querySelector('.gallery');
const colorImages = images.reduce(
  (img, element) =>
    img +
    `
<li style = " list-style: none">
<img src = '${element.url}' alt = '${element.alt}' width = "300" height ="100%"/>
</li>
`,
  ''
);
ulLiImg.insertAdjacentHTML('afterbegin', colorImages);
