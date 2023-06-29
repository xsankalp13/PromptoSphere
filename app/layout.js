
import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'PromptoSphere',
  description: 'Discover and Share AI Prompts',
  icons:{
    icon:'/assets/icons/favicon.ico',
    apple:'/assets/icons/apple-touch-icon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <></>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>

          <main className='app'>
            <Nav/>
            {children}
          </main>

        </Provider>
      </body>
    </html>
  )
}
