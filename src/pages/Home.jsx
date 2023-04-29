import React from "react"
import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
function Home() {
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
