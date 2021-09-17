import Layout from "../components/Layout";
import React, { useState } from 'react';
import { doCreateUserWithEmailAndPassword } from "../Firebase/client/firebase";
import { useRouter } from "next/dist/client/router";
import { checkingAuth } from "../utilities";

export const getServerSideProps = async (ctx) => {
    return checkingAuth(ctx, 'is_not_equal_to', '/');
}


const Register = (params) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()
    return (
        <Layout>
            <div className="container mt-4">
                <h2>Register form</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => {
                        doCreateUserWithEmailAndPassword(email, password)
                            .then(() => {
                                router.push('/dashbord');
                            })
                            .catch(err => console.log("Error : ", err))
                    }}>Submit</button>
                </form>
            </div>
        </Layout>
    )
};
export default Register;