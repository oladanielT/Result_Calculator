import React from 'react';

function BackgroundImage({imageUrl, children}) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    }
    return (
        <div style={backgroundStyle}>
            {children}
        </div>
    );
}

export default BackgroundImage;