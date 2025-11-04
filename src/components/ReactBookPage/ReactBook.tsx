import ReactBook from '../../assets/ReactBook.png';
import RTCBook from '../../assets/RTCBook.jpg';
import NextJS from '../../assets/NextJS.avif';
import ReactQuery from '../../assets/ReactQuery.png';
import { useQuery } from '@tanstack/react-query';
interface Book {
    id: number;
    title: string;
    price: number;
    image: string;
}



export default function Product() {

    const { isPending, error, data } = useQuery<Book[]>({
        queryKey: ['BookData'],
        queryFn: () => {
            const ReactBooks: Book[] = [
                { id: 1, title: "React", price: Math.round(Math.random() * 29.99), image: ReactBook },
                { id: 2, title: "React with TypeScript", price: 34.99, image: RTCBook },
                { id: 3, title: "Next.js", price: 39.99, image: NextJS },
                { id: 4, title: "React Query", price: 32.99, image: ReactQuery },
            ];
            console.log('Fetching dynamicBooks:', ReactBooks);
            return new Promise(resolve => setTimeout(() => resolve(ReactBooks), 1000));
        },
        staleTime: 5 * 60 * 1000,
    })

    if (isPending) return 'Loading...'

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