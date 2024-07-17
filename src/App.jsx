import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import AdpotedPetContext from "./AdpotedPetContext";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient();

const App = () => {
  const adpotedPet = useState(null);
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdpotedPetContext.Provider value={adpotedPet}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdpotedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
