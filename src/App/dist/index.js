"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Header_1 = require("./Header");
var Sidebar_1 = require("./Sidebar");
var Main_1 = require("./Main");
var App = function () {
    var theme = styles_1.useTheme();
    var hamburgerMode = material_1.useMediaQuery(theme.breakpoints.down("md"));
    var _a = react_1.useState(hamburgerMode), sidebarOpen = _a[0], setSidebarOpen = _a[1];
    react_1.useEffect(function () {
        hamburgerMode || setSidebarOpen(hamburgerMode);
    }, [hamburgerMode]);
    return (React.createElement(material_1.Box, { sx: {
            minHeight: "100vh",
            width: "100vw"
        } },
        React.createElement(material_1.CssBaseline, null),
        React.createElement(Header_1["default"], { hamburgerMode: hamburgerMode }),
        sidebarOpen && React.createElement(Sidebar_1["default"], null),
        React.createElement(material_1.Container, { maxWidth: "lg", sx: {
                paddingTop: "24px"
            } },
            React.createElement(Main_1["default"], null))));
};
exports["default"] = App;
