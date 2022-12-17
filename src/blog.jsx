import PocketBase from 'https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs';

import HeaderBar from "/components/header.js";
import FooterBar from "/components/footer.js";

const root = ReactDOM.createRoot(document.getElementById('root'))

const pb = new PocketBase('http://127.0.0.1:8090');
root.render(
  <React.StrictMode>
    <CreatePost />
  </React.StrictMode>
)

function CreatePost(){

  const handleSubmit = async (event) => {
    const data = {
      "username": "test",
      "content": "test"
    };
    console.log(data);
    try {const record = await pb.collection('posts').create(data);}
    catch (error) {console.log(error); }
  }


  
  return (
    <div className="Blog">
  
    <HeaderBar />
    <div>
      <h2 className="text-center">Blogs</h2>
      <div className="flex flex-wrap -m-4 block ml-2 mr-2 place-content-center">
        <div className="h-full bg-gray-100 p-8 rounded block ml-2 mr-2">
          <textarea name="post" rows="4" cols="50" > </textarea>
        </div>
        
      </div>
      &nbsp;
      <div className="flex flex-wrap block place-content-center">
        <button
          className="add-blog block ml-2 mr-2" onClick={handleSubmit}>
          Add Blogs
        </button>
      </div>
     
    </div>
    <FooterBar />
    </div>
  )

}