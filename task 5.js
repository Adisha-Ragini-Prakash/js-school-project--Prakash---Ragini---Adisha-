// types.ts

export interface Event {

  id: string;

  year: number;

  title: string;

  description: string;

}


// data/events.ts

import { Event } from '../types';

export const events: Event[] = [

  { id: '1', year: 1990, title: 'Born', description: 'The beginning.' },

  { id: '2', year: 2010, title: 'Graduated', description: 'High school done!' },

];


// components/Header.tsx

import styled from 'styled-components';

const HeaderWrapper = styled.header`

  display: flex; justify-content: space-between; padding: 1rem;

`;

const Logo = styled.h1` font-size: 1.5rem; `;

export const Header = ({ toggleTheme }: { toggleTheme: () => void }) => (

  <HeaderWrapper>

    <Logo>📅 Timeline</Logo>

    <button onClick={toggleTheme}>🌓</button>

  </HeaderWrapper>

);


// components/EventMarker.tsx

import { Event } from '../types';

export const EventMarker = ({

  event,

  onClick,

}: {

  event: Event;

  onClick: () => void;

}) => (

  <div onClick={onClick}>

    <span>{event.year}</span> - {event.title}

  </div>

);


// components/Timeline.tsx

import { EventMarker } from './EventMarker';

import { Event } from '../types';

export const Timeline = ({

  events,

  onSelect,

}: {

  events: Event[];

  onSelect: (event: Event) => void;

}) => (

  <div>

    {events.map((event) => (

      <EventMarker key={event.id} event={event} onClick={() => onSelect(event)} />

    ))}

  </div>

);


// components/EventModal.tsx

import ReactDOM from 'react-dom';

import { Event } from '../types';

export const EventModal = ({

  event,

  onClose,

}: {

  event: Event | null;

  onClose: () => void;

}) => {

  if (!event) return null;

  return ReactDOM.createPortal(

    <div>

      <button onClick={onClose}>Close</button>

      <h2>{event.title}</h2>

      <p>{event.description}</p>

    </div>,

    document.body

  );

};


// components/FilterPanel.tsx

export const FilterPanel = () => <aside>Filters (Coming Soon)</aside>;


// App.tsx

import { useState, useEffect } from 'react';

import { Header } from './components/Header';

import { Timeline } from './components/Timeline';

import { EventModal } from './components/EventModal';

import { FilterPanel } from './components/FilterPanel';

import { Event } from './types';

import { events as eventData } from './data/events';


export default function App() {

  const [events, setEvents] = useState<Event[]>([]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {

    setEvents(eventData);

  }, []);


  return (

    <div className={darkMode ? 'dark' : ''}>

      <Header toggleTheme={() => setDarkMode((d) => !d)} />

      <FilterPanel />

      <Timeline events={events} onSelect={setSelectedEvent} />

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

    </div>

  );

}


