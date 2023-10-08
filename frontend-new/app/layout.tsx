// import Header from '@/components/Header';
import Side from '@/components/Side'
import Footer from '@/components/Footer'
import './layout.scss'

export const metadata = {
  title: 'Homepage',
  description: 'This is homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="Layout__container">
          <div className="Layout__content">
            <Side />
            <div className="Layout__body">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
