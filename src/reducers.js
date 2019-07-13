import { changeColorCode } from './actions';

let initialState = {
    colorCode: 'ffff00'
}
export default function (state = initialState, action) {
    switch(action.type){
        case 'change_color_code':
                return {
                    colorCode: action.colorCode
                };
        default:
            return state;

    }
};