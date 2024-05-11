function Login() {
    function handleSubmit(e) {
        const user = e.target.fname.value;
        localStorage.setItem("user", user);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Login;
