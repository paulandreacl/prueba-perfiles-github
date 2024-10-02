import { Button } from '@/components/Button';
import { UserType } from '@/types/user';
import axios from 'axios';
import React from 'react';

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      'https://api.github.com/search/users?q=YOUR_NAME'
    );
    return {
      props: {
        dataProfile: response.data.items || [],
      },
    };
  } catch {
    return {
      props: {
        dataProfile: [],
      },
    };
  }
};

const Index = ({ dataProfile }: { dataProfile: UserType[] }) => {
  return (
    <div className='flex flex-col items-center py-4 h-screen'>
      <title>Lista de usuarios Github</title>
      <h1 className='text-2xl font-bold'>Lista de usuarios Github</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {dataProfile.map((user: UserType) => (
          <div
            key={user.id}
            className='bg-gradient-to-b from-purple-300 to-purple-50 rounded-lg shadow-lg p-4 hover:scale-105 border space-y-4'
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className='w-24 h-24 rounded-full mx-auto mb-4'
            />
            <h2 className='text-center font-bold'>{user.login}</h2>
            <Button
              href={`/user/${user.login}`}
              text=' Ver Detalles'
              iconClassName='fa fa-user'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
