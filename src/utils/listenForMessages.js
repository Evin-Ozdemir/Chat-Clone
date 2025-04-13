import { messaging } from "../firebase";
import { onMessage } from "firebase/messaging";

// Bildirim geldiğinde yapılacak işlemler
export const listenForMessages = () => {
  onMessage(messaging, (payload) => {
    console.log("Yeni Mesaj:", payload); // Mesaj bilgilerini konsola yazdır

    // Tarayıcıda bildirim gösterme
    if (Notification.permission === "granted") {
      new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon || "/logo192.png", // Varsayılan simge
      });
    }
  });
};
