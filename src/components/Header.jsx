import globe from "../assets/globe.svg";

export default function Header() {
  return (
    <header>
      <img src={globe} alt="Globe Image" />
      <h1>my travel journal</h1>
    </header>
  );
}
