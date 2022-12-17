import PocketBase from "https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs";
import HeaderBar from "/components/header.js";
import FooterBar from "/components/footer.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const pb = new PocketBase("http://127.0.0.1:8090");
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(SignUp, null))
);
function SignUp() {
  const handleSubmit = async (event) => {
    const data = {
      "username": event.target.username.value,
      "email": event.target.email.value,
      "password": event.target.password.value
    };
    console.log(data);
    try {
      const record = await pb.collection("users").create(data);
    } catch (error) {
      console.log(error);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "SignUp" }, /* @__PURE__ */ React.createElement(HeaderBar, null), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement("section", { className: "text-gray-600 body-font" }, /* @__PURE__ */ React.createElement("div", { className: "container px-5 py-24 mx-auto flex flex-wrap items-center" }, /* @__PURE__ */ React.createElement("div", { className: "lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" }, /* @__PURE__ */ React.createElement("h1", { className: "title-font font-medium text-3xl text-gray-900" }, "This is your first step to becoming a blogger. Share your ides with the public")), /* @__PURE__ */ React.createElement("div", { className: "lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0" }, /* @__PURE__ */ React.createElement("h2", { className: "text-gray-900 text-lg font-medium title-font mb-5" }, "Sign Up"), /* @__PURE__ */ React.createElement("div", { className: "relative mb-4" }, /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: "full-name",
      className: "leading-7 text-sm text-gray-600"
    },
    "Username"
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      id: "full-name",
      name: "username",
      placeholder: "username",
      className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "relative mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "leading-7 text-sm text-gray-600" }, "Email"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "relative mb-4" }, /* @__PURE__ */ React.createElement("label", { className: "leading-7 text-sm text-gray-600" }, "password"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "password",
      name: "password",
      placeholder: "password",
      className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      required: true
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
      type: "submit"
    },
    "Sign Up"
  ), /* @__PURE__ */ React.createElement("a", { href: "./login.html", style: { color: "rgb(0, 119, 255)" } }, "Already have an account?"))))), /* @__PURE__ */ React.createElement(FooterBar, null));
}
