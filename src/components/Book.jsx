import getBook from "./APIBookConnection";

const Shapeshifterbook = () => {
    return (
        <div>
        <h1>Book</h1>
        <Books>
            <Book>
                {getBook.items}
                el primero
            </Book>
        </Books>
        </div>
    )
}

export default Shapeshifterbook