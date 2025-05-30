'use client';

import { useEffect, useMemo, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

import NavBar from '../components/NavBar/page';
import { getAllEvents } from '@/lib/api/events';

export default function EventsPage() {
  /* ---------------- state ---------------- */
  const [events, setEvents]       = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  /* ------------ filter state ------------- */
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange,       setPriceRange]       = useState('All');
  const [searchQuery,      setSearchQuery]      = useState('');

  /* ----------- fetch + normalize ---------- */
  useEffect(() => {
    (async () => {
      try {
        const { data: raw } = await getAllEvents();

        // 1️⃣ map backend fields → UI-friendly keys
        // 2️⃣ add temporary price / image / category
        const priced = raw.map(evt => ({
          id:          evt.id,
          title:       evt.eventTitle,
          description: evt.eventDescription,
          date:        evt.eventDate,      // "2025-03-02"
          time:        evt.eventTime,      // "7pm"
          location:    evt.location,
          tickets:     evt.ticketsAvailable,
          price:       evt.ticketPrice,

          /* temp placeholders until DB adds them */
          // price:       Math.floor(Math.random() * 30000) + 5000, // ₦5k–₦35k
          image:       'https://via.placeholder.com/600x400?text=Event',
          category:    'General',
        }));

        setEvents(priced);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* --------- derived helpers -------------- */
  const categories = useMemo(
    () => ['All', ...new Set(events.map(e => e.category))],
    [events]
  );

  const filteredEvents = useMemo(() => {
    return events.filter(ev => {
      const matchCat =
        selectedCategory === 'All' || ev.category === selectedCategory;

      const matchPrice =
        priceRange === 'All' ||
        (priceRange === '0-100'  && ev.price <= 100) ||
        (priceRange === '101-200'&& ev.price > 100 && ev.price <= 200) ||
        (priceRange === '201+'   && ev.price > 200);

      const target = `${ev.title} ${ev.location}`.toLowerCase();
      const matchSearch = target.includes(searchQuery.toLowerCase());

      return matchCat && matchPrice && matchSearch;
    });
  }, [events, selectedCategory, priceRange, searchQuery]);

  /* --------------- render ----------------- */
  return (
    <>
      <NavBar />

      <div className="py-24 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h1>
            <p className="text-lg text-gray-600">
              Discover amazing events happening near you
            </p>
          </header>

          {/* ---------- filter bar ---------- */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                >
                  {categories.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range (₦)
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={priceRange}
                  onChange={e => setPriceRange(e.target.value)}
                >
                  <option value="All">All Prices</option>
                  <option value="0-100">0 – 100</option>
                  <option value="101-200">101 – 200</option>
                  <option value="201+">201+</option>
                </select>
              </div>
            </div>
          </section>

          {/* ---------- events grid ---------- */}
          {loading ? (
            <p className="text-center text-gray-600 py-12">Loading events…</p>
          ) : error ? (
            <p className="text-center text-red-600 py-12">{error}</p>
          ) : filteredEvents.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(ev => (
                <article
                  key={ev.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      ₦{ev.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {ev.category}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {ev.title}
                    </h3>

                    <div className="mt-3 space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>
                          {new Date(ev.date).toLocaleDateString('en-NG', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{ev.location}</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                      Get Tickets
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 py-12">
              No events found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
