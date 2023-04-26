import sqlite from "sqlite3";
import { IUser } from "../models/users/IUser";

const db = new sqlite.Database("database.db");

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    CONSTRAINT uniqueUsername UNIQUE(username)
  );
`;

db.run(createUsersTable, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Users table created successfully");
  }
});

export const registerUser = (
  username: string,
  password: string,
  callback: (err: Error | null) => void
) => {
  const query = `
        INSERT INTO users (username, password)
        VALUES (?, ?)
      `;
  const values = [username, password];

  db.run(query, values, callback);
};

export const getUsers = (
  callback: (err: Error | null, rows: IUser[]) => void
) => {
  const query = "SELECT * FROM users;";
  db.all(query, callback);
};

export const getAccountByUsername = (
  username: string,
  callback: (err: Error | null, row: IUser) => void
) => {
  const query = `
      SELECT * FROM users WHERE username = ?
    `;
  const values = [username];

  db.get(query, values, callback);
};
