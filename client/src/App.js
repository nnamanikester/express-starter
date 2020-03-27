import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { listLogEntries } from "./API";
require("dotenv/config");

class App extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 37.7577,
      longitude: -12.4376,
      zoom: 3
    },
    logEntries: []
  };

  loadEntries = async () => {
    const logEntries = await listLogEntries();
    this.setState({ logEntries: logEntries });
    console.log(logEntries);
  };

  componentDidMount() {
    this.loadEntries();
  }

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1Ijoia2VzY3JpcHQiLCJhIjoiY2s4OWY0aGhzMDYyazNncGtieWJjMnZqdSJ9.WDtnfG9Ber0_SJNeAMVPyw"
        }
        {...this.state.viewport}
        onViewportChange={() =>
          this.setState({ viewport: this.state.viewport })
        }
      >
        {this.state.logEntries.map(entry => (
          <Marker
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-12}
            offsetTop={-24}
            key={entry._id}
          >
            <div>
              <img
                src="https://i.imgur.com/y0G5YTX.png"
                alt="marker"
                className="marker"
              />
            </div>
          </Marker>
        ))}
      </ReactMapGL>
    );
  }
}

export default App;
