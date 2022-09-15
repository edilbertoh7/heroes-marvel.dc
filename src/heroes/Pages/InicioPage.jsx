//import marvel from "../../assets/logo-marvel.webp";
import dc from "../../assets/logo-dc.webp";
import marvel from "../../assets/logo-marvel.webp";
import { useNavigate } from "react-router-dom";
export const InicioPage = () =>{
    const navigate = useNavigate();
    const onMarvel = () =>{
        navigate("/marvel")
    }
    const onDc = () =>{
        navigate("/dc")
    }
    return(
        <>
        <h1 className="text-center font-bold text-6xl uppercase mt-12 animate__animated animate__zoomInDown">
        ¿Que <span className="text-yellow-400">Team</span> eres 🤔?
        </h1>
        <div className="flex flex-col justify-center items-center mt-20">
            <img onClick={onMarvel}
            width="30%" src={marvel} alt=""
            className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse" />

            <img onClick={onDc}
            width="30%"  src={dc} alt=""
            className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse" />

        </div>
        
        </>
    )
}