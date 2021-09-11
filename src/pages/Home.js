import Products from "../components/Products"

function Home() {
    return (
    <>
        <div className="hero py-16 ">
            <div className= "container mx-auto flex items-center justify">
                
                <div className="w-1/2">
                    <h6 className="text-lg"><em> Hungry Haa??? </em></h6> 
                     <h1 className="text-4xl md:text-6xl font-bold">Dont't Wait!!!</h1>  
                    <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-700 ">Order Now</button>
                </div>

                <div className="w-1/2">
                    <img src="/images/pizza.png" alt="pizza" />
                </div>
            </div>
        </div>

        <div className="pb-24">
            <Products/>
        </div>
</>
    )
}

export default Home
