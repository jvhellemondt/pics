import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async ( term ) => {
    const response = await unsplash.get( "/search/photos", {
      params: { query: term },
    } );

    this.setState( {
      images: response.data.results
    } );
  }

  render() {
    return (
      <div className="ui container"
            style={{ marginTop: "10px" }} >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// Access Key
// c082271fdc91d30a57343e39f70316f8e3ea3e28ac33cb15175d541d0d467f61
// Secret key
// ddf6bd0cf2673ea0bd7f605e08fa421b6575610bdfa49ad37b353d69383c08d0