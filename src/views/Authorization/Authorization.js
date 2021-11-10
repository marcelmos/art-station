import './Authorization.css';

function Authorization(){

    return(
        <main>
            <section>
                <div className="row">
                    <div className="col-50">
                        <h2>Register</h2>

                        <form action="">
                            <div className="row row-vertical">
                                <div className="row">
                                    <div className="col-50">
                                        <label>
                                            <input type="text" placeholder="Username" />
                                        </label>
                                    </div>

                                    <div className="col-50">
                                        <label>
                                            <select name="" id="">
                                                <option disabled>Select your species</option>
                                                <option>Canie</option>
                                                <option>Feline</option>
                                                <option>Dragon</option>
                                                <option>Aquatic</option>
                                                <option>Avian</option>
                                                <option>Other</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-50">
                                        <label>
                                            <input type="email" placeholder="E-mail" />
                                        </label>
                                    </div>

                                    <div className="col-50">
                                        <label>
                                            <input type="email" placeholder="Reply e-mail" />
                                        </label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-50">
                                        <label>
                                            <input type="password" placeholder="Password" />
                                        </label>
                                    </div>
                                    <div className="col-50">
                                        <label>
                                            <input type="password" placeholder="Reply password" />
                                        </label>
                                    </div>
                                </div>

                                <div className="row row-vertical">
                                    <p>
                                        <label>
                                            <input type="checkbox" name="save-user" id="" />
                                            I have read and accept all points included in the documents of the Privacy Policy and Terms Of User.
                                        </label>
                                    </p>
                                    <input type="submit" value="Register" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-50">
                        <h2>Login</h2>

                        <form action="">
                            <label>
                                <input type="text" placeholder="Username/email" />
                            </label>
                            <label>
                                <input type="password" placeholder="password" />
                            </label>
                            <p>
                                <label>
                                    <input type="checkbox" name="save-user" id="" />
                                    Save my data for faster login
                                </label>
                            </p>
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Authorization;