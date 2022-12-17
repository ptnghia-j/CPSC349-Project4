import PocketBase from "https://unpkg.com/pocketbase@0.8.2/dist/pocketbase.es.mjs";
import HeaderBar from "/components/header.js";
import FooterBar from "/components/footer.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const pb = new PocketBase("http://127.0.0.1:8090");
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(CreatePost, null))
);
function CreatePost() {
  const handleSubmit = async (event) => {
    const data = {
      "username": "test",
      "content": "test"
    };
    console.log(data);
    try {
      const record = await pb.collection("posts").create(data);
    } catch (error) {
      console.log(error);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "Blog" }, /* @__PURE__ */ React.createElement(HeaderBar, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { textAlign: "center" } }, "Blogs"), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex flex-wrap -m-4",
      style: { display: "block", marginLeft: "auto", marginRight: "auto" }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "p-4 md:w-1/2 w-full",
        style: { display: "block", marginLeft: "auto", marginRight: "auto" }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "h-full bg-gray-100 p-8 rounded",
          style: { display: "block", marginLeft: "auto", marginRight: "auto" }
        }
      )
    )
  ), "\xA0", /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "add-blog",
      style: { display: "block", marginLeft: "auto", marginRight: "auto" },
      onClick: handleSubmit
    },
    "Add Blogs"
  )), /* @__PURE__ */ React.createElement(FooterBar, null));
}
