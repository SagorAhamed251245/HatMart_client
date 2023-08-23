 

 

const HelpCard = ({CardData}) => {
    const {id, help, image} = CardData
    return (
        <div className="bg-white hover:shadow-slate-600 p-6 rounded shadow-2xl cursor-pointer">
                <div className="flex items-center justify-start">
                    <img src={image} width={50} height={50}
                    alt="Picture of the author"/>
                    <h3 className="text-xl font-semibold  ml-2">{help}</h3>
                </div>
                <p className="text-gray-600">Having problems with your {help}?</p>
                <a href="#" className="text-blue-500 hover:underline">View Articles</a>
        </div>       
       
    );
};

export default HelpCard;