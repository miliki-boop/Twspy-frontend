import './a.css';
import React  from 'react';
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { message } from 'antd';


const navigation = {
  categories: [
    {
      id: 'Identity',
      name: 'Identity',
      featured: [
        {
          name: '余霜YSCandice',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          imageAlt: 'Show icon',
          text: []
        },
        {
          name: 'Face',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Show Face',
        },
      ],
      sections: [
        {
          id: 'key',
          name: 'Key',
          items: [
            { name: '用户名', href: '#' },
            { name: '姓名', href: '#' },
            { name: '个人所在地', href: '#' },
            { name: '性别', href: '#' },
            { name: '行业', href: '#' },
            { name: '家', href: '#' },
          ],
        },
        {
          id: 'value',
          name: 'Value',
          items: [
            { name: 'Not Found', href: '#' },
            { name: 'Not Found', href: '#' },
            { name: 'Not Found', href: '#' },
            { name: 'Not Found', href: '#' },
            { name: 'Not Found', href: '#' },
            { name: 'Not Found', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'Sociality',
      name: 'Sociality',
      featured: [
        {
          name: '余霜YSCandice',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          imageAlt: 'People with connections',
          text: []
        },
        {
          name: 'People with connections',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'People with connections',
        },
      ],
      sections: [
        {
          id: 'key',
          name: 'Key',
          items: [
            { name: '电话', href: '#' },
            { name: '邮箱', href: '#' },
          ],
        },
        {
          id: 'value',
          name: 'Value',
          items: [
            { name: 'Not Found', href: '#' },
            { name: 'Not Found', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: ' ', href: '#' },
    { name: ' ', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Home_content(props) {
  const [buttonFlag, setButtonFlag] = useState(false);

  const sendDataToPHPApp = async (url, id,updateNavigation) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({uid: id,action:'getPrivacy'}),
    })
      .then(response => response.json())
      .then(data => {
        // 处理从PHP应用返回的数据
        console.log(data);
        if(data.success)
        {
          updateNavigation(data.message,id);
          setButtonFlag(true);
        }
          
      })
      .catch(error => {
        // 处理请求错误
        console.error('Error:', error);
      });
  }

  const sendDataToPHPApp2 = async (url, id,updateNavigation) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({uid: id,action:'getUser'}),
    })
      .then(response => response.json())
      .then(data => {
        // 处理从PHP应用返回的数据
        console.log(data);
        if(data.success)
        {
          updateNavigation(data.message,id);
        }
          
      })
      .catch(error => {
        // 处理请求错误
        console.error('Error:', error);
      });
  }
  useEffect(() => {
    const { id } = props;
    const idString = `${id}`;
    const updateNavigation = (message, id) => {
      navigation.categories[0].sections[1].items[0].name=id//设置id
    // navigation.categories[0].sections[0].items[0].href='/tweet/' + id
    // navigation.categories[0].sections[1].items[0].name=id
    // navigation.categories[0].sections[1].items[0].href='/tweet/' + id
    message.forEach(item => {
      // 处理每个元素
      switch(item.privacy_class){
        case '姓名':{
          navigation.categories[0].sections[0].items[1].href='/tweet/' + id + '/' + item.idprivacy
          navigation.categories[0].sections[1].items[1].name=item.privacy_value
          navigation.categories[0].sections[1].items[1].href='/tweet/' + id + '/' + item.idprivacy
        }
        break;
        case '个人所在地':{
          navigation.categories[0].sections[0].items[2].href='/tweet/' + id + '/' + item.idprivacy
          navigation.categories[0].sections[1].items[2].name=item.privacy_value
          navigation.categories[0].sections[1].items[2].href='/tweet/' + id + '/' + item.idprivacy
        }
        break;
        case '行业':{
          navigation.categories[0].sections[0].items[4].href='/tweet/' + id + '/' + item.idprivacy
          navigation.categories[0].sections[1].items[4].name=item.privacy_value
          navigation.categories[0].sections[1].items[4].href='/tweet/' + id + '/' + item.idprivacy
        }
        break;
        case '家':{
          navigation.categories[0].sections[0].items[5].href='/tweet/' + id + '/' + item.idprivacy
          navigation.categories[0].sections[1].items[5].name=item.privacy_value
          navigation.categories[0].sections[1].items[5].href='/tweet/' + id + '/' + item.idprivacy
        }
        break;
        case '电话':{
          navigation.categories[1].sections[0].items[0].href='/tweet/' + id + '/' + item.idprivacy
          navigation.categories[1].sections[1].items[0].name=item.privacy_value
          navigation.categories[1].sections[1].items[0].href='/tweet/' + id + '/' + item.idprivacy
        }
        break;
        case '邮箱':{
          navigation.categories[1].sections[0].items[1].href='/tweet/' + id + '/' + item.idprivacy
          navigation.categories[1].sections[1].items[1].name=item.privacy_value
          navigation.categories[1].sections[1].items[1].href='/tweet/' + id + '/' + item.idprivacy
        }
        break;
      }
  
      });
  
      };
    
    const updateicon = (message,id) =>{
      navigation.categories[0].featured[0].name = message[0].screen_name
      navigation.categories[1].featured[0].name = message[0].screen_name
      navigation.categories[0].featured[0].imageSrc = '/image/avatar/'+id+'.jpg'
      navigation.categories[1].featured[0].imageSrc = '/image/avatar/'+id+'.jpg'


      navigation.categories[0].featured[0].text.push(message[0].verified_reason)
      navigation.categories[0].featured[0].text.push(message[0].description)
      navigation.categories[1].featured[0].text.push(message[0].verified_reason)
      navigation.categories[1].featured[0].text.push(message[0].description)
    }
    sendDataToPHPApp('/select.php', idString, updateNavigation);
    sendDataToPHPApp2('/select.php',idString, updateicon);
  }, []); // 空数组作为依赖项，表示只在组件挂载时执行一次

  const [open, setOpen] = useState(true)
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              {/* <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p> */}
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign out
                    </a>
                  </div>
                </div>
 
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-20 items-center justify-center bg-indigo-600 px-4 text-xl font-medium text-white sm:px-6 lg:px-8">
          Get the private information leaked on Weibo
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="row-start-1 grid grid-cols-2 gap-x-8">
                                      {/* {category.featured.map((item) => ( */}
                                        <div key={category.featured[0].name} className="group relative text-base sm:text-sm">
                                        <div className="relative mt-8 flex items-center gap-x-4"> 
                                          <div className="flex items-center">
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={category.featured[0].imageSrc}
                                                alt={category.featured[0].imageAlt}
                                                className="h-10 w-10 rounded-full bg-gray-50"
                                              />
                                            </div>
                                            <div className="text-sm leading-6 ml-2">
                                              <p className="text-gray-600">{category.featured[0].name}</p>
                                            </div>
                                          </div>
                                          <div className="ml-4"></div> {/* 添加间距 */}
                                        </div>
                                          <a href={category.featured[0].href} className="mt-6 block font-medium text-gray-900 ">
                                          
                                            {category.featured[0].text.map((item)=>(
                                              <span className="break-words block list-disc ml-4">
                                                {item}
                                                <br/>
                                              </span>
                                            ))}
                                          
                                          </a>
                                          {/* <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p> */}
                                        </div>
                                        <div key={category.featured[1].name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={category.featured[1].imageSrc}
                                              alt={category.featured[1].imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={category.featured[1].href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {category.featured[1].name}
                                          </a>
                                          {/* <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p> */}
                                        </div>                                      
                                    </div>
                                    <div className=" col-start-2 grid grid-cols-2 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/sign" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="/index" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign out
                  </a>
                </div>

                
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}