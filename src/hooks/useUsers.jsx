import { useEffect, useState } from "react"

function useUsers() {
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return { users }
}

export default useUsers
