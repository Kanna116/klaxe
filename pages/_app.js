import "@/styles/globals.css";
import ProjectState from "./context/projectstate";

export default function App({ Component, pageProps }) {

  return (
    <>
      <ProjectState>
        <Component {...pageProps} />
      </ProjectState>
    </>
  );
}
