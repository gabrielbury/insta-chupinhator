import { PixelRatio } from "react-native";

let FONT_BUTTON_TEXT = 18;
if (PixelRatio.get() <= 2) {
    FONT_BUTTON_TEXT = 14;
}

const responsiveDimensions = (biggerSize, smallerSize) => 
    PixelRatio.get() <= 2 ? smallerSize : biggerSize;


export {
    FONT_BUTTON_TEXT,
    responsiveDimensions
}