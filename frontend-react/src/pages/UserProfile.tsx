import React, { useEffect, useState } from 'react';

const UserProfile: React.FC = () => {
    const [loginData, setLoginData] = useState<any>(null);

    useEffect(() => {
        // Obtener loginData del localStorage
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            setLoginData(JSON.parse(storedLoginData));
        }
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {loginData ? (
                <div>
                    <div>
                        {/* Mostrar la imagen de perfil */}
                        {loginData.pfp ? (
                            <img src={loginData.pfp} alt="User Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                        ) : (
                            <p>No se ha proporcionado una imagen de perfil.</p>
                        )}
                    </div>
                    <p><strong>Nombre:</strong> {loginData.name}</p>
                    <p><strong>Email:</strong> {loginData.email}</p>
                    <p><strong>Tipo:</strong> {loginData.type}</p>
                    {/* Mostrar otros datos del loginData aquí */}
                </div>
            ) : (
                <p>Cargando datos del usuario...</p>
            )}
        </div>
    );
};

export default UserProfile;

