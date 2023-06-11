import '@component/styles/globals.css'

export const metadata = {
  title: 'Calen.Dani',
  description: 'Pagina personal de mi persona',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
