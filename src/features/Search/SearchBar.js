// import React, { Component } from 'react';
// import { Search } from 'semantic-ui-react';
// import './SearchBar.css';
// import { SearchBars, TextInput } from '../home.sytled';

// export default class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: '' };
//   }

//   render() {
//     return (
//       <div className="block">
//         <div className="control search-bar">
//           <h1 className="title is-1">&nbsp; Search Messages</h1>
//           <SearchBars>
//             <TextInput
//               type="text"
//               placeholder="Search for a message"
//               value={this.state.term}
//               onChange={(event) => this.onInputChange(event.target.value)}
//             />
//           </SearchBars>
//         </div>
//       </div>
//     );
//   }

//   onInputChange(term) {
//     this.setState({ term });
//     this.props.onSearchTermChange(term);
//   }
// }
