const items = document.querySelectorAll('#menu li');
let index = 0;

items[index].focus();

document.addEventListener('keydown', e=>{
  if(e.key === 'ArrowDown'){
    index = (index + 1) % items.length;
    items[index].focus();
  }

  if(e.key === 'ArrowUp'){
    index = (index - 1 + items.length) % items.length;
    items[index].focus();
  }
});
