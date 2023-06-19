import { getDatabase, ref, set } from "@firebase/database";
import { prettyDate } from "../../../../utils/prettyDate";

function createMessage(message, messageNumber, userName) {
  const db = getDatabase();
  set(ref(db, "messages/" + userName + "/" + messageNumber), {
    text: message,
    timestamp: prettyDate(Date.now()),
    id: messageNumber,
  });
}

export { createMessage };
