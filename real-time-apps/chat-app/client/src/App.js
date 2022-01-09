import "./App.css";
import Container from "./components/Container";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <div className="background">
      <ChatProvider>
        <Container />
      </ChatProvider>
    </div>
  );
}

export default App;
