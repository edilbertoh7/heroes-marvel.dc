import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import herosApi from "../../api/HeroesApi";
import Loader from "../components/Loader";

export const MarvelPage = () => {
    const [getHeroes, setGetHeroes] = useState([]);

    console.log(getHeroes);
    useEffect(() => {
        obtenerHeroes();

    }, [])

    const obtenerHeroes = async () => {

        try {
            const respuesta = await herosApi.get('/superheroes?tipo=heroes-marvel');
            setGetHeroes(respuesta.data)
            //console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    }
    if (!getHeroes.length) {
        return (
            <div className="flex justify-center items-center mt-72">
                <Loader />
            </div>
        )
    }
    return (
        <>
            <h1 className="text-center font-bold text-6xl uppercase m-4">
                <span className="text-yellow-400"> Top 20</span>
                <br />Mejores Héroes de <span className="text-yellow-400">Marvel</span>
            </h1>
            <div className="grid sm:grid-cols-4 gap-4">
                {getHeroes.map((heroe) => (
                    <div key={heroe.id}
                        className="rounded-t-2xl shadow-2xl border-gray-900 m-8" >

                        <img src={heroe.imagen} alt=""
                            className="rounded-t-2xl w-full" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{heroe.nombre}</div>
                            <p className="text-gray-500 text-base text-justify">
                                {heroe.descripcion.substring(0, 200).concat('...')}
                            </p>
                            <Link to={`/heroe/${heroe.id}`}>
                                <button className="w-full bg-blue-500 px-8 py-2 mt-8 mb-6 rounded-lg hover:bg-orange-300 hover:text-blue-900  cursor-pointer">Ver Perfil</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
