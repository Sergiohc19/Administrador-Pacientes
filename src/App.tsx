import { ToastContainer } from "react-toastify";
import PatientForm from "./components/PatientForm";
import { PatientsList } from "./components/PatientsList";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:2/3 md:mx-auto">
          Seguimiento de Pacientes {""}
          <span className="text-indigo-700 ">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientsList />
        </div>
      </div>

      <ToastContainer />
      
      
    </>
  );
};
