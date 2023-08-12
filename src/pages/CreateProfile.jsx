import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateProfile = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name,
                city,
            });

            console.log("Document written with ID: ", docRef.id);

            navigate(`/`);
            setName("");
            setCity("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <h1>Create Profile</h1>
            <form action="" onSubmit={submitHandler}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                />
                <label>City</label>
                <input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    name="city"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default CreateProfile;
