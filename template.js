var data = {people: [{name: "Shawn", other: "blah"}, {name: "Joe", other: "No"}]};


app.get('/templatetest', function(req, res) {
	var data = {person: {name: "Shawn", other: "blah"}};
    res.render('template.ejs', data);
});
