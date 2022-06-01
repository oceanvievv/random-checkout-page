function add(id) {
 const el = document.getElementById(id);
 const price = +el.parentElement.parentElement.children[0].children[1].children[0].innerText.replace('$', '');
 let value = +el.innerText;
 
 if (value < 5 && value > 0) {
   value++;
   el.innerText = value;

   updateTotalPrice(price, 'add');

   return;
 } else if (value <= 0) {
    el.innerText = 1;

    return;
 }
}

function substract(id) {
  const el = document.getElementById(id);
  const price = +el.parentElement.parentElement.children[0].children[1].children[0].innerText.replace('$', '');
  let value = +el.innerText;
  
  if (value > 1) {
    value--;
    el.innerText = value;

    updateTotalPrice(price, 'substract');

    return;
  } else if (value <= 0) {
      el.innerText = 1;

      return;
  }
 }