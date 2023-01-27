const API_KEY = "ef9da2ef29346a96ed9ce17e65618666";

const BASE_URL = "https://api.themoviedb.org/3/";

// ASYNC / AWAIT

const GET = async (type, resource) => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

const POST = async (endpoint, body) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

const DELETE = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

const PUT = async (endpoint, body) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

export { GET, POST, DELETE, PUT };
