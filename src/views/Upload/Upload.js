import './Upload.css';

const Upload = () => {

    return(
        <main>
            <section>
                <div className="row row-vertical">
                    <p>
                        <label>
                            Select file:
                            <input type="file" name="" id="" />
                        </label>
                    </p>

                    <p>
                        <label>
                            Title:
                            <input type="text" />
                        </label>
                    </p>

                    <p>
                        Access level:
                        <label class="radio-input">
                            <input type="radio" name="access-level" id="" /> <span>SFW</span>
                        </label>
                        <label class="radio-input">
                            <input type="radio" name="access-level" id="" /> <span>NSFW</span>
                        </label>
                    </p>
                </div>
            </section>
        </main>
    )

}

export default Upload;

