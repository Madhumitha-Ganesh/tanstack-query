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
        //refetchOnMount: true,
        //refetchOnWindowFocus: true,
        //refetchOnReconnect: true,
        refetchInterval: 1000 * 60 * 1,
        staleTime: 5 * 60 * 1000,
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem' }}>⚛️ React Books Collection</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px'
            }}>
                {data?.map(book => (
                    <div key={book.id} style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '20px',
                        padding: '25px',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                    }}>
                        <img
                            src={book.image}
                            alt={book.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <h3 style={{ margin: '15px 0', color: 'white', fontSize: '1.3rem' }}>{book.title}</h3>
                        <p style={{ 
                            fontSize: '20px', 
                            fontWeight: 'bold', 
                            color: '#4ecdc4',
                            background: 'rgba(244, 249, 249, 0.93)',
                            padding: '8px 16px',
                            borderRadius: '25px',
                            display: 'inline-block'
                        }}>
                            ${book.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}