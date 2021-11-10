import Tabs from '../../components/widgets/Tabs/Tabs';
import './Gallery.css';

const Gallery = () => {

    return(
        <main>
            <section>
                <div className="row">
                    <div className="col-80">
                        <h3>Gallery</h3>
                        
                        
                    </div>
                    <div className="col-20">
                        <h3>Folders</h3>
                        <ul>
                            <li>Gallery</li>
                            <li>Scraps</li>
                            <li>Gifts</li>
                            <li>Others</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Gallery;