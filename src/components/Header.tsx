import Logo from './assets/logo.svg?react';

const Header = () => {
  return (
    <header className="grid md:grid-cols-2 grid-cols-1 gap-4 min-w-96 mb-9">
      <div className="md:max-w-96 md:col-start-2 mt-16 flex flex-col justify-center">
        <span className='text-gray-200 uppercase text-xl flex md:justify-start justify-center'>stencil art</span>
        <Logo className='w-full flex justify-center' />
        <span className='text-gray-200 uppercase text-xl flex md:justify-end justify-center md:mr-4'>contemporary art</span>
      </div>
    </header>
  );
}

export default Header;