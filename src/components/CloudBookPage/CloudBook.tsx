
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
            <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem' }}>☁️ Cloud Books Collection</h1>
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
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }}
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