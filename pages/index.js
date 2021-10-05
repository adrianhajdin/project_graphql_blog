import {FeaturedPosts} from "../sections/index"
import {PostCard,Categories} from "../components"
import {getPosts} from "../services";

export default function Home({posts}) {
   return (
    <>
    <div className="container mx-auto px-10">
        <FeaturedPosts/>
        <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8">
          {posts.map((post,index) =>(
            <PostCard key={index} post={post.node}/>
          ))}
        </div>
        <div className="col-span-4">
          <div className="sticky top-8">
            <Categories/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}