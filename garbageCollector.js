<div
        onMouseDown={e => {
          // e.persist();
          const radius = document.querySelector(".radius");
          radius.style.zIndex = 999;
          function moveThis(eventX, eventY) {
            radius.style.left =
              eventX -
              e.target.getBoundingClientRect().x -
              radius.offsetWidth / 2 +
              "px";
            radius.style.top =
              eventY -
              e.target.getBoundingClientRect().y -
              radius.offsetHeight / 2 +
              "px";
          }
          moveThis(e.pageX, e.pageY);
          function onMouseMove(e) {
            moveThis(e.pageX, e.pageY);
          }
          window.addEventListener("mousemove", onMouseMove);
          radius.onMouseUp = function() {
            window.removeEventListener("mousemove", onMouseMove);
            radius.onMouseUp = null;
          };
        }}
        className="container"
      >
        <div className="overlay"></div>
        <div className="radius"></div>
      </div>


.container {
    width: 300px;
    height: 300px;
    background-color: rgba(0, 255, 0, 1);
    position: relative;
    cursor: grab;
  }
  
  .container:active {
    cursor: grabbing;
  }
  
  .overlay {
    width: 300px;
    height: 300px;
    position: relative;
    background: -webkit-linear-gradient(bottom, #000 0%, rgba(0, 0, 0, 0) 100%),
      -webkit-linear-gradient(left, #FFF 0%, rgba(255, 255, 255, 0) 100%)
  }
  
  .radius {
    position: absolute;
    left: calc(50%);
    top: calc(50%);
    width: 14px;
    height: 14px;
    border-radius: 1rem;
    border: 2px white solid;
  }

  <>
  <h1>ASYNC REACT HOOKS</h1>
  <form onSubmit={onSubmit}>
    <input
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search for Gifs"
    ></input>
    <button type="submit">Submit</button>
  </form>
  {results.map((item, index) => (
    <video autoPlay loop key={index} src={item} />
  ))}
</>

const [search, setSearch] = useState("");
const [query, setQuery] = useState("");
const [results, setResults] = useState([]);

// wuTfUtASz0XRGP0IOdRVuhnP3JClRH2R Gify API key

const onSubmit = e => {
  e.preventDefault();
  setQuery(search);
};

useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=wuTfUtASz0XRGP0IOdRVuhnP3JClRH2R&q=${query}&limit=25&offset=0&rating=G&lang=en`
      );
      const data = await response.json();
      console.log({ data });
      setResults(data.data.map(item => item.images.preview.mp4));
    } catch (error) {
      console.log(error);
    }
  }
  if (query !== "") {
    fetchData();
  }
}, [query]);