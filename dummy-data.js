const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming For Everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking For Introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking For Extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Basketball All Stars Are You",
    description:
      "Have you ever wonder how is it to play a basketball match with a professionals? This event will show it to you! Many super stars from best teams will come to your city to play a mixed matches with all of you!",
    location: "Duskwood 5, 20295 Baltimore",
    date: "2023-06-22",
    image: "images/basketball-event.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "I Am a Bookworm",
    description:
      "Do you love books like we do? All your friends go partying and you lay on bed under a cozy coverlet? You are not alone! Join our event to meet people like you!",
    location: "Booty Bay 42, 36221 New Yersey",
    date: "2023-02-12",
    image: "images/books-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
