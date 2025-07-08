import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My App',
    description: 'Welcome to Panda!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header className="bg-gray-800 text-white p-4">
                    <h1 className="text-xl font-bold">ASLense</h1>
                </header>
                <>{children}</>
                <footer className="bg-gray-900 text-white text-sm p-4 text-center">
                    © 2025 ASLense. All rights reserved.
                </footer>
            </body>
        </html>
    );
}
