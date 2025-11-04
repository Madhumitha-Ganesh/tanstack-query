
import AWS from '../../assets/AWS.png';
import Azure from '../../assets/azure.png';
import { useQuery } from '@tanstack/react-query';
interface Book {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function CloudBook() {

    const { isLoading, error, data } = useQuery<Book[]>({
        queryKey: ['CloudBookData'],
        queryFn: () => {
            const dynamicBooks: Book[] = [
                { id: 7, title: "AWS", price: parseFloat((Math.random() * 29.99).toFixed(2)), image: AWS },
                { id: 9, title: "Azure", price: 105.99, image: Azure },
            ];
            console.log('Fetching dynamicBooks:', dynamicBooks);
            return new Promise(resolve => setTimeout(() => resolve(dynamicBooks), 1000));
        },
        refetchOnMount: 'always',
    });


    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div style={{ padding: '20px' }}>
            <h1>Programming Books</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px'
            }}>
                {data?.map(book => (
                    <div key={book.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        textAlign: 'center'
                    }}>
                        <img
                            src={book.image}
                            alt={book.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <h3 style={{ margin: '10px 0' }}>{book.title}</h3>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
                            ${book.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}