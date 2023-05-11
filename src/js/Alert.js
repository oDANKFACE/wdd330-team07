export default class Alert
{
    constructor(file) 
    {
        this.file = "../json/alerts.json"
    }
    async init()
    {
        var fs = require('fs');
        fs.readFile(this.file, (err, inputD) => 
        {
            if (err) throw err;
            console.log(inputD.toString());
        })
    }

}
