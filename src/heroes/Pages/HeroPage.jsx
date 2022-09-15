import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import heroesApi from "../../api/HeroesApi";

export const HeroPage = () => {
    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1)
    }
    const [getHeroes, setGetHeroes] = useState([]);
    const { heroeId } = useParams();

    console.log(getHeroes);
    useEffect(() => {
        obtenerHeroes();

    }, [])

    const obtenerHeroes = async () => {

        try {
            const respuesta = await heroesApi.get(`/superheroes/${heroeId}`);
            setGetHeroes(respuesta.data)
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div key={getHeroes.id}
                className="w-1/1 sm:1/2 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 m-8 animate__animated animate__fadeInLeft ">
                <img src={getHeroes.imagen} alt=""
                    className="w-full h-full rounded-2xl " />
                <div className="px-6 py-4">
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-400">Nombre: </span>
                        {" "}{getHeroes.nombre}
                    </div>
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-400">Nombre: </span>
                        {" "}{getHeroes.editorial}
                    </div>
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-400">Nombre: </span>
                        {" "}{getHeroes.estreno}
                    </div>
                    <span className="text-xl font-bold text-yellow-400">
                        Descripción:
                    </span>
                    <p className="text-gray-400 text-base text-justify mt-4 mb-4">
                        {getHeroes.descripcion}
                    </p>
                    <span className="text-xl font-bold text-yellow-400">Poderes: </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 ml-4">
                        {getHeroes.poderes}
                    </span>
                    <button onClick={onNavigateBack}
                    className="w-full bg-indigo-400 px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-indigo-700">
                        👈  Regresar
                    </button>

                </div>
            </div>
        </>
    )
}