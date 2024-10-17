import SigninBtn from '../Btns/SigninBtn';

const UnAuthHome = () => {
  return (
    <div className="p-10 mx-auto flex items-center flex-col gap-5">
      <h1 className="text-red-500 mx-auto text-center text-4xl font-bold">
        You Need to signin
      </h1>
      <SigninBtn />
    </div>
  );
};

export default UnAuthHome;
