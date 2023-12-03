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
const colorImages = images.reduce((img, element) => img +`
<li>
<img src = '${element.url}' alt = '${element.alt}' />
</li>
`, '')
ulLiImg.insertAdjacentHTML('afterbegin', colorImages);
