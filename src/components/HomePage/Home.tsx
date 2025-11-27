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
        <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            margin: '20px',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '3rem',
                marginBottom: '40px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>📚 React Query Learning Hub</h1>
            
            <nav style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    {[{key: 'Home', label: '🏠 Home'}, {key: 'about', label: '📖 About'}, {key: 'product', label: '⚛️ React Books'}, {key: 'cloudbook', label: '☁️ Cloud Books'}].map((item) => (
                        <button 
                            key={item.key}
                            onClick={() => setActiveSection(activeSection === item.key ? null : item.key)}
                            style={{
                                background: activeSection === item.key 
                                    ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' 
                                    : 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                color: 'white',
                                padding: '15px 30px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                                transform: activeSection === item.key ? 'scale(1.05)' : 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                if (activeSection !== item.key) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeSection !== item.key) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>

            {activeSection && (
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '20px',
                    marginTop: '20px',
                    transition: 'all 0.3s ease'
                }}>
                    {activeSection === 'Home' && <HomePageContent />}
                    {activeSection === 'about' && <About />}
                    {activeSection === 'product' && <Product />}
                    {activeSection === 'cloudbook' && <CloudBook />}
                </div>
            )}
        </div>
    )
}
export default Home;