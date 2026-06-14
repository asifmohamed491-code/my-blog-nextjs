import { model, Schema, models } from 'mongoose';

const postSchema = new Schema({
    title: String,
    description: String,
    image: String
}, { toJSON: { virtuals: true } });

postSchema.virtual('short_description').get(function(){
    return this.description.substr(0,100)+"...."
});

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;