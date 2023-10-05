import styles from './styles.module.css'
import Head from './head';
import ResponsiveAppBar from '../components/Navbar/Navbar';

export const metadata = {
    title: "Layout"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='it'>
        <body>
            <Head/>
            <ResponsiveAppBar/>
            <main className={styles.main}>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;