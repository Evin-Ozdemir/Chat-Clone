import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { useEffect, useState } from "react";
import ChatPage from "./pages/ChatPage";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    // Kullanıcı oturumu her değiştiğinde güncel bilgileri getirir
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Kullanıcı sayfadan ayrılınca oturumu izlemeyi durdur
    return () => unsub();
  }, []);

  // ! Kullanıcı oturumu açmadıysa:
  if (user === null) return <LoginPage />;

  // ! Kullanıcı oturum açtıysa ve oda seçildiyse:
  if (room) return <ChatPage room={room} setRoom={setRoom} />;

  // ! Kullanıcı oturum açtıysa ve oda seçilmediyse:
  return <RoomPage setRoom={setRoom} />;
};

export default App;
