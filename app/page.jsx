import DisplayComponents from "./sections/DisplayComponents";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Showcase from "./sections/Showcase";

const Home = () => {
	return (
		<>
			<Hero />
			<DisplayComponents scroll='animate-scroll' className='my-4 -translate-y-6' />
			<Features />
			<Showcase />
		</>
	);
};

export default Home;
