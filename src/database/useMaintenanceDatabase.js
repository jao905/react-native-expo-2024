import { useSQLiteContext } from "expo-sqlite";

export function useMaintenanceDatabase() {
  const database = useSQLiteContext();

  async function resetDatabase() {
    try {
      await database.withTransactionAsync(async () => {
        //delete ----> apaga os dados da tabela/entidade
        //drop ----> apaga a tabela/entidade
        try {
          await database.execAsync(
            `DROP INDEX IF EXISTS idx_payments_data_pagamento;`
          );
          await database.execAsync(`DROP INDEX IF EXISTS idx_users_nome;`);
          await database.execAsync(`DROP TABLE IF EXISTS payments;`);
          await database.execAsync(`DROP TABLE IF EXISTS users;`);
          await database.execAsync(`
                 CREATE TABLE IF NOT EXISTS users (
                 id INTEGER PRIMARY KEY AUTOINCREMENT,
                 nome TEXT,
                 curso TEXT,
                 email TEXT NOT NULL UNIQUE,
                 senha TEXT NOT NULL DEFAULT 'A123456a!',
                 role TEXT NOT NULL DEFAULT 'USER',
                 created_at DATE DEFAULT CURRENT_TIMESTAMP,
                 updated_at DATE
                );`);
          await database.execAsync(`
                CREATE TABLE IF NOT EXISTS payments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                user_cadastro INTEGER NOT NULL,
                valor_pago REAL NOT NULL,
                data_pagamento DATE NOT NULL,
                numero_recibo TEXT NOT NULL,
                observacao TEXT,
                imagem TEXT DEFAULT "",
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                 updated_at DATE,
                 FOREIGN KEY (user_id) REFERENCES users(id),
                 FOREIGN KEY (user_cadastro) REFERENCES users(id)
                );
                `);

          //para toda pesquisa/ordencacao que for feita pelo nome, o banco de dados vai criar um indice para melhorar a performance
          await database.execAsync(
            `CREATE INDEX IF NOT EXISTS idx_users_nome ON users (nome); `
          );
          await database.execAsync(
            `CREATE INDEX IF NOT EXISTS idx_payments_data_pagamento ON payments (data_pagamento);`
          );

          await database.execAsync(
            `INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Super', 'super@email.com', 'A123456a!', 'SUPER')`
          );
          await database.execAsync(
            `INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin', 'admin@email.com', 'A123456a!', 'ADMIN')`
          );
          await database.execAsync(
            `INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('User', 'user@email.com', 'A123456a!', 'USER')`
          );

          console.log("Database reset success ");
        } catch (error) {
          console.log("useMaintenanceDatabase resetDatabase error: ", error);
          throw error;
        }
      });
      console.log("useMaintenanceDatabase resetDatabase success: ");
    } catch (error) {
      console.error("useMaintenanceDatabase resetDatabase error: ", error);
    }
  }

  return { resetDatabase };
}
