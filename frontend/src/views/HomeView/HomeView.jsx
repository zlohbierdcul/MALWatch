import ShowSlider from "../../components/ShowSlider/ShowSlider";
import { mockShows } from "../../mockdata/mockShows";

const HomeView = () => {
    return (
        <div>
            <h1>Welcome to HomeView</h1>
            <ShowSlider shows={mockShows}>

            </ShowSlider>
        </div>
    );
};

export default HomeView;
