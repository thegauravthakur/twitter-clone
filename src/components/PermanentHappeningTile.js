import "../styles/covidBlock.css";

export function PermanentHappeningTile() {
  return (
    <div className="covidBlock">
      <div>
        <p className="covidBlock__subheading">COVID-19 . LIVE</p>
        <p className="covidBlock__heading">COVID-19 in India</p>
      </div>
      <img
        className="covidBlock__image"
        src="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
      />
    </div>
  );
}
