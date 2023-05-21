const file = '../json/alerts.json';

fetch(file)
    .then((response) => response.json())
    .then((json) => 
    {
        for(let i = 0; i < json.length; i++)
        {
            let section = document.getElementById('alert');
            let div = document.createElement('div');
            let message = json[i].message;
            let background = json[i].background;
            let color = json[i].color;
            div.append(message);
            div.setAttribute('background-color',background);
            div.setAttribute('color', color);
            section.appendChild(div);
        }
    });