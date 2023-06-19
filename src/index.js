import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from "./pages/Home";
import "./i18n";
import { ref, onValue, getDatabase } from "@firebase/database";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "./services/firebase";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer></HomeContainer>,
  },
]);

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const query = ref(db, `messages/${store.getState().chat.user}`);

onValue(
  query,
  (snapshot) => {
    setTimeout(() => {
      let data = snapshot.val();
      if (data != null) {
        console.log(data);
        store.dispatch({
          type: "chat/ONADDED_MESSAGE",
          payload: data,
        });
      }
    }, 10);
  },
  (error) => {
    console.error(error);
  }
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
