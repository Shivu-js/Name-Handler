importScripts("https://www.gstatic.com/firebasejs/12.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyALtFqrxD2TLrQXNvOyJRtsfvi3bbKiCnY",
  authDomain: "listy-pwa.firebaseapp.com",
  projectId: "listy-pwa",
  storageBucket: "listy-pwa.firebasestorage.app",
  messagingSenderId: "909038043802",
  appId: "1:909038043802:web:9277e0fa6dc63ec6735523"
});

const messaging = firebase.messaging();

self.addEventListener("notificationclick", function(event) {

event.notification.close();

event.waitUntil(
  clients.openWindow("https://shivu-js.github.io/Listy")
);

});
