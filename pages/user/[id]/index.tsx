import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { UserType } from '@/types/user';
import { Button } from '@/components/Button';
import { InfoItem } from '@/components/InfoItem';

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${id}`
          );
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUser();
    }
  }, [id]);

  if (!user) return <div className='text-center'>Cargando...</div>;

  return (
    <div className='flex flex-col items-center p-6 bg-gray-100 min-h-screen'>
      <title>{user.login}</title>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md bg-gradient-to-b from-purple-300 to-purple-50 space-y-4'>
        <h1 className='text-3xl font-bold text-center mb-4'>{user.login}</h1>
        <img
          src={user.avatar_url}
          alt={user.login}
          className='w-48 h-48 rounded-full mx-auto mb-4 border-4 border-gray-200'
        />

        <InfoItem
          iconClassName='fa fa-link'
          label='URL'
          content={
            <a
              href={user.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              {user.html_url}
            </a>
          }
        />

        <InfoItem
          iconClassName='fa fa-user'
          label='Biografía'
          content={user.bio || 'Sin biografía'}
        />

        <InfoItem
          iconClassName='fa fa-users'
          label='Seguidores'
          content={user.followers as string}
        />

        <InfoItem
          iconClassName='fa fa-user-plus'
          label='Siguiendo'
          content={user.following as string}
        />

        <InfoItem
          iconClassName='fa fa-code-fork'
          label='Repositorios públicos'
          content={user.public_repos as string}
        />

        <div className='flex justify-center mt-4'>
          <Button href='/' text='Volver' iconClassName='fa fa-arrow-left' />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
