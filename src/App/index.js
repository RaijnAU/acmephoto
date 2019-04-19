import React, {useRef} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './index.css';

export default () => (
    <div>
        <main>
            <div id="landing">
                <div id="landing-text">
                    <div id="landing-text-inner">
                        <h1>Acme Photography</h1>
                        <h2>Beautiful Natural Photography</h2>
                        <AnchorLink
                            href="#images"
                            className="btn"
                            id="view-work"
                        >
                            View Work
                        </AnchorLink>
                    </div>
                </div>
                <div id="landing-image" />
            </div>

            <div id="images">
                <div id="header">
                    <h2>Our Work</h2>
                </div>

                <img
                    src="https://source.unsplash.com/1600x900/?nature,water
            "
                    alt=""
                />
                <div className="caption">
                    <h3>Photo One</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea, facilis?
                    </p>
                </div>
                <img
                    src="https://source.unsplash.com/1600x900/?nature,trees
            "
                    alt=""
                />
                <div className="caption">
                    <h3>Photo Two</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea, facilis?
                    </p>
                </div>
                <img
                    src="https://source.unsplash.com/1600x900/?nature,flowers
            "
                    alt=""
                />
                <div className="caption">
                    <h3>Photo Three</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea, facilis?
                    </p>
                </div>
                <img
                    src="https://source.unsplash.com/1600x900/?nature,animals
            "
                    alt=""
                />
                <div className="caption">
                    <h3>Photo Four</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea, facilis?
                    </p>
                </div>
                <img
                    src="https://source.unsplash.com/1600x900/?nature,clouds
            "
                    alt=""
                />
                <div className="caption">
                    <h3>Photo Five</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea, facilis?
                    </p>
                </div>
            </div>
        </main>

        <footer>
            <h3>Get In Touch</h3>
            <p>Email or call us to set up a consult.</p>
            <p>
                Email: <strong>contact@acmephotos.test</strong>
            </p>
            <p>
                Phone: <strong>(323) 555-5555</strong>
            </p>
        </footer>
    </div>
);
