import { TextComponent } from "./shared/textComponent"
import { homeData } from "../../staticData/homeData"
import { ImageComponent } from "./shared/imageComponent"
import image from "../assets/photo-of-me.jpeg"

function Home() {
    return (
        <section id='home'>
            <h1 style={{ fontFamily: 'Arsenal SC', fontSize: '2.5rem', fontWeight: '900', color: 'salmon', margin: '4rem 0px' }}> {homeData.myName} </h1>
            <div className="home-content">
                <TextComponent title="About Me" text={homeData.intro} className="typewriter" styles={{ fontFamily: 'Arsenal SC', fontSize: '1.2rem', fontWeight: '900', color: 'whitesmoke', margin: '5px 0px' }} />
                <ImageComponent alt="CarlV-Photo" url={image} height="300px" width="auto" styles={{ borderRadius: '100%', borderColor: 'Whitesmoke', borderWidth: '3px', borderStyle: 'solid' }} />
            </div>
        </section>
    )
}

export default Home