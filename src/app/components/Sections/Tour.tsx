import Socials from '@/app/components/Socials';

const infoAndTickets = [
  {
    name: 'Devour The Day',
    date: 'Wed, July 17, 2024',
    location: 'The Forge, 22 W. Cass St, Joliet, IL 60432',
    link: 'https://www.ticketweb.com/event/devour-the-day-the-forge-tickets/13507994',
  },
  {
    name: 'Devour The Day',
    date: 'Thu, July 18, 2024',
    location:
      "Piere's Entertainment Center, 5629 St Joe Rd, Fort Wayne, IN 46835",
    link: 'https://www.etix.com/ticket/p/99392905/devour-the-day-fort-wayne-pieres-entertainment-center?partner_id=100&_ga=2.101701057.1912043888.1719412795-289740840.1718226420',
  },
  {
    name: 'Johnny Craig',
    date: 'Wed, Aug 14, 2024',
    location: 'Riff City, 166 Chandler St, Buffalo, NY 14207',
    link: 'https://www.eventbrite.com/e/jonny-craig-buffalo-ny-tickets-924940109767?aff=hushush',
  },
  {
    name: 'HUSH HUSH',
    date: 'Fri, Aug 2, 2024',
    location: 'Rec Room, 79 W Chippewa, Buffalo, NY 14202',
    link: 'https://www.ticketweb.com/event/hush-hush-rec-room-tickets/13738983?pl=recroom',
  },
];

export default function Tour() {
  return (
    <section
      className='flex flex-col md:px-36 sm:px-24 px-2 justify-center text-center items-center text-white sm:mb-24 md:mb-36'
      id='tour'
    >
      <h1 className='lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-bold mb-12 sm:mb-24 md:mb-36'>
        {infoAndTickets.filter((obj) => new Date(obj.date) > new Date())
          .length === 0
          ? 'TOUR INFO COMING SOON'
          : 'TOURS AND TICKETS'}
      </h1>
      {infoAndTickets.filter((obj) => new Date(obj.date) > new Date())
        .length === 0 ? (
        <div className='flex justify-center items-center flex-col'>
          <p className='md:text-3xl sm:text-2xl text-lg pt-6'>
            In the meantime, keep up with us on our socials
          </p>
          <Socials className='flex' />
        </div>
      ) : (
        infoAndTickets
          .filter((obj) => new Date(obj.date) > new Date())
          .map((info, index) => (
            <div
              key={index}
              className='flex flex-col md:gap-1 md:mb-24 sm:mb-16 mb-8'
            >
              <h2 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold'>
                {info.name}
              </h2>
              <p className='lg:text-3xl md:text-2xl sm:text-xl text-sm'>
                {info.date}
              </p>
              <p className='lg:text-3xl md:text-2xl sm:text-xl text-sm'>
                {info.location}
              </p>
              <a
                href={info.link}
                target='_blank'
                rel='noreferrer'
                className='lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold hover:text-white underline transition-all duration-200'
              >
                Get Tickets
              </a>
            </div>
          ))
      )}
    </section>
  );
}
