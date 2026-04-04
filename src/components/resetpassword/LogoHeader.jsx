import { FaFire } from "react-icons/fa";

export default function LogoHeader() {
  return (
    <div className="text-center mb-6">
      <div className="mx-auto mb-2 bg-surface-container p-2 rounded-md inline-flex items-center justify-center">
        <FaFire className="text-indigo-300" size={28} />
      </div>
      <h1 className="text-2xl font-bold tracking-tight">Luminescent Scholar</h1>
      <p className="text-sm text-gray-500 font-semibold">RESET ACCESS</p>
    </div>
  );
}
