import fs from 'fs';

export default class Alert {
  constructor(message, background, color) {
    this.color = color;
    this.background = background;
    this.message = message;
  }
}

fs.readFile('alerts.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }

  try {
    const alerts = JSON.parse(jsonString);
    alerts.forEach(alert => {
      let newAlert = new Alert(alert.message, alert.background, alert.color);
      let p = document.createElement('p');
      p.style.background = newAlert.background;
      p.style.color = newAlert.color;
      p.innerText = newAlert.message;

      let section = document.querySelector('.alert-list');
      if (!section) {
        section = document.createElement('section');
        section.className = 'alert-list';
      }
      section.appendChild(p);

      let mainElement = document.querySelector('main');
      mainElement.prepend(section);
    });
  } catch(err) {
    console.log('Error parsing JSON string:', err);
  }
});

