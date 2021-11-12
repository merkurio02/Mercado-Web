const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.listen(3000, () => {
    console.log('listening on port 3000');
});
app.use(express.static('assets'));
app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist/css`));
app.use("/jquery", express.static(`${__dirname}/node_modules/jquery/dist`));

app.set('view engine', 'handlebars');
app.engine(
    'handlebars',
    exphbs({
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views/partials',
    })
);


app.get('/', (req, res) => {

    res.render('main', {
        data: getData()
    });
});


const getData = () => {
    return [
        {
            name: 'banana'
        },
        {
            name: 'cebollas'
        },
        {
            name: 'lechuga'
        },
        {
            name: 'papas'
        },
        {
            name: 'pimenton'
        },
        {
            name: 'tomate'
        }
    ];
}
  



