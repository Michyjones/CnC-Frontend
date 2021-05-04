import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PageLoader from "./Spinner/PageLoader";
import Routing from "./appRouting/Routing/Routing";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
        <Routing />
      </Router>
    </Suspense>
  );
}

export default App;
