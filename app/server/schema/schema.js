module.exports = {
    title: {
        type: String,
        required: true
    },
    gener: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    authour: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    images_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
};
