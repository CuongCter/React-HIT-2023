import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  // Layout: Header, Footer
  return (
    <div className="youtube-list">
        
      {props.children}
      {YoutubeData.map((item, index) => {

        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            // avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
          ></YoutubeItem>
        );
      })}
      
    </div>
  );
};

export default YoutubeList;