import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers  (usersFromApi.data)
    
  }

  async function creatUsers() {
     await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
     })
    
    
    getUsers()
  }

  async function deletUsers(id) {
    await api.delete(`/usuarios/${id}`)

    
    
  }

  useEffect(() => {

    getUsers()

  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="Nome" name="name" type="text"  ref={inputName}/>
        <input placeholder="Idade" name="age" type="number" ref={inputAge}/>
        <input placeholder="email" name="email" type="email"ref={inputEmail} />
        <button type="button" onClick={creatUsers}>
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
          <button onClick={ () => deletUsers(user.id)} className="trash">
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
