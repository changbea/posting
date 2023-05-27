import "./Rankers.css";

function Ranks({ id, title, year, summary, poster, genres }) {
  return (
    <div className="moviesRank">
      <img src={poster} alt={title} title={title}></img>
      <p className="ry">{year}</p>
      <p className="rt">{title}</p>
      <p className="rs">{summary.slice(0, 100)}#</p>
      <ul className="rg">
        {genres.map((c, num) => (
          <li key={num}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ranks;
