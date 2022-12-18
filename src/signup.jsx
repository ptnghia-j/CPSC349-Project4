import PocketBase from 'https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs'

/*
!Important:
1. Component files should be imported with extension .js
so that after esbuild converts jsx to js, the links can still work
2. Components are from the components folder outside of the folder
containing these files when they converted to js
*/
import HeaderBar from '/components/header.js'
import FooterBar from '/components/footer.js'

const pb = new PocketBase('http://127.0.0.1:8090')

const header = ReactDOM.createRoot(document.getElementById('header'))
const root = ReactDOM.createRoot(document.getElementById('root'))
const footer = ReactDOM.createRoot(document.getElementById('footer'))

header.render(
  <React.StrictMode>
    <HeaderBar />
  </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
)

footer.render(
  <React.StrictMode>
    <FooterBar />
  </React.StrictMode>
)

function SignUp () {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(username + ' ' + password + ' ' + email)

    const data = {
      username,
      email,
      emailVisibility: true,
      password,
      passwordConfirm: password
    }
    console.log(data)
    await pb.collection('users_auth').create(data)

    window.location.href = './login.html'
  }

  //     //const record = await pb.collection('users_auth').create(data);

  //     // // (optional) send an email verification request
  //     // await pb.collection('users_auth').requestVerification('test@example.com');
  // }

  return (
    <div className='SignUp'>
      <form onSubmit={handleSubmit}>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
            <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
              <h1 className='title-font font-medium text-3xl text-gray-900'>
                This is your first step to becoming a blogger. Share your ides with
                the public
              </h1>
            </div>
            <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
              <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
                Sign Up
              </h2>
              <div className='relative mb-4'>
                <label
                  htmlFor='full-name'
                  className='leading-7 text-sm text-gray-600'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='full-name'
                  name='username'
                  placeholder='username'
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  required
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button
                className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                type='submit'
              >
                Sign Up
              </button>
              <a href='./login.html' style={{ color: 'rgb(0, 119, 255)' }}>
                Already have an account?
              </a>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}
