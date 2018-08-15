
import Prompt from "./prompt"
import Popup from "react-popup";
import React from "react"

const register = () =>{

    Popup.registerPlugin("prompt", function(defaultValue, placeholder, callback) {
        let promptValue = null;
        let promptValue2 = null;
        let promptChange = function(value1,value2) {
          promptValue = value1;
          promptValue2 = value2;
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
                  callback(promptValue,promptValue2);
                  Popup.close();
                }
              }
            ]
          }
        });
      });
      


}

export default register