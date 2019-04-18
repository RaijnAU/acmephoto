import React from 'react';

export default () => {
    const onClick = () => {
        const images = '#images'.position().top;
        'html, body'.animate(
            {
                scrollTop: images,
            },
            900
        );
    };

    return (
        <div>
            <a
                href="#images"
                className="btn"
                id="view-work"
                onClick={() => onClick}
            >
                View Work
            </a>
        </div>
    );
};
