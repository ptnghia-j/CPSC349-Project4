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
      <h2 style={{ textAlign: "center" }}>Blogs</h2>
      <div
        className="flex flex-wrap -m-4"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      >
        <div
          className="p-4 md:w-1/2 w-full"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        >
          <div
            className="h-full bg-gray-100 p-8 rounded"
            style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          ></div>
        </div>
      </div>
      &nbsp;
      <button
        className="add-blog"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        onClick={handleSubmit}
      >
        Add Blogs
      </button>
    </div>
    <FooterBar />
    </div>
  )

}