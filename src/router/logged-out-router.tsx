import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostView from "../components/PostView";
import Write from "../components/quill";
import Home from "../page/Home";

export const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/board" element={<PostView />} />
      </Routes>
    </BrowserRouter>
  );
};
