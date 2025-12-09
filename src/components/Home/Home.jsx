import Hero from "./Hero/Hero";
import Box from "../Box/Box";

function Home() {

    return (

        <div>

            <Hero />
            <Box categoryName="adventure" index={0} />
            <Box categoryName="puzzle" index={1} />
            <Box categoryName="sports" index={2} />
        </div>
    )
}

export default Home;
