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
    <AboutUs />
  </React.StrictMode>
)

function AboutUs() {
  return (
    <div className="AboutUs">
      <HeaderBar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              style={{ color: "rgb(0, 119, 255)" }}
            >
              Meet The Team
            </h1>
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              style={{ color: "rgb(0, 119, 255)" }}
            >
              Group 11 for CPSC 349 Project 4
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2
                    className="text-gray-900 title-font font-medium"
                    style={{ color: "rgb(0, 119, 255)" }}
                  >
                   Clay Golan
                  </h2>
                  <p className="text-gray-500" style={{ color: "rgb(0, 119, 255)" }}>
                    <a href="">
                      Github Repo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://gray-wtap-prod.cdn.arcpublishing.com/resizer/Mvm-FbZEPa1ntEZfgzM4kY2ELXc=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/5CGN3CK5YJDMVAHP7NMWDNCYH4.jpg"
                />
                <div className="flex-grow">
                  <h2
                    className="text-gray-900 title-font font-medium"
                    style={{ color: "rgb(0, 119, 255)" }}
                  >
                    Geoffrey Mendoza
                  </h2>
                  <p className="text-gray-500" style={{ color: "rgb(0, 119, 255)" }}>
                    <a href="">
                      Github Repo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2
                    className="text-gray-900 title-font font-medium"
                    style={{ color: "rgb(0, 119, 255)" }}
                  >
                    Indrajeet Patwardhan
                  </h2>
                  <p className="text-gray-500" style={{ color: "rgb(0, 119, 255)" }}>
                    <a href="">
                      Github Repo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                />
                <div className="flex-grow">
                  <h2
                    className="text-gray-900 title-font font-medium"
                    style={{ color: "rgb(0, 119, 255)" }}
                  >
                    Nghia Phan
                  </h2>
                  <p className="text-gray-500" style={{ color: "rgb(0, 119, 255)" }}>
                    <a href="">Github Repo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <FooterBar />
    </ div>
  )
}