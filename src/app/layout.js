import './globals.css'
import  ThemeProvider  from '../components/ThemeProvider'
import ApplicationBar from '../components/ApplicationBar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout(props) {


  const {children}=props

  return (
    <html lang="en">

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-CDRY96QGFR"/>
<Script
  id='google-analytics'
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-CDRY96QGFR');
  `,
  }} />
      <body >
        <ThemeProvider>
          <ApplicationBar /*  navData={navData} */ {...props}/>

        {children}
        <Footer/>
        </ThemeProvider>
       </body>
    </html>
  )
}