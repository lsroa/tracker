import { useEffect, useState } from "react"
import styled from "styled-components"
import { get } from "axios"

const Container = styled.ul`
  padding: 20px;
  margin: 30px;
  background-color: green;
  justify-content: center;
  align-items: center;
  color: #eee;
`

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await get("/users")
    setUsers(res.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      {users.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </Container>
  )
}

export default App
