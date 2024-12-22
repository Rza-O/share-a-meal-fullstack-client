import './App.css'
import useAuth from './Hooks/useAuth'

function App() {
    const { handleGoogleLogin } = useAuth();
    const handleSocialLogin = () => {
        handleGoogleLogin();
    } 

    return (
        <>
            <h1 className='text-5xl text-red-400 font-lobster'>Vite + React</h1>

            <p className='text-xl font-shrimp'>This is body</p>

            <button onClick={handleSocialLogin} className='btn'>Google</button>
        </>
    )
}

export default App
