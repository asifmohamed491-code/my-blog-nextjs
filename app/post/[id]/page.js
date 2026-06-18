import Post from '@/components/Post';


export default async function Page({params}) {
    const resolvedParams = await params;

    return <Post params={resolvedParams}/>
}