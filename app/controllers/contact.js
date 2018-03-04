module.exports = function (app) {

	console.log(app.controllers);

	let controller = {};
	let connection = app.config.connectionFactory;

	controller.getContactList = function (req, res) {
		connection.query('select * from contact', function (error, result) {
			res.json(result);
		});
	};

	controller.getContact = function (req, res) {
		let idContact = req.params.id;
		let contact = contacts.filter(function(contact) {
			return contact._id == idContact;
		});
		contact.length ?
			res.json(contact) :
			res.status(404).send('Contact not found');
	};

	return controller;
};
