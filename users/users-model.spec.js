const Users = require('../users/users-model');
const db = require('../data/dbConfig');

describe('users-model', () => {
    it('should insert user', async () => {
        await Users.add({username:"matt", password: "password"});
        const users = await db('users');
        expect(users).toHaveLength(1);
    });

    it('should delete user', async () => {
        await Users.remove(1)
        const users = await db('users');
        expect(users).toHaveLength(0);
    });
})