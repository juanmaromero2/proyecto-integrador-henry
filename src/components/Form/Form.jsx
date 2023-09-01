import { useState } from "react";
import validation from "./Validation";
import styles from "./form.module.css"

function Form({login}) {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return ( 
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.text} htmlFor="Email">Email: </label>
                <input className={styles.input} type="email" placeholder="ingrese email" name="email" value={userData.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
                <label className={styles.text} htmlFor="Password">Password: </label>
                <input className={styles.input} type="text" placeholder="ingrese contraseña" name="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                <button className={styles.btn}>Submit</button>
            </form>
        </div>

    )
}

export default Form;