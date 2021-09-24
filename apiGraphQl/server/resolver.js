const Post = require('./models/Post.model')

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world';
        },
        getAllPosts: async () => {
            return await Post.find()
        },
        getPost: async (parrent, {id}) => {
            return await Post.findById(id);
        }
    },
    Mutation: {
        createPost: async (parrent, args, context, info) => {
            const { title, description } = args.post;
            const post = new Post({ title, description });
            await post.save();
            return post;
        },
        deletePost: async (parrent, { id }) => {
            await Post.findByIdAndDelete(id);
            return 'Ok, post deleted';
        },
        updatePost: async (parrent, args) => {
            const {id} = args;
            const { title, description } = args.post;

            const post = await Post.findByIdAndUpdate(id, {title, description}, {new: true});
            return post;
        }
    }
};

module.exports = resolvers;