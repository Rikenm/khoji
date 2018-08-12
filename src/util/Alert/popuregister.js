
import Prompt from "./prompt"
import Popup from "react-popup";
import React from "react"

const register = () =>{

    Popup.registerPlugin("prompt", function(defaultValue, placeholder, callback) {
        let promptValue = null;
        let promptChange = function(value) {
          promptValue = value;
        };
    
        this.create({
          title: "Specify your location?",
          content: (
            <Prompt
              onChange={promptChange}
              placeholder={placeholder}
              value={defaultValue}
            />
          ),
          buttons: {
            left: ["cancel"],
            right: [
              {
                text: "Save",
                key: "⌘+s",
                className: "success",
                action: function() {
                  callback(promptValue);
                  Popup.close();
                }
              }
            ]
          }
        });
      });
      


}

export default register