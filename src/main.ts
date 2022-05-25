import './main.css';
import AppRoot from "@components/app-root";
import AppBar from "@components/app-bar";
import AppThemeSwitch from "@components/app-theme-switch";
import AppScreen from "@components/app-screen";
import AppKeypad from "@components/app-keypad";

customElements.define("app-bar", AppBar);
customElements.define("app-theme-switch", AppThemeSwitch);
customElements.define("app-screen", AppScreen);
customElements.define("app-keypad", AppKeypad);
customElements.define("app-root", AppRoot);
