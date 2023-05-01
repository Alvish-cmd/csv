const doLogIn = (user) => {
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("User", user);
};

const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
};


const logOut = (props) =>{
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("User");
  props.history.push("/login");

};

export default {
  doLogIn,
  isLoggedIn,
  logOut
};
