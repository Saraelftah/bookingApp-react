import { Suspense } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <>
            <div className="flex justify-center items-center h-screen">
              <span className="loading loading-ring loading-xs"></span>
              <span className="loading loading-ring loading-sm"></span>
              <span className="loading loading-ring loading-md"></span>
              <span className="loading loading-ring loading-lg"></span>
              <span className="loading loading-ring loading-xl"></span>
            </div>
          </>
        }
      >
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
