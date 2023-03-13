// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from "react-toastify"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </Html>
  )
}