import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";

const Profile = () => {
    const { user } = useContext(AppContext)
    return (
        <div>
            <div className=" p-2 text-5xl text-gray-600">
                <Link to="/Home">
                    <FaHome className="text-sky-300 m-4" />
                </Link>
            </div>
            <div>
                <div className="m-8">
                    <div className="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
                        <div className="md:col-span-1 h-48 shadow-xl p-2">
                            <div className="flex w-full h-full relative">
                                <img
                                    src={user.photoURL}
                                    className="w-44 h-44 m-auto"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
                            <div className="flex">
                                <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Nombre: 
                                </span>
                                <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={user.displayName}
                                    readonly
                                />
                            </div>
                            <div className="flex ">
                                <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Correo:
                                </span>
                                <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={user.email}
                                    readonly
                                />
                            </div>
                            {/* <div className="flex ">
                                <span class="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                                    Fecha de nacimiento:
                                </span>
                                <input
                                    className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                                    type="text" value={user.birthday}
                                    readonly
                                />
                            </div> */}
                        </div>
                        <div className="md:col-span-4 h-48 shadow-xl p-4 space-y-2 md:block">
                            <h3 className="font-bold uppercase"> Sobre mi:</h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                eget laoreet diam, id luctus lectus. 
                            </p>
                        </div>
                        <div>
                        <button className="w-full mb-4 mr-4 bg-sky-300 
                        hover:bg-sky-400 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48" type="button">Editar Perfil</button>   
                        <button className="w-full mb-4 mr-4 bg-red-400 
                        hover:bg-red-500 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48" type="button">Eliminar Cuenta</button>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
