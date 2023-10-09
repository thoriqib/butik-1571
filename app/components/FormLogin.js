"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("/api/login", {
      username,
      password,
    });
    setIsLoading(false);
    setUsername("");
    setPassword("");
    router.refresh();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="label">
          <span className="text-base label-text">
            Username <sup className="text-error">*</sup>
          </span>
        </label>
        <input
          type="text"
          placeholder="username Lengkap"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full input input-bordered input-primary"
        />
      </div>
      <div>
        <label className="label">
          <span className="text-base label-text">
            Password <sup className="text-error">*</sup>
          </span>
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full input input-bordered input-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        {!isLoading ? (
          <button type="submit" className="btn btn-block btn-primary">
            Login
          </button>
        ) : (
          <button type="button" className="btn btn-block loading">
            <span className="loading loading-spinner"></span>
          </button>
        )}
      </div>
    </form>
  );
}
