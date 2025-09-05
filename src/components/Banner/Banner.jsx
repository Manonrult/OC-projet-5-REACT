import '../../sass/Main/main.scss'


function Banner({ backgroundImage, children}){
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className='banner' style={bannerStyle}>
            {children}
        </div>
    )    
}

export default Banner;