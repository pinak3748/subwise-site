import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFound, RootErrorBoundary } from './page';
import LandingPage from './page/landingPage';
import PrivacyPolicy from './page/privacy-policy';
import TermsAndConditions from './page/terms-and-conditions';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
          errorElement={<RootErrorBoundary />}
        />
 <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
          errorElement={<RootErrorBoundary />}
        />
        <Route
          path="/terms"
          element={<TermsAndConditions />}
          errorElement={<RootErrorBoundary />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
