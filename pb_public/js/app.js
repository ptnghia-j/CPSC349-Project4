import PocketBase from "https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs";
import HeaderBar from "/components/header.js";
import FooterBar from "/components/footer.js";
const USERNAME = "mendoza.geoff@live.com";
const PASSWORD = "Halo3isbest";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
);
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement(HeaderBar, null), /* @__PURE__ */ React.createElement("section", { className: "text-gray-600 body-font" }, /* @__PURE__ */ React.createElement("div", { className: "container px-5 py-24 mx-auto" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-medium title-font text-gray-900 mb-12 text-center" }, "Welcome to Blog Engine"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap -m-4" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 md:w-1/2 w-full" }, /* @__PURE__ */ React.createElement("div", { className: "h-full bg-gray-100 p-8 rounded" }, /* @__PURE__ */ React.createElement("p", { className: "leading-relaxed mb-6" }, "What is a CPU? It stands for a Core Processing Unit, it does all the logical arthimetic and all the processing for onces computer. The CPU is reponsible for all functions that involve logic. There are many parts of a computer but CPU allows the computer to be able to perform its dail functions and it gets all the needed processes from RAM."), /* @__PURE__ */ React.createElement("a", { className: "inline-flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "flex-grow flex flex-col pl-4" }, /* @__PURE__ */ React.createElement("span", { className: "title-font font-medium text-gray-900" }, "Pbavafa"))))), /* @__PURE__ */ React.createElement("div", { className: "p-4 md:w-1/2 w-full" }, /* @__PURE__ */ React.createElement("div", { className: "h-full bg-gray-100 p-8 rounded" }, /* @__PURE__ */ React.createElement("p", { className: "leading-relaxed mb-6" }, "Going off of the CPU blog from Pbavafa, RAM (random access memory) is a computer's short-term memory, where the data that the processor is currently using is stored. Your computer can access RAM memory much faster than data on a hard disk, SSD, or other long-term storage device, which is why RAM capacity is critical for system performance."), /* @__PURE__ */ React.createElement("a", { className: "inline-flex items-center" }, /* @__PURE__ */ React.createElement("span", { className: "flex-grow flex flex-col pl-4" }, /* @__PURE__ */ React.createElement("span", { className: "title-font font-medium text-gray-900" }, "sbhagat101")))))))), /* @__PURE__ */ React.createElement(FooterBar, null));
}
