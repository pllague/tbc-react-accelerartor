const Card = ({ logo, index }) => {
    return (
        <div className="flex flex-col w-[280px] h-[290px] rounded-[10px] border border-light_blue overflow-hidden lg:w-[300px] lg:h-[400px] hover:scale-110 cursor-pointer transition duration-300 ease-linear ">
            <div className="flex h-[3000px] w-full mb-[30px] lg:h-[1500px] lg:mb-[40px]">
                <img
                    className="w-full h-full object-cover object-center"
                    src={logo}
                    alt="React"
                />
            </div>
            <div className="flex flex-col h-full px-[18px] lg:px-[22px]">
                <div className="pb-[25px]">
                    <h5 className="text-[15px] leading-[24px] lg:text-[18px] lg:leading-[29px]">
                        პროდუქტი {index}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Card;