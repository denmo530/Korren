import Image from 'next/image';

export default function about() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 py-12 md:py-24 md:px-32 md:flex-row md:gap-10">
      <div className="w-full md:w-1/2">
        <span className="text-lg uppercase space text-primary font-semibold">Om oss</span>
        <h1 className="text-3xl font-semibold">StudentHörnan</h1>
        <div className="mt-5 space-y-5">
          <p className="text-md">
            Välkommen till StudentHörnan, den ultimata plattformen för att hjälpa högskolestudenter
            att hitta det perfekta studentboendet. Vi förstår att valet av boende är en viktig och
            spännande del av din studietid, och vi är här för att göra processen smidigare och mer
            informativ.
          </p>
          <p>
            På StudentHörnan kan du bläddra igenom ärliga och kritiska recensioner från andra
            studenter. Läs om deras erfarenheter och insikter för att få en klar bild av olika
            studentboenden runt om i landet. Vi uppmuntrar också dig att dela dina egna
            erfarenheter, så att andra kan dra nytta av dina tips och rekommendationer. Vår
            community-drivna plattform gör det möjligt för dig att vara delaktig och bidra till den
            gemensamma kunskapsbanken om studentboenden. Tillsammans skapar vi en pålitlig och
            användbar resurs för alla studenter som söker det bästa boendet!
          </p>
          <p>
            Har du frågor eller behöver hjälp? Besök vår kontaktsida eller kontakta oss direkt via
            e-post på kontakt@example.se. Vi finns här för att hjälpa dig!
          </p>
          <p>
            Studenthörnan grundades och utvecklades av Dennis Moradkhani och Tim Olsson. Allting
            började som ett projekt i en avancerad webbutveckling kurs men utvecklades till vad du
            ser idag!
          </p>
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
