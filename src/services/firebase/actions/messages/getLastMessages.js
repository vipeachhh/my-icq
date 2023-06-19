import { ref, onValue, getDatabase } from "@firebase/database";
import { store } from "../../../../store/store";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../../../firebase";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const query = ref(db, `messages/${store.getState().chat.user}`);

onValue(
  query,
  (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data != null) {
      store.dispatch({
        type: "chat/ONADDED_MESSAGE",
        payload: data,
      });
    }
  },
  (error) => {
    console.error(error);
  }
);
