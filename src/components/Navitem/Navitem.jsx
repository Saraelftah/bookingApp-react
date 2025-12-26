import { NavLink } from "react-router-dom";

function Navitem({
  icon,
  label,
  to = "#",
  direction = "col",
  showLabel = true,
}) {
  return (
    <>
      <li>
        <NavLink to={to}>
          <div
            className={`flex flex-${direction} gap-3 items-center transition duration-300 py-3 md:px-4 rounded-xl hover:bg-blue-500`}
          >
            <i className={`${icon} text-2xl`}></i>
            {showLabel && <span>{label}</span>}
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default Navitem;
