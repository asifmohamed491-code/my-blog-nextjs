import connectMongo from "../../../utils/connectMongo";
import PostModel from '../../../models/postModel';

export async function GET() {
    try {
        await connectMongo();
        const PostData = await PostModel.find({});
        return Response.json(PostData);

    }
    catch (err) {
        return Response.json({ message: err.message })
    }

}