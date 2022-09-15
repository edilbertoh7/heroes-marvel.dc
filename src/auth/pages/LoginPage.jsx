import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const navigate = useNavigate();
    const LogIn = () =>{
        navigate("/inicio")
    }
    return (
        <div className="flex h-screen justify-center items-center" >
            <button onClick={LogIn} className="bg-blue-600 py-2 px-6 rounded-lg font-bold text-white hover:bg-green-300 hover:text-blue-900  cursor-pointer" >
                Ingresar 😛
            </button>
        </div>
    )
}
