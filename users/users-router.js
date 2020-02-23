const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    const user = req.body;
    Users.add(user)
        .then(id => {
            res.status(200).json(id)
        })
        .catch(err => {
            res.status(500).json({ message: "failed" })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Users.remove(id)
        .then(del => {
            res.status(201).json(del);
        })
        .catch(err => {
            res.status(500).json({message: "failed"})
        });
});

module.exports = router;