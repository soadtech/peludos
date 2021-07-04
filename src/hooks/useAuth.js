import React, { useState, useEffect } from 'react';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({});

    return {
        authenticated,
        user
    };
};
export default useAuth;
