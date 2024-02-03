"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { Audio, InfinitySpin } from 'react-loader-spinner'

const AuthContext = createContext({});

export function useUserAuth() {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);
    const [loading, setIsLoading] = useState(true);
    const router = useRouter();


    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);

    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthChecked(true);

            if (currentUser) {
                router.replace('/dashboard');
            } else {
                router.replace('/login');
            }
        });

        return () => {
            unsubscribe();
        };
    }, [user]);


    if (!authChecked) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center">
                <InfinitySpin
                    visible={true}
                    width="100"
                    color="#4fa94d"
                    ariaLabel="infinity-spin-loading"
                />
            </div>
        );
    }
    return (
        <AuthContext.Provider value={{ user, googleSignIn, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

