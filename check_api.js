async function newsGet() {
  let response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=e5a4e0995eaa4c389c235ca18629912c"
  );
  let text = await response.json();
  return text;
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;
newsGet().then((text) => console.log(text));
