import { createContext, useState } from 'react';
import * as SQLite from 'expo-sqlite';

export const DBContext = createContext();

export const DBProvider = ({ children }) => {
    const [db, setDb] = useState(null);

    const opneDB = async (databaseName) => {
        try {
            const db = await SQLite.openDatabaseAsync(databaseName);
            setDb(db);
        } catch (error) {
            console.error('Error while opening database: ', error);
            throw error;
        }
    }

    const createTabel = async (databaseName, tableName) => {
        try {
            const db = await SQLite.openDatabaseAsync(databaseName);

            const res = await db.execAsync(
                `CREATE TABLE IF NOT EXISTS ${tableName} (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    responses TEXT,
                    quizQuestions TEXT NOT NULL
                );` // Closing parenthesis added here
            );

            db.closeAsync();

            return res;

        } catch (error) {
            console.error('Error while creating database: ', error);
            throw error;
        }
    };

    const insertData = async (databaseName, tableName, data) => {
        try {

            const db = await SQLite.openDatabaseAsync(databaseName);

            const res = await db.runAsync(
                `INSERT INTO ${tableName} (id,quizQuestions)
                    VALUES (NULL, ?);`,
                [data]
            );

            db.closeAsync();
            return res;
        } catch (error) {
            console.error('Error while inserting data: ', error);
            throw error;
        }
    }

    const getData = async (databaseName, tableName) => {
        try {
            const db = await SQLite.openDatabaseAsync(databaseName);
            const result = await db.getFirstAsync(`SELECT * FROM ${tableName};`);
            db.closeAsync();

            return result;
        } catch (error) {
            console.error('Error while getting data: ', error);
            throw error;
        }
    }


    const dropTable = async (databaseName, tableName) => {
        try {
            const db = await SQLite.openDatabaseAsync(databaseName);
            const res = await db.execAsync(`DROP TABLE IF EXISTS ${tableName};`);
            db.closeAsync();
            return res;
        } catch (error) {
            console.error('Error while dropping table: ', error);
            throw error;
        }
    }

    const isTableExist = async (databaseName, tableName) => {
        try {
            const db = await SQLite.openDatabaseAsync(databaseName);
            const result = await db.execAsync(`SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}';`);
            db.closeAsync();
            return result?.length > 0;
        } catch (error) {
            console.error('Error checking table existence:', error);
            return false;
        }
    };

    const getRowCount = async (databaseName, tableName) => {
        try {
            const db = await SQLite.openDatabaseAsync(databaseName);
            const result = await db.execAsync(`SELECT COUNT(*) AS count FROM ${tableName}`);
            db.closeAsync();
            return result;
        } catch (error) {
            console.error('Error getting row count:', error);
            throw error;
        }
    };
    return (
        <DBContext.Provider value={{ createTabel, insertData, getData, dropTable, isTableExist, getRowCount }}>
            {children}
        </DBContext.Provider>
    );
};