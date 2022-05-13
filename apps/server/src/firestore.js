import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, cert } from "firebase-admin/app";
import fetch from "node-fetch";

async function request(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const serviceAccount = await request(
  process.env.GOOGLE_APPLICATION_CREDENTIALS
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

export { db };
