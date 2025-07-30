import notfound from '../../assets/images/notfound.png';

function Notfound() {


  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='w-70 '>
          <img src={notfound} alt="notfound" />
        </div>
        <h2 className='text-3xl font-bold'>404</h2>
        <p className='font-bold'>Page not found</p>
      </div>
    </>
  );
}

export default Notfound;
