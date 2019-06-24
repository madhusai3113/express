//requires
const express = require('express');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));

//main
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('modules/home')
  })

var task = [];
app.post('/todo/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/todo");
    
});
app.get("/todo", function(req, res) {
    res.render("modules/index", { task: task});
});



//listening
app.listen(port, ()=> console.log(`lsitening app ${port}`));