// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js');

firebase.initializeApp({"apiKey": "AIzaSyAzS3_2UlZSDTn3h2rCHqVRSp5rgBnDv3Q", "authDomain": "medication-reminder-e45b4.firebaseapp.com", "projectId": "medication-reminder-e45b4", "storageBucket": "medication-reminder-e45b4.appspot.com", "messagingSenderId": "111945945049", "appId": "1:111945945049:web:0fcc5ae55556b05dea13c8"});

const messaging = firebase.messaging();