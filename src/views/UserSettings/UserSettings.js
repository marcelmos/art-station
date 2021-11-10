import { render } from '@testing-library/react';
import './UserSettings.css';

const UserSettings = () => {
    return(
        <main>
            <section>
                <h2>Profile Settings</h2>

                <div className="row">

                    <div className="col-50">
                        <form action="">
                            <p>
                            <label>
                                <span>Profile visibility:</span>
                                <select name="" id="">
                                    <option>Public</option>
                                    <option>Only logged in</option>
                                    <option>Private</option>
                                </select>
                            </label>
                            </p>

                            <p>
                            <label>
                                <span>Visible username:</span>
                                <input type="text" />
                            </label>
                            </p>

                            <p>
                                <input type="submit" />
                            </p>
                        </form>
                    </div>
                    <div className="col-50">
                        <p>Specify who can visit your profile</p>
                        <br/>
                        <p>This gonna to be displayed for everyone instead your nickname inserted during registration.
                            This option is optional, and to find you user must enter your login name.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default UserSettings;