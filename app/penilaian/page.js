import FormPenilaian from "../components/FormPenilaian";
import { ToastContainer } from "react-toastify";

export default function Penilaian() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="card bg-base-100 shadow-xl w-3/4">
        <div className="card-body">
          <FormPenilaian />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
