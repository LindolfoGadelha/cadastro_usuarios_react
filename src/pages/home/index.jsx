import { useEffect } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  let users = [];

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    users = usersFromApi.data
    console.log(users)
  }

  useEffect(() => {

    getUsers()

  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="Nome" name="name" type="text" />
        <input placeholder="Idade" name="age" type="number" />
        <input placeholder="email" name="email" type="email" />
        <button type="button">
          <span className="span-mother">
            <span>C</span>
            <span>A</span>
            <span>D</span>
            <span>A</span>
            <span>S</span>
            <span>T</span>
            <span>R</span>
            <span>A</span>
            <span>R</span>
          </span>

          <span className="span-mother2">
            <span>C</span>
            <span>A</span>
            <span>D</span>
            <span>A</span>
            <span>S</span>
            <span>T</span>
            <span>R</span>
            <span>A</span>
            <span>R</span>
          </span>
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span> {user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button className="trash">
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
