import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { RootState } from "../../store/root";
import { ThemeInterface } from "../util/helpers";
import { getTheme } from "../theme.selector";
import { classHue } from "../../wow/class";

export const defaultTheme: ThemeInterface = {
    mode: "dark",
    primaryHue: 220,
    secondaryHue: classHue.hunter,

    wowheadHues: {
        quest: 49,
        npc: 0,
        friendlyNpc: 110,
        spell: 49
    },

    gridSpan: 0.375 // 6px
};

const mapStateToProps = (state: RootState) => ({
    theme: getTheme(state)
});

export const ConnectedTheme = connect(mapStateToProps)(ThemeProvider);
export { ConnectedTheme as default };
