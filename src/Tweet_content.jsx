import './c.css';
import React,{ forwardRef }  from 'react';
import { Fragment,useRef,useState ,useEffect, useImperativeHandle,useLayoutEffect} from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Tweet_content = forwardRef(({ id, privacy, onHeightChange }, ref) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/select(1).php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid: privacy, action: 'getWeibo' }),
        });
        const data = await response.json();
        if (data.success) {
          const newPosts = data.message.map((msg, index) => ({
            id: index + 1,
            imageSrc:msg.pics,
            title: msg.topics,
            description: msg.text,
            category: { title: msg.source, href: '#' },
            datetime: msg.created_at,
            author: {
              name: msg.screen_name,
              role: 'Co-Founder / CTO',
              href: '#',
              imageUrl:
                '/image/avatar/'+id+'.jpg',
            },
          }));
          setPosts(newPosts);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [privacy]);

  // 计算子组件的高度，并将其传递给父组件
  useLayoutEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      onHeightChange(height);
    }
  }, [posts, onHeightChange]);

  return (
    <div className="bg-white py-16 sm:py-16" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Weibo</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn which tweets give away information.
          </p>
        </div>

        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-5 gap-x-8 gap-y-10 py-16">

              {posts.length > 0 && (
                <div className='col-span-2 row-start-1 mx-auto mt-10 gap-y-16' >
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={posts[0].author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={posts[0].author.href}>
                          <span className="absolute inset-0" />
                          {posts[0].author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{posts[0].author.role}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-span-3 row-start-1 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                {posts.map((post) => (
                  <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.datetime}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <img src={post.imageSrc} alt='' />
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Tweet_content;
