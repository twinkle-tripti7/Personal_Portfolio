import React from 'react';
import './css/style.css';

const certifications = [
    {
        title: "Introduction to CyberSecurity",
        description: "Earned this certificate for completing the basics of CyberSecurity.",
        buttonLink: "https://www.credly.com/badges/18053b3d-97d6-4852-8649-8f9368f67965/linked_in_profile",
    },
    {
        title: "Java Certification",
        description: "This was certified by HackerRank for the Java Skills Test.",
        buttonLink: "https://www.hackerrank.com/certificates/afa3d942cdc6",
    },
    {
        title: "Problem-Solving Certification",
        description: "This was certified by HackerRank for the Problem-Solving Skills Test.",
        buttonLink: "https://www.hackerrank.com/certificates/7c08c850f5ed",
    }
];

const CertificationCard = ({ title, description, buttonLink }) => {
    return (
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="certification-card-link">
            <div className="certification-card w-72 h-88 relative overflow-hidden rounded-lg shadow-lg">
                <div className="card-front absolute w-full h-full">
                    <img
                        src="https://images.pexels.com/photos/2232567/pexels-photo-2232567.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Certification"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="card-back absolute w-full h-full bg-blue-800 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-500">
                    <h5 className="text-xl font-semibold mb-2">{title}</h5>
                    <p className="text-center px-4">{description}</p>
                   
                </div>
            </div>
        </a>
    );
};

const Certifications = () => {
    return (
        <>
            <div className="certificate" id='certification'>
                <h1 className="text-3xl font-bold mb-8">My Certifications</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <CertificationCard key={index} {...cert} />
                    ))}
                </div>
            </div>

        </>
    );
};

export default Certifications;
