import privacyPolicy from './privacyPolicy.json';

export default function privacy() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 py-12 md:py-24 md:px-32 md:flex-row md:gap-10">
      <div className="w-full ">
        <span className="text-lg uppercase space text-primary font-semibold">
          Integritetspolicy
        </span>
        <h1 className="text-3xl font-semibold">StudentHörnan och din integritet</h1>
        <div className="mt-5 space-y-5">
          <p className="text-md">
            På den här sidan hittar du vår policy som vi följer för att skydda dina personuppgifter
            och din integritet. De ska följa riktlinjerna i Dataskyddsförordningen GDPR. Är det
            någonting du undrar över är du välkommen att kontakta{' '}
            <span className="text-primary cursor-pointer hover:underline">info@example.se</span> så
            svarar vi på dina frågor.
          </p>
          {privacyPolicy.map((item) => (
            <>
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p>{item.text}</p>
            </>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex">
        {/* <Image
          className="bg-cover mt-5 rounded"
          src="/images/jag&tim.jpeg"
          alt="image"
          width={600}
          height={600}
        /> */}
      </div>
    </div>
  );
}
