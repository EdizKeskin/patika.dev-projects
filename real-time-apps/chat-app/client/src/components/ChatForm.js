import { useState } from "react";
import style from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");

  function onChangeHandler(e) {
    setMessage(e.target.value);
  }

  const { setMessages } = useChat();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    setMessages((prevState) => [...prevState, {message, fromMe: true}]);
    sendMessage(message);
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={style.textInput}
          value={message}
          onChange={onChangeHandler}
          placeholder="Mesaj girin"
        />
        <button type="submit" className={style.submitButton}>
          Gönder
        </button>
      </form>
    </div>
  );
}

export default ChatForm;
