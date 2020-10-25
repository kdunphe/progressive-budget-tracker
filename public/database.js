// // CREATE DATABASE
// let db;
// const request = indexedDB.open("budget-tracker", 1);

// request.onupgradeneeded = (event) => {
//   db = event.target.result;
//   db.createObjectStore("pending", { autoIncrement: true });
// };

// request.onsuccess = (event) => {
//   db = event.target.result;
//   if (navigator.onLine) {
//     checkDatabase();
//   }
// };

// const saveRecord = (record) => {
//   const transaction = db.transaction(["pending"], "readwrite");
//   const store = transaction.objectStore("pending");
//   store.add(record);
// }

// const checkDatabase = () => {
//   const transaction = db.transaction(["pending"], "readwrite");
//   const store = transaction.objectStore("pending");
//   const getAll = store.getAll();

//   getAll.onsuccess = () => {
//     if (getAll.result.length > 0) {
//       fetch("/api/transaction/bulk", {
//         method: "POST",
//         body: JSON.stringify(getAll.result),
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json"
//         }
//       })
//       .then(response => response.json())
//       .then(() => {
//         const transaction = db.transaction(["pending"], "readwrite");
//         const store = transaction.objectStore("pending");
//         store.clear();
//       });
//     }
//   };
// }

// // EVENT LISTENER - APP ONLINE
// window.addEventListener("online", checkDatabase);