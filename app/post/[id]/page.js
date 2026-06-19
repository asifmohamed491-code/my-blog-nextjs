import Post from '@/components/Post'

export async function generateMetadata({
 params
}) {

 const {
  id
 } =
 await params

 try{

 const res =
 await fetch(

 `${process.env.NEXT_PUBLIC_URL}/api/post/${id}`

 )

 const post =
 await res.json()

 return {

 title:

 post?.title

 ||

 'Post'

 }

 }

 catch{

 return {

 title:

 'Post'

 }

 }

}

export default async function Page({
 params
}){

 return (

 <Post
 params={
 await params
 }
 />

 )

}