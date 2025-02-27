import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import SignInPage from "./pages/sign-in.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import User from "./pages/user.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="flex flex-1">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
