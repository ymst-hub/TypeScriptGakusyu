import React,{ useContext } from "react";
type User = {
    id:number
    name:string
}
const UserContext = React.createContext<User|null>(null)
const GrandChild = () => {
    const user = useContext(UserContext)
    return user !== null ? <p>Hello {user.name}</p> : null //if文の短縮
}
const Child = () => {
    const now = new Date()
    return (
        <div>
            <p>Current: {now.toLocaleString()}</p>
            <GrandChild />
        </div>
    )
}

export const Parent4 = () => {
    const user:User = {
        id:1,
        name:'Alice'
    }
    return (
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    )
}

