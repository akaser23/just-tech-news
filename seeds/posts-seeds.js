const { post } = require('../models');

const postData = [
    {
        title: 'Taskmaster goes public!',
    },
    {
        post_url: 'https://taskmaster.com/press',
    },
    {
        user_id: 1,
    },
];

const seedPost = () => post.bulkCreate(postData);

module.exports = seedPost;