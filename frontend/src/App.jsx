
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateMeeting from "./pages/CreateMeeting";
import JoinMeeting from "./pages/JoinMeeting";
import MeetingRoom from "./pages/MeetingRoom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create-meeting" element={<CreateMeeting />} />

        <Route path="/join" element={<JoinMeeting />} />

        <Route path="/meeting/:roomId" element={<MeetingRoom />} />

        {/* 404 route - keep this last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;