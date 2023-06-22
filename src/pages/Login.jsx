import '/src/style/style.css'

export default function Login() {
    return (
        <div className="login">
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <button>Login</button>
        </div>
    )
}