import LoginForm from './_components/LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '야옹웨어 - 로그인',
};

export default function SiginIn() {
  return (
    <div className="flex w-full h-full justify-center items-center bg-gray-200">
      <div className="flex flex-col md:flex-row rounded-lg border-2 border-gray-800 overflow-hidden bg-white drop-shadow-lg">
        <div className="flex w-full md:w-72 h-64 md:h-[400px] bg-[url(/img/auth/login.jpg)] bg-cover bg-center md:bg-left" />
        <div className="flex mx-10 my-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
