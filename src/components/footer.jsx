function githubSvg () {
  return (
    <svg
      className='h-5 w-5'
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        fillRule='evenodd'
        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
        clipRule='evenodd'
      />
    </svg>
  )
}

function FooterBar () {
  return (
    <footer
      className='text-gray-600 body-font'
      style={{ position: 'relative', top: 'auto' }}
    >
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div
          className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10'
          style={{ position: 'relative', top: 150 }}
        >
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <img
              src='https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg'
              className='w-12 h-12 text-white p-2 rounded-full'
              alt='logo'
            />
            <span className='ml-3 text-xl'>Blog Engine</span>
          </a>
          <p className='mt-2 text-sm text-gray-500'>
            The place to satisfy all your blogging needs
          </p>
        </div>
        <div
          className='flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first'
          style={{ position: 'relative', top: 150, right: 'auto' }}
        >
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2
              className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'
              style={{ fontSize: 20 }}
            >
              Links
            </h2>
            <nav className='list-none mb-10'>
              <ul>
                <li>
                  <a style={{ color: 'rgb(0, 119, 255)' }} href='about'>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className='text-gray-600 hover:text-gray-800'
                    style={{ color: 'rgb(0, 119, 255)' }}
                    href='https://remaketheweb.com/'
                  >
                    Remake
                  </a>
                </li>
                <li>
                  <a
                    className='text-gray-600 hover:text-gray-800'
                    style={{ color: 'rgb(0, 119, 255)' }}
                    href='https://tailblocks.cc/'
                  >
                    Tailblocks
                  </a>
                </li>
                <li>
                  <a
                    className='text-gray-600 hover:text-gray-800'
                    style={{ color: 'rgb(0, 119, 255)' }}
                    href='https://github.com/Indrajeet2002/cpsc349-project2'
                  >
                    Main Github Repo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className='bottom-10 left-10 text-center text-sm text-gray-500 hidden xl:block'>
        &copy; 2022 <a href='https://themesberg.com' className='hover:underline' target='_blank' rel='noreferrer'>Group 11</a>. All rights reserved.
      </div>

      <div className='bottom-10 right-10 flex justify-center space-x-6'>
        <p className='interactive_hidden'>Clay Golan</p>
        <a href='' className='text-gray-500 hover:text-green-100 hidden xl:block'>{githubSvg()}</a>
        <p className='interactive_hidden'>Geoffrey Mendoza</p>
        <a href='' className='text-gray-500 hover:text-green-100 hidden xl:block'>{githubSvg()}</a>
        <p className='interactive_hidden'>Indrajeet Patwardhan</p>
        <a href='' className='text-gray-500 hover:text-green-100 hidden xl:block'>{githubSvg()}</a>
        <p className='interactive_hidden'>Nghia Phan</p>
        <a href='' className='text-gray-500 hover:text-green-100 hidden xl:block'>{githubSvg()}</a>
      </div>
    </footer>
  )
};

export default FooterBar
