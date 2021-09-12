
const PizzaProducts = () => {
    return (
        <div>
            <div>
                    <img src="/images/peproni.png" alt="" />
                    

                    <div className="text-center ">
                    <h2 className="text-lg font-bold py-2">Green Garden</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                    </div>


                    <div className="flex justify-between items-center mt-4">
                        <span >₹ 312</span>
                        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-700">Add</button>
                    </div>
            </div>
        </div>
    )
}

export default PizzaProducts
