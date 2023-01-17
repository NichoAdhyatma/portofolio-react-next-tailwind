import { BsFillMoonStarsFill } from "react-icons/bs";
export default function Header({ setDarkMode }) {
  return (
    <>
      <nav className="py-10 mb-10 flex justify-between">
        <h1 className="text-2xl font-burtons">Nicoding</h1>
        <ul className="flex items-center gap-4">
          <li>
            <BsFillMoonStarsFill
              onClick={setDarkMode}
              className="text-2xl cursor-pointer"
            />
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
