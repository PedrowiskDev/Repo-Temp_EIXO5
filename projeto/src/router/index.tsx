import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../view/pages/Login/index"; // Importe o componente da página de login

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Adicione mais rotas conforme necessário */}
        
        {/* Rota padrão - redirecionar para a página de login se a rota não for encontrada */}
        
      </Routes>
    </BrowserRouter>
  );
}
