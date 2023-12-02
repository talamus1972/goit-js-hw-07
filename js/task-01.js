const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('ul > li');
  console.log(`${categoryTitle}`);
  console.log(`${categoryElements.length}`);
});
