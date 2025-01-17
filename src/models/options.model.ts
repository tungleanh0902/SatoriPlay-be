import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const optionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    questionId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: false
    },
    isHidden: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.models.Option || mongoose.model('Option', optionSchema);