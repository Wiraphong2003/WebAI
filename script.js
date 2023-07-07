async function get_user() {
  let response = await fetch("http://127.0.0.1:5000/user");
  let data = response.json();
  return data;
}

get_user().then((data) => console.log(data));

