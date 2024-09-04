import React, { useState } from "react";
import MyButton from "./MyButton";

interface IBook {
    name: string;
    price: number;
}

const Book: React.FC = () => {

    const [book, setBook] = useState<IBook>({name: 'Avatar', price: 200})

    return (
        <div>
            <p>Name: {book.name} and Price: Rs{book.price}.</p>
            <MyButton text="Click to change book" onClick={() => setBook({name: 'Harry Potter', price: 400})} />

        </div>
    )
}

export default Book;