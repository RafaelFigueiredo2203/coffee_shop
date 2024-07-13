
import { CoffeeStore } from "./components/coffee/coffee-store";
import { Header } from "./components/header";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  
  return (
    <>
      <Header/>
      <Dashboard/>
      <CoffeeStore/>
    </>
  )
}


