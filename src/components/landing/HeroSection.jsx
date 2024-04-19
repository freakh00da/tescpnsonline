export default function HeroSection() {
  return (
    <section className='bg-gray-100 text-gray-800 mt-10'>
      <div className='container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
        <div className='flex items-center justify-center p-4 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <img
            src='/img/maxresdefault.jpg'
            alt=''
            className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
          />
        </div>
        <div className='flex flex-col justify-center p-6  rounded-sm lg:max-w-md xl:max-w-lg text-left'>
          <h1 className='text-5xl font-bold leadi sm:text-6xl'>
            Tryout CPNS 2024 Gratis di
            <span className='text-orange-600'> Jago</span>CPNS
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12'>
            "Sukses di Ujian CPNS 2024 Dimulai di Sini! Temukan Kemampuan Sejati
            Anda dengan Tes Online Terbaik di jagocpns - Persiapkan Diri Anda
            untuk Masa Depan PNS yang Gemilang!"
          </p>
          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='px-8 py-3 text-lg font-semibold rounded bg-orange-600 text-gray-50'
            >
              Masuk
            </a>
            <a
              rel='noopener noreferrer'
              href='#'
              className='px-8 py-3 text-lg font-semibold border rounded border-gray-800'
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
