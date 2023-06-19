import { getDatabase, ref, set } from "@firebase/database";

function deleteMessage(messageNumber, userName) {
  const db = getDatabase();
  set(ref(db, "messages/" + userName + "/" + messageNumber), null);
}

export { deleteMessage };
