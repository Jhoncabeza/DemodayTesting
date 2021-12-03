import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div className="p-2 text-5xl text-gray-600">
        <Link to="/Home">
          <FaHome />
        </Link>
      </div>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
        Artículos
      </h1>
      <div class="flex flex-col items-center justify-center md:flex-row flex-wrap justify-center ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://res.cloudinary.com/dso8ht3px/image/upload/v1638547371/demoday/metodo_pomodoro_mjik2k.jpg"
            alt="Pomodoro clock"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              ¿Qué es el método Pomodoro y para qué sirve?
            </div>
            <p class="text-gray-700 text-base">
              Existen muchos métodos útiles para organizar el tiempo, pero el de
              Pomodoro es uno de los más sencillos de aplicar. Utilizando un
              reloj, la técnica Pomodoro consiste en dividir el tiempo dedicado
              al estudio en intervalos...
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Leer Artículo
            </span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://res.cloudinary.com/dso8ht3px/image/upload/v1638547371/demoday/mood_tracker_vcisue.jpg"
            alt="Mood tracker template"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Los beneficios de llevar tu propio <em>mood tracker</em>
            </div>
            <p class="text-gray-700 text-base">
              Al tener una información diaria sobre nuestras emociones podemos
              darnos cuenta que los domingos o los lunes son nuestros peores
              días o si nuestras altas o bajas de emociones pueden estar
              influenciadas...
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Leer Artículo
            </span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271973/Mind%20Balance%20App/pexels-photo-3184360_mnxhjh.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Las mejores técnicas para trabajar en equipo
            </div>
            <p class="text-gray-700 text-base">
              Una de las cosas que más nos cuesta en nuestra vida escolar,
              universitaria y laboral es el trabajo en equipo. Llevar un
              ambiente amigable con tus compañeros de trabajo puede resultar
              retador...
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Leer Artículo
            </span>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271973/Mind%20Balance%20App/pexels-photo-301920_xu1lcq.jpg"
            alt="Study phrase"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Los mejores hábitos de estudio
            </div>
            <p class="text-gray-700 text-base">
              La puesta en práctica de buenos hábitos de estudio influye
              positivamente en la consecución del éxito académico de un
              estudiante{" "}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Leer Artículo
            </span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271974/Mind%20Balance%20App/pexels-photo-3755761_qek2kq.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              ¿Cómo manejar el estrés y la ansiedad causados por la presión
              académica?
            </div>
            <p class="text-gray-700 text-base">
              El estrés puede ser descrito como una situación de sobrecarga o de
              presión que afecta a una persona y que depende tanto de las
              demandas de la situación, como de los recursos de la persona para
              afrontarla.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Leer Artículo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
