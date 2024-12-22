import './App.css'
import useAuth from './Hooks/useAuth'

function App() {
    const { handleGoogleLogin } = useAuth();
    const handleSocialLogin = () => {
        handleGoogleLogin();
    } 

    return (
        <>
            <h1 className='text-5xl text-red-400'>Vite + React</h1>
            <button onClick={handleSocialLogin} className='btn'>Google</button>
        </>
    )
}

export default App
