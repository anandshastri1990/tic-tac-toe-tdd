import {ArrowClockwise, ArrowLeftCircle} from "react-bootstrap-icons";
import React from "react";

export function ControlPanel(props) {

    return <div className="center mt-8">
                <span id={"restart-wrapper"}
                      onClick={() => props.restartGame()}
                      className="button column center mr-5">
                    <span id="restart-icon"><ArrowClockwise/></span>
                    <span id="restart"
                          className="ml-1">Restart game
                    </span>
                </span>

        <span id={"undo-wrapper"}
              onClick={() => props.undoAMove()}
              className="button column center">
                    <span id="undo-icon"><ArrowLeftCircle/></span>
                     <span id="undo"
                           className="ml-1">
                         Undo a move
                    </span>
                </span>
    </div>

}