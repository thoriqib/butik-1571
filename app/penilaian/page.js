import FormPenilaian from "../components/FormPenilaian";

export default function Penilaian() {
  return (
    <div className="flex items-center justify-center flex-col">
      {/* <div className="alert alert-success w-3/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div> */}
      <div className="card bg-base-100 shadow-xl w-3/4">
        <div className="card-body">
          <FormPenilaian />
        </div>
      </div>
    </div>
  );
}
