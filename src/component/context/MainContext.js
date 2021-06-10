const { createContext } = require('react');

const MainContext = createContext({
    loadingDialog: false,
    setLoadingDialog: () => { },
    dashboard: {},
    setDashboardInfo: () => { }
});

export default MainContext;
