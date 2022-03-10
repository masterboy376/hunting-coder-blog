import Link from 'next/link'
import React, { useState } from 'react'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.parsedData)

  const [count, setCount] = useState(2)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 1}`)
    setCount(count + 1)
    let data = await d.json()
    setBlogs(data)
  };

  return (
    <>
            <div className='h-screen w-full flex justify-center items-start relative top-20 left-0 '>


              <div className=''>
                <h2 className='text-2xl font-bold'>Popular blogs</h2>
              <InfiniteScroll
                dataLength={blogs.length} //This is important field to render the next data
                next={fetchData}
                hasMore={props.allCount !== blogs.length}
                loader={<span className="text-2xl font-bold">Loading...😅</span>}
                endMessage={
                  <p className='text-center my-4'>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                // below props only if you need pull down functionality
                // refreshFunction={this.refresh}
                // pullDownToRefresh
                // pullDownToRefreshThreshold={50}
                // pullDownToRefreshContent={
                //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                // }
                // releaseToRefreshContent={
                //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                // }
              >
                {blogs.map((blogItem) => {
                  return <div key={blogItem.slug}>
                    <Link href={`/blogpost/${blogItem.slug}`}>
                      <div className="my-10 cursor-pointer">
                        <h4 className='text-xl font-semibold'>{blogItem.title}</h4>
                        <p>{blogItem.metadesc}...</p>
                      </div>
                    </Link>
                  </div>
                })}
              </InfiniteScroll>
              </div>
            </div>
          </>
      
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { parsedData: allBlogs, allCount }, // will be passed to the page component as props
  }
}

export default Blog