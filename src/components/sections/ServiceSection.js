import Image from 'next/image';
export default function ServiceSection()
{
  return (
    <section className='container'>
      <div className="bg-insove-blue text-white rounded-2xl px-10 pt-16 pb-40 grid grid-cols-4 gap-10 bg-[url('/images/pattern.svg')] bg-cover bg-no-repeat">
        <div className="col-span-4 lg:col-span-2">
          <h2 className='font-semibold text-3xl text-pretty text-white'>Our Best Services for Your Solution</h2>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <p className='text-pretty'>From advanced diagnostics to personalized treatment plans, our expert team ensures that you receive the highest quality care.</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 p-10 -mt-32">
        <div className="col-span-4 bg-white drop-shadow-md rounded-xl justify-center text-center p-5 lg:col-span-1">
          <span className='inline-block text-center'><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.5827 16.6667C40.6877 16.6667 41.7476 17.1057 42.529 17.8871C43.3104 18.6685 43.7493 19.7283 43.7493 20.8333V34.9167C45.0202 36.0625 45.8327 37.7292 45.8327 39.5833C45.8327 43.0417 43.041 45.8333 39.5827 45.8333C36.1243 45.8333 33.3327 43.0417 33.3327 39.5833C33.3327 37.7292 34.1452 36.0625 35.416 34.9167V20.8333C35.416 18.5417 37.291 16.6667 39.5827 16.6667ZM39.5827 18.75C38.4368 18.75 37.4993 19.6875 37.4993 20.8333V22.9167H41.666V20.8333C41.666 19.6875 40.7285 18.75 39.5827 18.75ZM10.416 41.6667V25H4.16602L24.9993 6.25L34.166 14.5C33.2481 15.2796 32.5114 16.2504 32.0077 17.3443C31.5039 18.4382 31.2451 19.629 31.2493 20.8333V33.3333C29.9368 35.0625 29.166 37.2292 29.166 39.5833L29.3743 41.6667H10.416Z" fill="#1CBCCF" />
          </svg>
          </span>
          <h3 className='text-neutral-700 font-semibold text-xl leading-tight mb-2'>General practitioners</h3>
          <p className='text-neutral-500 text-sm text-pretty'>Provides primary healthcare services with personalized attention and expertise.</p>
        </div>

        <div className="col-span-4 bg-white drop-shadow-md rounded-xl justify-center text-center p-5 lg:col-span-1">
          <span className='inline-block text-center'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7493 8.33317C18.7493 6.02067 20.6035 4.1665 22.916 4.1665C25.2285 4.1665 27.0827 6.02067 27.0827 8.33317C27.0827 10.6457 25.2285 12.4998 22.916 12.4998C20.6035 12.4998 18.7493 10.6457 18.7493 8.33317ZM33.3327 27.0832C33.3327 24.2915 31.6035 21.8748 29.166 20.8332C29.166 19.1756 28.5075 17.5859 27.3354 16.4138C26.1633 15.2417 24.5736 14.5832 22.916 14.5832C21.2584 14.5832 19.6687 15.2417 18.4966 16.4138C17.3245 17.5859 16.666 19.1756 16.666 20.8332V35.4165H20.8327V45.8332H27.0827V35.4165H33.3327V27.0832Z" fill="#1CBCCF" />
            </svg>
          </span>
          <h3 className='text-neutral-700 font-semibold text-xl leading-tight mb-2'>Pregnancy Support</h3>
          <p className='text-neutral-500 text-sm text-pretty'>Provides comprehensive care and guidance tailored for expectant mothers.</p>
        </div>

        <div className="col-span-4 bg-white drop-shadow-md rounded-xl justify-center text-center p-5 lg:col-span-1">
          <span className='inline-block text-center'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.8327 37.5C45.8327 39.7101 44.9547 41.8298 43.3919 43.3926C41.8291 44.9554 39.7095 45.8333 37.4993 45.8333H29.166C26.9559 45.8333 24.8363 44.9554 23.2735 43.3926C21.7107 41.8298 20.8327 39.7101 20.8327 37.5V33.3333H45.8327V37.5ZM8.33268 6.25H29.166C30.2711 6.25 31.3309 6.68899 32.1123 7.47039C32.8937 8.25179 33.3327 9.3116 33.3327 10.4167V29.1667H16.666V39.5833H8.33268C7.22761 39.5833 6.16781 39.1443 5.3864 38.3629C4.605 37.5815 4.16602 36.5217 4.16602 35.4167V10.4167C4.16602 9.3116 4.605 8.25179 5.3864 7.47039C6.16781 6.68899 7.22761 6.25 8.33268 6.25ZM8.33268 12.5V16.6667H12.4993V12.5H8.33268ZM29.166 16.6667V12.5H16.666V16.6667H29.166ZM8.33268 20.8333V25H12.4993V20.8333H8.33268ZM16.666 20.8333V25H29.166V20.8333H16.666ZM8.33268 29.1667V33.3333H12.4993V29.1667H8.33268Z" fill="#1CBCCF" />
            </svg>
          </span>
          <h3 className='text-neutral-700 font-semibold text-xl leading-tight mb-2'>Nutritional support</h3>
          <p className='text-neutral-500 text-sm text-pretty'>Offers personalized guidance and resources to enhance dietary health and wellness.</p>
        </div>

        <div className="col-span-4 bg-white drop-shadow-md rounded-xl justify-center text-center p-5 lg:col-span-1">
          <span className='inline-block text-center'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.3333 29.1666H27.0833V35.4166H22.9167V29.1666H16.6667V24.9999H22.9167V18.7499H27.0833V24.9999H33.3333M43.75 10.4166H38.2292L40.625 3.85409L35.7292 2.08325L32.6875 10.4166H6.25V14.5833L10.4167 27.0833L6.25 39.5833V43.7499H43.75V39.5833L39.5833 27.0833L43.75 14.5833V10.4166Z" fill="#1CBCCF" />
            </svg>
          </span>
          <h3 className='text-neutral-700 font-semibold text-xl leading-tight mb-2'>Pharmaceutical Care</h3>
          <p className='text-neutral-500 text-sm text-pretty'>Delivers expert medication management and counseling for optimal health outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}