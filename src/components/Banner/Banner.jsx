import '../../sass/Main/main.scss'


function Banner({ backgroundImage, children, bannerType}){
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const bannerClass= `banner ${bannerType === 'about' ? 'banner--about' : 'banner--home'}`;

    return (
        <div className={bannerClass} style={bannerStyle}>
            {children}
        </div>
    )    
}

export default Banner;