const seedposts = require('./posts-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------- DATABASE SYNCED ------\n');

    await seedposts();
    console.log('\n------- POSTS SYNCED ------\n');

    process.exit(0);
};

seedAll();