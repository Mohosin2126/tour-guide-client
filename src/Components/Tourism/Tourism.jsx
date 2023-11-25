import TourismData from "./TourismData";

const Tourism = () => {
    return (
        <div className="mt-5">
            <h1 className="font-serif text-center  font-bold text-3xl">Tourism <span className="text-green-600 text-3xl">&</span> Travel Guide</h1>
            <p className="text-sm text-center mt-2 font-mono">Explore the world with our expert travel guides, dedicated to crafting personalized journeys filled with cultural richness and unforgettable moments. <br /> Trust us to turn your travel dreams into extraordinary adventures</p>
            <div>
                <TourismData></TourismData>
            </div>
        </div>
    );
};

export default Tourism;