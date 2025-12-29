import React from 'react'
import './Events.css'

import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import toreo from '../assets/Toreo_data.jpeg'

function Events() {
  const events = [
    {
      id: 1,
      title: 'Campus Recruitment',
      date: 'June 10, 2024',
      location: 'Spring, TX, USA',
      img: img1,
      alt: 'Campus recruitment'
    },
    {
      id: 2,
      title: 'Annual Meet',
      date: 'September 3, 2024',
      location: 'Hyderabad, India',
      img: img2,
      alt: 'Annual meet'
    },
    {
      id: 3,
      title: 'CEO Address',
      date: 'November 14, 2024',
      location: 'Kitchener, Canada',
      img: img3,
      alt: 'CEO of the company'
    },
    {
      id: 4,
      title: 'Toreo Data - Product',
      date: 'March 12, 2025',
      location: 'Virtual',
      img: toreo,
      alt: 'Toreo Data - product'
    }
  ]

  return (
    <div className="events-page">
      <div className="container">
        <header className="events-header">
          <h1>Our Events</h1>
          <p>Explore past and upcoming MHK events — workshops, meetups, and summits.</p>
        </header>

        <div className="events-grid">
          {events.map((e) => (
            <article key={e.id} className="event-card">
              <img src={e.img} alt={e.alt} className="event-image" />
              <div className="event-body">
                <h3 className="event-title">{e.title}</h3>
                <p className="event-meta">{e.date} · {e.location}</p>
                <p className="event-desc">Join industry leaders and practitioners to learn how MHK builds scalable data platforms and delivers enterprise outcomes.</p>
                <div className="event-actions">
                  <a className="btn btn-outline" href="#">View Details</a>
                  <a className="btn btn-primary" href="#">Register</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
