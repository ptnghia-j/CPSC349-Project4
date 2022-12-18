import PocketBase from "https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs";
import HeaderBar from "/components/header.js";
import FooterBar from "/components/footer.js";
const header = ReactDOM.createRoot(document.getElementById("header"));
const root = ReactDOM.createRoot(document.getElementById("root"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));
header.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(HeaderBar, null))
);
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LogIn, null))
);
footer.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(FooterBar, null))
);
const pb = new PocketBase("http://127.0.0.1:8090");
function LogIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await pb.collection("users_auth").authWithPassword(username, password);
    if (pb.authStore.isValid) {
      localStorage.setItem("username", username);
      window.location.href = "./home.html";
    }
    pb.authStore.clear();
  };
  const doSomethingElse = async (event) => {
    event.preventDefault();
    console.log("do something else");
  };
  return /* @__PURE__ */ React.createElement("div", { className: "LogIn" }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement("section", { className: "text-gray-600 body-font" }, /* @__PURE__ */ React.createElement("div", { className: "container px-5 py-24 mx-auto flex flex-wrap items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" }, /* @__PURE__ */ React.createElement("h1", { className: "title-font font-medium text-3xl text-gray-900" }, "Now that you have an account, log in to start blogging!")), /* @__PURE__ */ React.createElement("div", { className: "lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0" }, /* @__PURE__ */ React.createElement("h2", { className: "text-gray-900 text-lg font-medium title-font mb-5" }, "Login"), /* @__PURE__ */ React.createElement("div", { className: "relative mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "leading-7 text-sm text-gray-600" }, "Username"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      id: "full-name",
      name: "username",
      placeholder: "username",
      className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      required: true,
      onChange: (e) => setUsername(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "relative mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "leading-7 text-sm text-gray-600" }, "password"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "password",
      name: "password",
      placeholder: "password",
      className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      required: true,
      onChange: (e) => setPassword(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
      type: "submit"
    },
    "Log in"
  ), /* @__PURE__ */ React.createElement("a", { href: "", style: { color: "rgb(0, 119, 255)" } }, "Forgot your password?"), /* @__PURE__ */ React.createElement("a", { href: "./signup.html", style: { color: "rgb(0, 119, 255)" } }, "Don't have an account? sign up here"))))));
}
