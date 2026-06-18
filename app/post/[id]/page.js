import Post from '@/components/Post';

export async function generateMetadata({ params }) {
    const {id} = await params;

   const post =  await fetch(process.env.NEXT_PUBLIC_API_URL + '/post/' + id)
        .then(res => res.json())

        return {
            title:post.title
        }

}

export default async function Page({ params }) {
    const resolvedParams = await params;

    return <Post params={resolvedParams} />
}