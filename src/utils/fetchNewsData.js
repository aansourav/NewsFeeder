export default async function fetchNewsData(url = "/top-headlines") {
  return await fetch(import.meta.env.VITE_BASE_URL + url)
    .then((res) => res.json())
    .then((res) => res.articles || res.result)
    .catch((err) => {
      console.log("err", err);
    });
}
