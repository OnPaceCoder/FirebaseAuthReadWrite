import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
    const [users, setUsers] = useState([]);

    async function data() {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            const NewList = users.find((user) => user.id == doc.id);
            if (!NewList) {
                setUsers((usersList) => [
                    ...usersList,
                    { id: doc.id, data: doc.data() },
                ]);
            }
        });
    }

    useEffect(() => {
        data();
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("user"));


    const handleSignOut = () => {
        localStorage.clear();
        setUsers([{}]);
    };

    return (
        <>
            <Link to="/signup">
                <button>SignUp</button>
            </Link>
            <Link to="/signin">
                <button>SignIn</button>
            </Link>
            <Link onClick={handleSignOut}>
                <button>SignOut</button>
            </Link>

            {currentUser ? (
                <>
                    <h1>List of Users</h1>

                    <table border={"solid black 1px"}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id.toString().slice(0, 4)}</td>
                                    <td>{user?.data.name}</td>
                                    <td>{user?.data.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <>
                    <h1>SignUp to view users list</h1>
                </>
            )}
        </>
    );
};

export default Home;
