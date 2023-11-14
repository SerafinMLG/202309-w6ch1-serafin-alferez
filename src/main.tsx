import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Store } from "./core/store/store"
import App from "./app"
import "./style.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

