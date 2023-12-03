interface User {
    user_id: string,
    user_name: string,
    contact_number: string,
    email_id: string,
    profile_picture: string
}

export const users: User[] = [
    {
    user_id: '1',
    user_name: 'John',
    contact_number: '+1 123456789',
    email_id: 'johnwick@gmail.com',
    profile_picture: 'cool picture'
    }
];

export default User;