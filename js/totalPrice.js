const actionAdd = "add";
const actionSubstract = "substract";
const totalEl = document.getElementById("total");

function updateTotalPrice(num, action) {
  if (action === actionAdd) {
    let currTotalPrice = +totalEl.innerText.replace("$", "");
    if (!currTotalPrice) currTotalPrice = 0;

    const newPrice = +(Math.round((currTotalPrice + num) * 100) / 100).toFixed(2);

    totalEl.innerText = `${newPrice}`;

    return;
  }

  if (action === actionSubstract) {
    let currTotalPrice = +totalEl.innerText.replace("$", "");
    if (!currTotalPrice) currTotalPrice = 0;

    const newPrice = +(Math.round((currTotalPrice - num) * 100) / 100).toFixed(2);

    totalEl.innerText = `${newPrice}`;
  }
}
