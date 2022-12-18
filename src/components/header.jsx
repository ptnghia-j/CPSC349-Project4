function HeaderBar () {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav className='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto'>
          <a
            className='mr-5 hover:text-gray-900'
            style={{ color: 'rgb(0, 119, 255)' }}
            href='/'
          >
            Home
          </a>
          <a
            className='mr-5 hover:text-gray-900'
            style={{ color: 'rgb(0, 119, 255)' }}
            href='./about.html'
          >
            About
          </a>
        </nav>
        <a className='flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0'>
          <img
            src='https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg'
            className='w-12 h-12 text-white p-2 rounded-full'
            alt='logo'
          />
          <span className='ml-3 text-xl' style={{ color: 'rgb(0, 119, 255)' }}>
            Blog Engine
          </span>
        </a>
        <div className='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0'>
          <a
            className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
            href='./login.html'
          >
            {' '}
            Log in
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              className='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
};

export default HeaderBar

