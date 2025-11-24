import { useState } from 'react';
import Product from '../ReactBookPage/ReactBook';
import CloudBook from '../CloudBookPage/CloudBook';
import About from '../AboutPage/About';

export const HomePageContent = () => (
    <div>
        <h1>Random Number</h1>
        <p>{Math.random()*20}</p>
    </div>
)

const Home = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <div style={{ padding: '20px' }}>
            <h1>👋 Welcome to React Query Learning Session</h1>
            <nav>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                    <li style={{ margin: '10px 0' }}>
                        <button 
                            onClick={() => setActiveSection('Home')}
                            style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Home 
                        </button>
                    </li>
                    <li style={{ margin: '10px 0' }}>
                        <button 
                            onClick={() => setActiveSection('about')}
                            style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            About
                        </button>
                    </li>
                    <li style={{ margin: '10px 0' }}>
                        <button 
                            onClick={() => setActiveSection('product')}
                            style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            React Books
                        </button>
                    </li>
                    <li style={{ margin: '10px 0' }}>
                        <button 
                            onClick={() => setActiveSection('cloudbook')}
                            style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Cloud Books
                        </button>
                    </li>
                </ul>
            </nav>

            {activeSection === 'Home' && <HomePageContent />}
            {activeSection === 'about' && <About />}
            {activeSection === 'product' && <Product />}
            {activeSection === 'cloudbook' && <CloudBook />}
        </div>
    )
}
export default Home;