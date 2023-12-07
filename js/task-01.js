const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');
console.log(categoryItems);
categoryItems.forEach(items => {
  const categoryTitle = items.querySelector('h2').textContent;
  const categoryElements = items.querySelectorAll('li');
  console.log(`${categoryTitle}`);
  console.log(`${categoryElements.length}`);
});
