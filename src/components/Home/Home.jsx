import Hero from "./Hero/Hero";
import Box from "../Box/Box";

function Home() {

    return (

        <div>

            <Hero />
            <Box categoryName="adventure" index={0} />
            <Box categoryName="puzzle" index={1} />
            <Box categoryName="education" index={2} />
            <Box categoryName="reflex" index={3} />
            <Box categoryName="sports" index={4} />
        </div>
    )
}

export default Home;
