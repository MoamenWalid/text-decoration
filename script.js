const button = document.querySelector('button.submit');
const textarea = document.querySelector('textarea');
const newText = document.querySelector('p.new-text');
const copy = document.querySelector('div.clipboard');

button.addEventListener('click', () => {
  if (textarea.value) {
    newText.innerHTML = textarea.value.split('\n').join(', ').trim();
    copy.classList.remove('hidden');
  } else {
    copy.classList.add('hidden');
  }
})

copy.addEventListener('click', (e) => {
  navigator.clipboard.writeText(newText.innerHTML);
})