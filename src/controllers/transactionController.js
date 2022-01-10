const express = require('express');

const Transaction = require('../models/Transaction');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).send(transactions);
    } catch (error) {
        res.status(500).send({ error: "Falha ao carregar transactions" });
    }
})

router.post('/', async(req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.send({ transaction });
    } catch (error) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        await Transaction.findByIdAndDelete(id);

        return res.status(200).send({ message: 'Transaction successfully deleted' });

    } catch (error) {
        return res.status(400).send({ error: 'Failed to delete transaction' });
    }
})
router.put('/:id', async(req, res) => {

    try {
        const { id } = req.params;
        const { title, type, category, amount, createdAt } = req.body;

        const transaction = await Transaction.findByIdAndUpdate(id, {
            $set: {
                title,
                type,
                category,
                amount,
                createdAt
            }
        }, { new: true })

        return res.status(200).send({ transaction });
    } catch (error) {
        return res.status(400).send({ error: 'Update failed' });
    }
})


module.exports = app => app.use('/transactions', router);