import FormLogin from "@/app/components/FormLogin";

export default function Login() {
  return (
    <main className="flex items-center justify-center flex-col h-screen">
      <div className="card w-3/4 bg-base-100 shadow-xl rounded-lg">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <FormLogin />
        </div>
      </div>
    </main>
  );
}