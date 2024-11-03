import { Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { routes } from "./routes";
import { Route } from "react-router-dom";
import { ProfileProvider } from "./context";

function App() {
  return (
    <ProfileProvider>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </ProfileProvider>
  );
}

export default App;
