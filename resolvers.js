const authors = [{
        name: 'JK Rowling',
        age: 50,
        books: ['Book1', 'Book2', 'Book3', 'Book4', 'Book5']
    },
    {
        name: 'Canon Doyle',
        age: 35,
        books: ['Hound of Baskerville', 'Sherlock Holmes', 'Books-1']
    },
]

const resolvers = {
    Query:{
        author :() =>{
            return authors
        }
    }
}

export default resolvers;