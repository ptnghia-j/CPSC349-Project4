import PocketBase from 'https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs'

import HeaderBar from '/components/header.js'
import FooterBar from '/components/footer.js'

const pb = new PocketBase('http://127.0.0.1:8090')

const header = ReactDOM.createRoot(document.getElementById('header'))
const root = ReactDOM.createRoot(document.getElementById('root'))
const footer = ReactDOM.createRoot(document.getElementById('footer'))

header.render(
  <React.StrictMode>
    <HeaderBar />
    <h2 className='text-center'>Blogs</h2>
  </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <CreatePost />
  </React.StrictMode>
)

footer.render(
  <React.StrictMode>
    <FooterBar />
  </React.StrictMode>
)

function CreatePost () {
  const [content, setPost] = React.useState('')

  const handleSubmit = async (event) => {
    const data = {
      username: localStorage.getItem('username'),
      content
    }

    console.log(content)
    try {
      const record = await pb.collection('posts').create(data)
    } catch (error) { console.log(error) }
    window.location.reload()
  }

  return (
    <div className='Blog'>

      <div>
        <div className='flex flex-wrap -m-4 block ml-2 mr-2 place-content-center'>
          <div className='h-full bg-gray-100 p-8 rounded block ml-2 mr-2'>
            <textarea placeholder='write your post here' name='post' rows='4' cols='50' value={content} onChange={e => setPost(e.target.value)}> </textarea>
          </div>
        </div>
      &nbsp;
        <div className='flex flex-wrap block place-content-center'>
          <button
            className='add-blog block ml-2 mr-2' onClick={handleSubmit}
          >
            Add Blogs
          </button>
        </div>

      </div>

    </div>
  )
}
