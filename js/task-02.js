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

// const newListItem1 = document.createElement('li');
// newListItem1.classList.add('li-item');
// const newListItem2 = document.createElement('li');
// newListItem2.classList.add('li-item');
// const newListItem3 = document.createElement('li');
// newListItem3.classList.add('li-item');

// const ulImg = document.querySelector('.gallery');
// ulImg.append(newListItem1, newListItem2, newListItem3);

// const img1 = document.createElement('img');
// img1.src =
//   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// img1.alt = 'White and Black Long Fur Cat';

// const img2 = document.createElement('img');
// img2.src =
//   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// img2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';

// const img3 = document.createElement('img');
// img3.src =
//   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// img3.alt = 'Group of Horses Running';

// newListItem1.appendChild(img1);
// newListItem2.appendChild(img2);
// newListItem3.appendChild(img3);

const ulLiImg = document.querySelector('.gallery');
const colorImages = images.map(element => {
  const newListItem = document.createElement('li');
  newListItem.classList.add('li-item');

  const img = document.createElement('img');
  img.src = element.url;
  img.alt = element.alt;

  newListItem.appendChild(img);
  ulLiImg.appendChild(newListItem);
});
