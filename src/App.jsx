import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppDetails from './pages/AppDetails'; 
import Header from './components/Header';
import Footer from './components/Footer'; 
import apps from './data/apps.json'; 


const Layout = ({ children }) => (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
            {children}
        </main>
        <Footer />
    </div>
);

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
             
                <Route path="/" element={
                    <Layout>
                        <Home />
                    </Layout>
                } />

             
                <Route path="/apps/:id" element={
                    <Layout>
                      
                        <AppDetails appsData={apps} /> 
                    </Layout>
                } />

                <Route path="*" element={
                    <Layout>
                        <h1 className="text-3xl font-bold text-center mt-20">404 - Page Not Found</h1>
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
}