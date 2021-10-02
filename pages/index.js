import {FeaturedPosts,Categories} from "../sections/index"
import {PostCard} from "../components"
import {getPosts,getCategories} from "../services";

export default function Home({posts,categories}) {
  console.log("Home")
   return (
    <>
    <div className="container mx-auto px-10">
        <FeaturedPosts/>
        <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8">
          {posts.map((post,index) =>(
            <PostCard key={index} post={post}/>
          ))}
        </div>
        <div className="col-span-4">
          <Categories categories={categories}/>
        </div>
      </div>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts(0)) || []
  const categories = (await getCategories()) || []
  return {
    props: { posts,categories },
  }
}