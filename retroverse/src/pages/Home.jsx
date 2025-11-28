const Home = () => {
    return (
    <>
    <div className="overall-container">
        <div className="logo-container">
            <div class="sparkle"></div> 
            <img className="site-title-logo" src="/pictures/retroverse-title.png" alt="Site Logo"/>
        </div>
        <div className="content-container">
            <div className="icon-container">
                <img src="/pictures/playstation-psn-icon-template.png"/>
            </div>
                <div className="description-container">
                    <h1 className="title"> Example Title </h1>
                    <div className="description">
                        An example description and just a bunch of random text
                    </div>
                </div>
        </div>

        <hr></hr>

        <div className="content-container">
            <div className="icon-container">
                <img src="/pictures/ps2-icon-template.png"/>
            </div>
                <div className="description-container">
                    <h1 className="title"> Example Title </h1>
                    <div className="description">
                        An example description and just a bunch of random text
                    </div>
                </div>
        </div>

        <hr></hr>
    </div>
    </>
    )
}
export default Home;