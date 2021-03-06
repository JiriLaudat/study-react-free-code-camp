import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
import Product from "./components/Product";
import productsData from "./data/productsData";

function App() {
    const productComponents = productsData.map(product => {
        return (
            <Product 
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
            />
        )
    })

    return (
        <div>

            <Header />

            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>

            {productComponents}

            <ContactCard
                name="Mr. Whiskerson"
                imgUrl="http://placekitten.com/300/200"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard
                name="Fluffykins"
                imgUrl="http://placekitten.com/400/200"
                phone="(212) 555-2345"
                email="fluff@me.meow"
            />
            <ContactCard
                name="Destroyer"
                imgUrl="http://placekitten.com/400/300"
                phone="(212) 555-3456"
                email="ofworlds@yahoo.com"
            />
            <ContactCard
                name="Felix"
                imgUrl="http://placekitten.com/200/100"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />

            <ContactCard
                name="Eugen"
                imgUrl="http://placekitten.com/200/100"
            />
        </div>
    )
}

export default App;