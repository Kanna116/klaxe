import "@/styles/globals.css";
import ProjectState from "./context/projectstate";
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {

  return (
    <>
    {/* theme provider */}
      <ThemeProvider>
        {/* project data provider */}
        <ProjectState>
          <Component {...pageProps} />
        </ProjectState>
      </ThemeProvider>
    </>
  );
}
