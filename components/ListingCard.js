export default function ListingCard({ item }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>{item.name}</h2>
      <p>{item.type} • {item.openingHours}</p>
      {item.bookingUrl && (
        <a href={item.bookingUrl} target="_blank" rel="noopener noreferrer">
          Book a table
        </a>
      )}
    </div>
  );
}
