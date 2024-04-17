const LoginError = () => {
    return (
        <div className="w-1/5 h-[10%] border-2 rounded-xl border-red-300 bg-red-300/30 flex items-center justify-center ">
            <p className="text-red-500 text-[20px]">Username or Password is incorrect</p>
        </div>
    );
}

export default LoginError;