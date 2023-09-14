const textarea = document.getElementsByTagName('textarea')[0];

textarea.addEventListener('input', () => {
  // Redefine a altura do textarea conforme digitar
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
})