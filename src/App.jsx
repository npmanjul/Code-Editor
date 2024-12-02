import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
    <div style={{fontSize:34,fontWeight:600,color:"white"}}>XCode Editor</div>
      <CodeEditor />
    </Box>
  );
}

export default App;
