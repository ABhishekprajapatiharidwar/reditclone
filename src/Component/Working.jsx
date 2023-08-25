import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './working.css';

export default function Working() {
    const navigate = useNavigate();
    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate('/'); 
        }, 3000); 
        return () => clearTimeout(redirectTimeout);
    }, [navigate]);

    return (
        <div className="maintenance-container">
            <div className="maintenance-content">
                <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1626338601810x281469710431790050%2FDown_For_Maintenance_png.gif?w=&h=&auto=compress&dpr=1&fit=max" alt="Maintenance GIF"></img>
                <h1>Website Under Maintenance</h1>
                <p>We're currently performing some maintenance. New features are coming soon!</p>
                <p>If you have any urgent inquiries, you can reach us at prajapatiabhishek02@gmail.com.</p>
                <p>Thank you for your patience.</p>
            </div>
        </div>
    );
}
