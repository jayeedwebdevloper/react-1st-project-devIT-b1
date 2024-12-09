import DoubleSlider from "../../../shared/Sliders/DoubleSlider";
import { reviewsData } from "../../../util/webdata";


const Reviews = () => {
    return (
        <div className="w-full bg-stone-100 py-[100px]">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <h1 className="text-5xl font-bold text-blue-800 text-center ">Don’t take our word, see <br /> what our customers say</h1>

                <div className="w-full overflow-hidden">
                    <DoubleSlider data={reviewsData} />
                </div>
            </div>
        </div>
    );
};

export default Reviews;