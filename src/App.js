import { useEffect } from "react";
import DefaultLayout from "./layouts/default/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import ScrollToTop from "./layouts/components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component
            return <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
