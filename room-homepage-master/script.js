const data = "./data.json";
fetch(data)
  .then(res => res.json())
  .then(data => {
    let present = 0;
    const btnDiv = document.getElementById('nextPrevBtn');
    const slider = document.getElementById('slider');
    slider.children[0].children[0].src = data[present].src;
    slider.children[1].children[0].innerText = data[present].title;
    slider.children[1].children[1].innerText = data[present].description;
    btnDiv.children[0].addEventListener('click', () => {
      present == 0 ? present = 2 : present--

      slider.children[0].children[0].src = data[present].src;
      slider.children[1].children[0].innerText = data[present].title;
      slider.children[1].children[1].innerText = data[present].description;
    })
    btnDiv.children[1].addEventListener('click', () => {
      present == 2 ? present = 0 : present++;
      slider.children[0].children[0].src = data[present].src;
      slider.children[1].children[0].innerText = data[present].title;
      slider.children[1].children[1].innerText = data[present].description;
    })
  })

const burgir = document.getElementById('burgir');
burgir.addEventListener("click", (e) => {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
})