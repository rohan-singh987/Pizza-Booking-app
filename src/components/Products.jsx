import PizzaProducts from "./PizzaProducts"

const Products = () => {
    return (
        <div className="container mx-auto pb-24 px-4 md:px-0">
            <h1 className="text-lg font-bold my-8">Our Delecious Menu </h1>            
            <div className="grid grid-cols-2 my-g gap-24 md:grid-cols-5">
                
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>
                <PizzaProducts/>

                
            </div>
        </div>
    )
}

export default Products
