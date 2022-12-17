import PocketBase from 'https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs';
/*
!Important:
1. Component files should be imported with extension .js 
so that after esbuild converts jsx to js, the links can still work
2. Components are from the components folder outside of the folder 
containing these files when they converted to js
*/
import HeaderBar from "/components/header.js";
import FooterBar from "/components/footer.js";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <LogIn />
  </React.StrictMode>
)

const pb = new PocketBase('http://127.0.0.1:8090');

function LogIn () {

  let data
  const handleSubmit = async (event) => {
    event.preventDefault();

    data = {
      "username": event.target.username.value,
      "password": event.target.password.value,
    }

    console.log(data);
    try {
      console.log(event.target.username.value)
      console.log(event.target.password.value)
      //const authData = await pb.collection('users').authWithPassword(data.username, data.password);
      const authData = await pb.admins.authWithPassword("mendoza.geoff@live.com", "Halo3isbest")
      
     }
    catch (error) {console.log(error); }

    console.log(pb.authStore.isValid)

    //console.log(pb.authStore.model.id);

    // // "logout" the last authenticated account
    //pb.authStore.clear();

    if (pb.authStore.isValid){
      window.location.href = './home.html';
    }
  }

  const doSomethingElse = async (event) => {
    event.preventDefault();
    console.log("do something else");
  }

  return (
    <div className="LogIn">
      <HeaderBar />

      <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-900">
                Now that you have an account, log in to start blogging!
              </h1>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Login
              </h2>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Username</label>
                <input
                  type="text"
                  id="full-name"
                  name="username"
                  placeholder="username"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
              >
                Log in
              </button>
              <a href="" style={{ color: "rgb(0, 119, 255)" }}>
                Forgot your password?
              </a>
              <a href="./signup.html" style={{ color: "rgb(0, 119, 255)" }}>
                Don't have an account? sign up here
              </a>
            </div>
          </div>
        </section>
      </form>
      
      <FooterBar />
    </div>
  )
}