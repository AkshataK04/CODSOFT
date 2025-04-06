const outputField = document.getElementById('output');
const buttons = document.querySelectorAll('button');

let equation = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-key');

    if (key === 'AC') {
      equation = '';
    } else if (key === 'DEL') {
      equation = equation.slice(0, -1);
    } else if (key === '=') {
      try {
        equation = eval(equation).toString();
      } catch {
        equation = 'Error';
      }
    } else {
      if (equation === 'Error') equation = '';
      equation += key;
    }

    outputField.value = equation;
  });
});
