const BASE_URL = "https://dummyjson.com/";

// ASYNC / AWAIT

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
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
