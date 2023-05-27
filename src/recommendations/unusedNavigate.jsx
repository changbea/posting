import { Link } from "react-router-dom";
import "./Navigate.css";

function Navigate() {
  return (
    <div className="nav">
      <Link to="/">Page</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
}
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     moviesRanked: [],
//   };
//   getMovies = async () => {
//     // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json/sort_by=rating");
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(
//       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
//     );
//     this.setState({ moviesRanked: movies, isLoading: false });
//   };
//   componentDidMount() {
//     // axios.get("https://yts-proxy.now.sh/list_movies.json/sort_by=rating");
//     this.getMovies();

//     // setTimeout(() => {
//     //   this.setState({ isLoading: false });
//     // }, 6000);
//   }
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.setState({ isLoading: false });
//   //   }, 6000);
//   // }
//   render() {
//     const { isLoading, moviesRanked } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span>Loading</span>
//           </div>
//         ) : (
//           <div className="moviesRanked">
//             {moviesRanked.map((c) => (
//               <Ranks
//                 key={c.id}
//                 id={c.id}
//                 title={c.title}
//                 year={c.year}
//                 summary={c.summary}
//                 poster={c.medium_cover_image}
//                 genres={c.genres}
//               ></Ranks>
//             ))}
//           </div>
//         )}
//       </section>
//     );
//     // return (
//     //   <HashRouter>
//     //     <Route />
//     //   </HashRouter>
//     // );
//     // return <div>{isLoading ? "Loading" : "Here we go"}</div>;
//   }
//   componentDidUpdate() {
//     return (
//       <HashRouter>
//         <Route path="/resume" Component={Resume} />
//       </HashRouter>
//     );
//   }
// }
// constructor(props) {
//   super(props);
// }
// componentDidMount() {}
// componentDidUpdate() {}
// componentWillUnmount() {}

// state = { count: 0 };

// add = () => {
//   this.setState((current) => ({ count: current.count + 1 }));
// };
// minus = () => {
//   this.setState((current) => ({ count: current.count + 5 }));
// };

// render() {
//   return (
//     <div>
//       <p>component: {this.state.count}</p>
//       <button onClick={this.add}>add</button>
//       <button onClick={this.minus}>minus</button>
//     </div>
//   );
// }
// }

// // function App() {
// //   return <h1>Practice makes</h1>;
// // }

// function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route exact path="/" Component={Resume} />
//       </Routes>
//     </HashRouter>
//   );
// }
export default Navigate;
