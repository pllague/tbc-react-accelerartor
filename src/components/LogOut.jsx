'use client';
const LogOut = ({ handleLogOut }) => {

    function handlClick() {

    }
    return (
        <button onClick={() => handleLogOut()} className="border-0 bg-blue-500 py-3 px-5 mx-auto rounded-full text-white lg:text-[20px] hover:bg-orange transition-all transform duration-300 ease-linear">Log out</button>
    )
}
export default LogOut;