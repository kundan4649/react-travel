import React, { useState } from 'react';

const FlightSearchForm = () => {
  const [flightType, setFlightType] = useState('Round'); // Default to Round
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [cabinClass, setCabinClass] = useState('Economy'); // Default to Economy
  const [passengerCount, setPassengerCount] = useState(1); // Default to 1 passenger
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would call your search API with the form data
    // Example: fetchFlightResults({ flightType, fromAirport, toAirport, cabinClass, passengerCount, departureDate, arrivalDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Flight Type:
        <select value={flightType} onChange={(e) => setFlightType(e.target.value)}>
          <option value="Round">Round</option>
          <option value="One way">One way</option>
        </select>
      </label>
      <br />
      <label>
        From Airport:
        <select value={fromAirport} onChange={(e) => setFromAirport(e.target.value)}>
          {/* Populate options dynamically based on available airports */}
          {/* Example: <option value="JFK">John F. Kennedy International Airport</option> */}
        </select>
      </label>
      <br />
      <label>
        To Airport:
        <select value={toAirport} onChange={(e) => setToAirport(e.target.value)}>
          {/* Populate options dynamically based on available airports */}
        </select>
      </label>
      <br />
      <label>
        Cabin Class:
        <select value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
      </label>
      <br />
      <label>
        Passenger Count:
        <input type="number" value={passengerCount} onChange={(e) => setPassengerCount(e.target.value)} />
      </label>
      <br />
      <label>
        Departure Date:
        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
      </label>
      <br />
      {flightType === 'Round' && (
        <>
          <label>
            Arrival Date:
            <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
          </label>
          <br />
        </>
      )}
      <button type="submit">Search</button>
    </form>
  );
};

export default FlightSearchForm;
