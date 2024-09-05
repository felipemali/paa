import { AuthProvider } from "./src/provider/Auth";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";

export const iniciarBancoDeDados = async (db) => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        password TEXT,
      );

      CREATE TABLE IF NOT EXISTS levelUser (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        level INTEGER
      );
    `);
    console.log("Banco de Dados inicializado");
  } catch (error) {
    console.log("Erro ao iniciar o Banco de Dados. ", error);
  }
};
function App() {
  return (
    <AuthProvider>
      <SQLiteProvider
        databaseName="bancoUsuario.db"
        onInit={iniciarBancoDeDados}
      >
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SQLiteProvider>
    </AuthProvider>
  );
}

export default App;
