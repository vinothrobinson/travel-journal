import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const countryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        title={entry.title}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      {countryElements}
    </>
  );
}

export default App;
