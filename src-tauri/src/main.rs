#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use winapi::um::winuser::{SendMessageA, FindWindowA, WM_COPYDATA, COPYDATASTRUCT};
use std::ffi::CString;
use winapi::shared::windef::{HWND};

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![send_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn send_command(command: &str) {
  println!("{}", command);
  unsafe {
    let a = CString::new("Valve001").unwrap();
    let hwnd: HWND = FindWindowA(a.as_ptr() as *const i8, std::ptr::null());
    let c: COPYDATASTRUCT = COPYDATASTRUCT {
      dwData: 0,
      cbData: (command.len()) as u32,
      lpData: command.as_ptr() as *mut winapi::ctypes::c_void
    };
    SendMessageA(hwnd, WM_COPYDATA, 0, &c as *const _ as isize);
  }
}