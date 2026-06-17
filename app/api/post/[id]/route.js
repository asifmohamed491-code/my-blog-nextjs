import connectMongo from "../../../../utils/connectMongo";
import PostModel from '../../../../models/postModel';

export async function GET(req, context) {
    try {
        
        await connectMongo();
        const params = await context.params
        const PostData =
            await PostModel.findOne({
                _id: params.id
            })
        return Response.json(PostData);

    }
    catch (err) {
        return Response.json({ message: err.message })
    }

}