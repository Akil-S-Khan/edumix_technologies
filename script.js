import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlJzHw8GCn-dT48FrktlZtGs61pOMU1YY",
  authDomain: "attendance-edumix.firebaseapp.com",
  databaseURL: "https://attendance-edumix-default-rtdb.firebaseio.com",
  projectId: "attendance-edumix",
  storageBucket: "attendance-edumix.appspot.com",
  messagingSenderId: "550283251690",
  appId: "1:550283251690:web:13aa57bc55ae8ceaeeac93",
  measurementId: "G-QFQSYGE6V5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const code = document.querySelector(".code");
const input = document.querySelector(".input");
const toast = document.querySelector("#toast");
const button = document.getElementById("view_button");
const auth = document.getElementById("auth_button");
const msg = document.getElementById("pwmessage");

button.style.display = "none";

auth.addEventListener("click", authenticate);

function authenticate() {
  const data = input.value;
  if (data === "akil@#1234") {
    button.style.display = "block";
    auth.style.display = "none";
    msg.style.display = "none";
  } else {
    msg.style.color = "#ff0000";
    msg.style.fontSize = "18px";
    msg.innerHTML = "Authentication Failed !";
    button.style.display = "none";
    auth.style.display = "block";
  }
}

button.addEventListener("click", generate);

function generate() {
  const database = getDatabase(app);
  const data = Math.floor(100000 + Math.random() * 900000);

  set(ref(database, "data"), {
    code: data,
  });

  const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
  code.src = URL;

  toastDiv();
}

function toastDiv() {
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 2000);
}
