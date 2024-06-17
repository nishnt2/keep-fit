// Prevents additional console window on Windows in release, DO NOT REMOVE!!
 #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri_plugin_sql::{Builder, Migration, MigrationKind};
fn main() {
   let migrations = vec![
        // Define your migrations here
        Migration {
            version: 1,
            description: "create_initial_tables",
            sql: "CREATE TABLE users (id TEXT PRIMARY KEY, name TEXT, phone_no TEXT, date_of_birth DATE, photo_path TEXT, date DATE, aadhar_no TEXT, aadhar_path TEXT);",
            kind: MigrationKind::Up,
        }
    ];
tauri::Builder::default()
   .plugin(tauri_plugin_sql::Builder::default()
   .add_migrations("postgres://postgres:8520@localhost/keepfit", migrations)
   .build())
   .run(tauri::generate_context!())
   .expect("error while running tauri application");
}


