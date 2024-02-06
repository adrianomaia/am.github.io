import Typewriter from "typewriter-effect";

const ComingSoon = () => {
    // const containerVariants = {
    //   hidden: { opacity: 0 },
    //   visible: { opacity: 1, transition: { duration: 0.8 } },
    // };
    return (
        <div className="comingsoon-area">
            <div className="comingsoon-area-column">
                <img class="" src="../cv-portfolio/watch.png" al="coming-soon" />
            </div>
            <div className="comingsoon-area-column">
                <div className="hero-typewriter">
                    <h3>Coming Soon!</h3>
                    <Typewriter
                        options={{
                        strings: [
                        "Tech news!",
                        "Exercises", 
                        "Hands on examples",
                        "Languages introductions", 
                        "Updates overviews!",
                        "And more...",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                    className="typewriter"
                    />
                </div>
            </div>
        </div>
    );
  };

  export default ComingSoon;