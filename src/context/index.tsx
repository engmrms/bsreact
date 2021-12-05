/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { createContext, useCallback, useContext, useState } from "react";

import Toast from "../package/bootstrap/Toast";

interface toastElemnt {
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  message: JSX.Element;
}

const ToastContext = createContext<(toast: toastElemnt) => void>(() => {});
export function ToastContextProvider({ children }: { children: JSX.Element }) {
  const [toasts, setToasts] = useState<toastElemnt[]>([]);

  const showToast = useCallback(
    function (toast: toastElemnt) {
      setToasts((toasts) => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={showToast}>
      {children}

      {toasts.map((toastEle: toastElemnt, i) => (
        <Toast
          key={i}
          toast
          position="top-end"
          className={`${"border-none"}`}
          bg={toastEle?.type}
        >
          <Toast.Body>{toastEle?.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContext.Provider>
  );
}

export default function useToastContext() {
  return useContext(ToastContext);
}
