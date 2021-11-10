import Tabs from '../../components/widgets/Tabs/Tabs';
import './UserProfile.css';

const UserProfile = () => {

    const galleryTabs = {
        tabs: [
            { tabName: 'Main', dataType: '🎨  Main gallery' },
            { tabName: 'Scraps', dataType: 'Scraps gallery' },
            { tabName: '+', dataType: 'Create new tab' }
        ]
    };

    return(
        <main>
            <section>
                <div className="row">
                    <div className="col-20 center">
                        <img className="user-img" src="https://via.placeholder.com/200" alt="" />
                        <h2>[user name]</h2>
                        <small>Member from: 20-10-2021</small>
                    </div>
                    <div className="col-80">
                        <div className="row row-vertical">
                            <div className="col">
                                <h3 >Profile description</h3>
                            </div>
                            <div className="col">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsum fugit ad, voluptatum rem dignissimos assumenda eveniet? Maxime placeat debitis recusandae sed vel eligendi quibusdam numquam aliquam illo tempora. Nobis!
                                    Tempore odit expedita molestiae nisi tenetur ab facere provident voluptates aliquid cupiditate, deleniti vero placeat adipisci, quam eaque unde soluta quos temporibus id assumenda sed fugit repudiandae! Voluptates, harum ducimus?<br/>
                                    <br/>
                                    Id fuga commodi, quaerat dolores, voluptas ex libero accusamus mollitia maxime sed at blanditiis dignissimos provident quia impedit minus nihil explicabo est sequi molestiae numquam architecto molestias quod ut! Sit?<br/>
                                    <br/>
                                    Delectus sunt dolore accusamus eveniet eligendi dignissimos in facilis deleniti maxime tenetur inventore incidunt mollitia provident, ut magni veritatis nisi corrupti unde vel ipsa modi vitae? Officiis similique eligendi sed.
                                    Molestias eveniet commodi laboriosam pariatur doloribus atque debitis, saepe, dicta iure nisi cumque aperiam at aspernatur. Esse vel nesciunt nobis facere beatae, maxime dolores, numquam corporis, exercitationem et cupiditate quae?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="row">
                <div className="col-60 left-panel">
                    <section>
                        <div className="row row-vertical">
                            <div className="col">
                                <h3>Gallery</h3>
                            </div>
                            <div className="col">
                                <Tabs tabsData={galleryTabs} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="row row-vertical">
                            <div className="col">
                                <h3>Favourites</h3>  
                            </div>
                            <div className="col"></div>
                        </div>
                    </section>
                </div>

                <div className="col-40">
                    <section>
                        <div className="row row-vertical">

                            <div className="col">
                                <h3>Stats</h3>  
                            </div>

                            <div className="col">
                                <div className="row">

                                    <div className="col-50">
                                        <div className="row row-vertical">
                                            <div className="col">
                                                <p><strong>Views:</strong> 1234</p>
                                                <p><strong>Followers:</strong> 1234</p>
                                                <p><strong>Comments:</strong> 1234</p>
                                                <p><strong>Shouts:</strong> 1234</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-50">
                                        <div className="row row-vertical">
                                            <div className="col">
                                                <p><strong>Uploads:</strong> 1234</p>
                                                <p><strong>Following:</strong> 1234</p>
                                                <p><strong>Comments:</strong> 1234</p>
                                                <p><strong>Shouts:</strong> 1234</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section>
                        <div className="row row-vertical">
                            <div className="col">
                                <h3>Shoutouts:</h3>
                            </div>
                            <div className="col"></div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default UserProfile;