import './App.css'
import Kidopia from './components/Kidopia'
import { HashRouter as Router } from "react-router-dom";
import { FrappeProvider } from "frappe-react-sdk";
import { AuthProvider } from "./contexts/AuthContext";

// Use proxy URL for development, direct URL for production
const frappeUrl = import.meta.env.DEV ? window.location.origin : 'https://kidopia.memby.online';

console.log('Frappe URL:', frappeUrl);
console.log('Environment:', import.meta.env.DEV ? 'development' : 'production');

function App() {
  return (
    <FrappeProvider 
      url={frappeUrl}
      enableCSRF={true}
      csrfTokenPath="/api/method/frappe.auth.get_csrf_token"
    >
      <AuthProvider>
        <Router>
          <Kidopia />
        </Router>
      </AuthProvider>
    </FrappeProvider>
  );
}

export default App;