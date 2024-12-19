'use client'

import { useState } from 'react';
import axiosInstance from '@/utilities/axios'; 
import { useDispatch } from 'react-redux';
import { setUserId } from '@/lib/features/user/userSlice';
import Image from 'next/image';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation'; 
import { JwtPayload } from 'jwt-decode';

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter(); 


  interface CustomJwtPayload extends JwtPayload {
    sub: string;
    role: string;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted'); 

    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      console.log('Login Response:', response.data); 

      const { access_token } = response.data; 
      if (access_token) {
        document.cookie = `token=${access_token}; path=/; SameSite=Lax; Secure`;

        const decoded = jwtDecode<CustomJwtPayload>(access_token);
        console.log('Decoded JWT:', decoded); 

        if (!decoded || !decoded.sub || !decoded.role) {
          console.error('Failed to decode JWT or missing sub/role');
          return;
        }

        dispatch(setUserId(decoded.sub));

        console.log('Redirecting based on role...');
        switch (decoded.role) {
          case 'DOCTOR':
            router.push('/doctor');
            break;
          case 'PATIENT':
            router.push('/patient');
            break;
          case 'ASSISTANT':
            router.push('/assistant');
            break;
          default:
            router.push('/');
            break;
        }
        alert('Login successful!');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please try again.');
    }
  };
  

  return (
    <div className="grid grid-cols-2 bg-white min-h-full w-full text-black pt-10 pb-24">
      <div className="flex flex-col justify-center items-center p-10">
        <div className="flex text-8xl font-bold mb-8">
          <h1>User</h1>
          <h1 className="text-primary pl-2">Login</h1>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col items-center w-full gap-4">
          <input
            type="text"
            className="input-field w-2/3"
            placeholder="juandelacruz@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field w-2/3"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-2/3 flex justify-end">
            <button className="bg-primary text-white text-2xl px-6 py-2 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <Image 
          src="/login.png" 
          alt="Login image" 
          width={800} 
          height={700} 
        />
      </div>
    </div>
  );
};

export default page;